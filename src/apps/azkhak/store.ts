import { createStore, useSelector } from '@tanstack/react-store'
import { useEffect, useState } from 'react'
import { generateShortId } from '#/common/utils/generateShortId'
import { keys, StorageEntry, storage } from '#/features/persistence'
import type { ZakhakEntry } from './ZakhakEntry'

interface AzkhakStoreShape {
  subject: string
  zakhaks: ZakhakEntry[]
}

const emptyState: AzkhakStoreShape = {
  subject: '',
  zakhaks: [],
}

// ====================

const MS_PER_MINUTE = 60_000
const TOTAL_TIME_UPDATE_INTERVAL_MS = 30_000

// ====================

/** Calculate the duration in minutes between two ISO timestamps. */
const getDurationInMinutes = (startIso: string, endIso: string): number => {
  const diff = new Date(endIso).getTime() - new Date(startIso).getTime()
  return Math.round(diff / MS_PER_MINUTE)
}

/** Predicate to check if an entry is a currently running auto timer. */
const isRunningEntry = (entry: ZakhakEntry): boolean =>
  entry.type === 'auto' &&
  entry.endAt === null &&
  entry.durationInMinutes === null

// ====================

const azkhakStorage = new StorageEntry<AzkhakStoreShape>(
  storage,
  keys.Apps.Azkhak,
  emptyState,
)

const loaded = azkhakStorage.load()
const initialState = loaded.isOk() ? loaded.value : emptyState

// ====================

const azkhakStore = createStore(initialState, a => ({
  setSubject: (subject: string) => a.setState(p => ({ ...p, subject })),

  startTimer: () =>
    a.setState(p => ({
      ...p,
      zakhaks: [
        ...p.zakhaks,
        {
          id: generateShortId(),
          createdAt: new Date().toISOString(),
          type: 'auto',
          endAt: null,
          durationInMinutes: null,
        },
      ],
    })),

  endTimer: () =>
    a.setState(p => {
      const running = p.zakhaks.find(isRunningEntry)
      if (!running) return p

      const endAt = new Date().toISOString()
      const durationInMinutes = getDurationInMinutes(running.createdAt, endAt)

      return {
        ...p,
        zakhaks: p.zakhaks.map(z =>
          z.id === running.id ? { ...z, endAt, durationInMinutes } : z,
        ),
      }
    }),

  addManual: (durationInMinutes: number) =>
    a.setState(p => ({
      ...p,
      zakhaks: [
        ...p.zakhaks,
        {
          id: generateShortId(),
          createdAt: new Date().toISOString(),
          type: 'manual',
          endAt: null,
          durationInMinutes,
        },
      ],
    })),

  deleteEntry: (id: string) =>
    a.setState(p => ({
      ...p,
      zakhaks: p.zakhaks.filter(z => z.id !== id),
    })),

  reset: () => a.setState(() => emptyState),
}))

export const actions = azkhakStore.actions

// ====================

azkhakStore.subscribe(() => {
  const state = azkhakStore.state
  const result = azkhakStorage.save(state)

  if (result.isErr()) {
    console.error('Failed to save Azkhak data:', result.error)
  }
})

// ====================

/** @returns {boolean} True if there is an active, running auto timer. */
export const useViewIsRunning = (): boolean =>
  useSelector(azkhakStore, s => s.zakhaks.some(isRunningEntry))

/** @returns {string} The current sticky note subject. */
export const useViewSubject = (): string =>
  useSelector(azkhakStore, s => s.subject)

/** @returns {ZakhakEntry[]} The full list of saved time entries. */
export const useViewHistory = (): ZakhakEntry[] =>
  useSelector(azkhakStore, s => s.zakhaks)

/**
 * Calculates the total accumulated time, including the live ticking
 * duration of a currently running timer.
 *
 * @returns {number} Total minutes elapsed.
 */
export function useViewTotalTime(): number {
  const isRunning = useViewIsRunning()
  const zakhaks = useSelector(azkhakStore, s => s.zakhaks)
  const [, forceUpdate] = useState(0)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(
      () => forceUpdate(x => x + 1),
      TOTAL_TIME_UPDATE_INTERVAL_MS,
    )

    return () => clearInterval(interval)
  }, [isRunning])

  const totalMinutes = zakhaks.reduce((acc, curr) => {
    if (curr.durationInMinutes !== null) {
      return acc + curr.durationInMinutes
    }

    if (isRunningEntry(curr)) {
      return (
        acc + getDurationInMinutes(curr.createdAt, new Date().toISOString())
      )
    }

    return acc
  }, 0)

  return totalMinutes
}
