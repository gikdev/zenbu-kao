import { HourglassSimpleIcon } from '@phosphor-icons/react'
import { useViewIsRunning } from './store'

export const RunningIndicator = () => {
  const isRunning = useViewIsRunning()

  return (
    <HourglassSimpleIcon
      weight={isRunning ? 'fill' : 'regular'}
      size={32}
      className={
        isRunning
          ? 'text-amber-400 animate-spin animation-duration-[5s]'
          : 'text-muted-foreground'
      }
    />
  )
}
