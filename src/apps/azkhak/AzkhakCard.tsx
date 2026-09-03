import { ControlCenter } from './ControlCenter'
import { FocusSubject } from './FocusSubject'
import { RunningIndicator } from './RunningIndicator'
import { TotalTime } from './TotalTime'

export const AzkhakCard = () => (
  <div className='flex flex-col gap-8 w-full max-w-2xl items-center text-center'>
    <FocusSubject />
    <TotalTime />
    <RunningIndicator />
    <ControlCenter />
  </div>
)
