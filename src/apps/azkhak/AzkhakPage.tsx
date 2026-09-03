import { HouseSimpleIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { AzkhakCard } from './AzkhakCard'

export const AzkhakPage = () => (
  <div className='flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-4 md:p-8 relative'>
    <Link
      to='/'
      className={buttonVariants({
        size: 'icon',
        variant: 'outline',
        class: 'absolute top-4 inset-s-4',
      })}
    >
      <HouseSimpleIcon />
    </Link>

    <AzkhakCard />
  </div>
)
