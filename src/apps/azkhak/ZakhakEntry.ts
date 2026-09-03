/**
 * **زخک**: زمان خالص کاری
 * - manual: endedAt == null && durationInMinutes == number
 * - auto & started: endedAt == null && durationInMinutes == null
 * - auto & ended: endedAt == string && durationInMinutes == number (calculated)
 */
export interface ZakhakEntry {
  id: string
  createdAt: string
  type: 'manual' | 'timer'
  endedAt: string | null
  durationInMinutes: number | null
}
