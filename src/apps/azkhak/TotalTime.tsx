import { formatToHoursAndMinutes } from './formatToHoursAndMinutes'
import { useTotalTime } from './store'

export const TotalTime = () => {
  const totalTime = formatToHoursAndMinutes(useTotalTime())

  return (
    <p className='font-bold font-code text-7xl' dir='ltr'>
      {totalTime}
    </p>
  )
}
