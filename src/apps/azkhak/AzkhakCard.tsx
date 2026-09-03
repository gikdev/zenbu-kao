import { ControlCenter } from './ControlCenter'
import { RunningIndicator } from './RunningIndicator'
import { Subject } from './Subject'
import { TotalTime } from './TotalTime'

export const AzkhakCard = () => (
  <div className='flex flex-col gap-8 w-full max-w-2xl items-center text-center'>
    <Subject />
    <TotalTime />
    <RunningIndicator />
    <ControlCenter />
  </div>
)
