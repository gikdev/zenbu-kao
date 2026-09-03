/**
 * Converts minutes to signed `HH:mm` format.
 * Negative totals are prefixed with `-`, non-negative totals with `+`.
 *
 * @param minutes - The total number of minutes to format. Can be negative.
 * @returns The formatted time string in `+HH:mm` or `-HH:mm` (e.g., `"+02:03"` or `"-01:30"`).
 */

export function formatToHoursAndMinutes(minutes: number): string {
  const pad = (n: number) => String(n).padStart(2, '0')
  const sign = minutes === 0 ? '' : minutes < 0 ? '-' : '+'
  const safeMinutes = Math.floor(Math.abs(minutes))
  const hours = Math.floor(safeMinutes / 60)
  const mins = safeMinutes % 60

  return [sign, pad(hours), ':', pad(mins)].join('')
}
