/**
 * **زخک**: زمان خالص کاری
 * - manual: endAt == null && durationInMinutes == number
 * - auto & started: endAt == null && durationInMinutes == null
 * - auto & ended: endAt == string && durationInMinutes == number (calculated)
 */

export interface ZakhakEntry {
  id: string
  createdAt: string
  type: 'manual' | 'auto'
  endAt: string | null
  durationInMinutes: number | null
}
