import { ZakhakCard } from './ZakhakCard'
import type { ZakhakEntry } from './ZakhakEntry'

export const EntryHistory = (p: { zakhaks: ZakhakEntry[] }) =>
  [...p.zakhaks]
    .reverse()
    .map(z => (
      <ZakhakCard
        key={z.id}
        durationInMinutes={z.durationInMinutes}
        id={z.id}
        type={z.type}
      />
    ))
