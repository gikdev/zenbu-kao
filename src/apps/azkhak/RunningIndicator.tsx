import { HourglassSimpleIcon } from '@phosphor-icons/react'
import { useIsRunning } from './store'

export const RunningIndicator = () => {
  const isRunning = useIsRunning()

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
