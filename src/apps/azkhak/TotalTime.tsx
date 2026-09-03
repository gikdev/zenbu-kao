import { formatToHoursAndMinutes } from './formatToHoursAndMinutes'
import { useViewTotalTime } from './store'

export const TotalTime = () => {
  const totalTime = formatToHoursAndMinutes(useViewTotalTime())

  return (
    <p className='font-bold font-code text-7xl' dir='ltr'>
      {totalTime}
    </p>
  )
}
