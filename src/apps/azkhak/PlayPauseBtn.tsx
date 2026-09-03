import { PauseIcon, PlayIcon } from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { cn } from '#/common/utils'
import { actions, useViewIsRunning } from './store'

export const PlayPauseBtn = () => {
  const isRunning = useViewIsRunning()

  const PlayPauseIcon = isRunning ? PauseIcon : PlayIcon
  const playPauseTooltip = isRunning ? 'توقف' : 'شروع'
  const playPauseClass = cn('size-8', isRunning ? '' : 'text-amber-400')

  const handlePlayPause = () => {
    if (isRunning) {
      actions.endTimer()
    } else {
      actions.startTimer()
    }
  }

  return (
    <RenderTooltip tooltip={playPauseTooltip}>
      <Button
        variant='outline'
        size='huge'
        className='min-w-24 sm:min-w-60'
        onClick={handlePlayPause}
      >
        <PlayPauseIcon className={playPauseClass} weight='fill' />
      </Button>
    </RenderTooltip>
  )
}
