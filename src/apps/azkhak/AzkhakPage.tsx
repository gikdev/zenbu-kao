import { ArrowUpIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { AzkhakCard } from './AzkhakCard'
import { useFavicon } from './useFavicon'

export function AzkhakPage() {
  useFavicon()

  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-4 md:p-8 relative'>
      <Link
        to='/apps'
        className={buttonVariants({
          size: 'icon',
          variant: 'outline',
          class: 'absolute top-4 inset-s-4',
        })}
      >
        <ArrowUpIcon />
      </Link>

      <AzkhakCard />
    </div>
  )
}
