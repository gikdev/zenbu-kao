import { CodeIcon } from '@phosphor-icons/react'
import { createFileRoute, Link, redirect } from '@tanstack/react-router'
import { Button, buttonVariants } from '#/common/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '#/common/ui/empty'
import { useLogOut } from '#/features/auth/useLogOut'

export const Route = createFileRoute('/dashboard/')({
  component: RouteComponent,
  beforeLoad: p => {
    if (!p.context.getIsLoggedIn()) {
      throw redirect({ to: '/bahrami' })
    }
  },
})

function RouteComponent() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-6 md:p-10'>
      <WorkInProgressSection />
    </div>
  )
}

export function WorkInProgressSection() {
  const logOut = useLogOut()

  return (
    <Empty className='border border-dashed'>
      <EmptyHeader>
        <EmptyMedia variant='icon'>
          <CodeIcon />
        </EmptyMedia>

        <EmptyTitle>در حال ساخت</EmptyTitle>

        <EmptyDescription>
          این بخش از سایت در حال ساخت هست. بعدا سر بزنید! 👋🏻
        </EmptyDescription>
      </EmptyHeader>

      <EmptyContent className='flex-row justify-center gap-2'>
        <Link to='/bahrami' className={buttonVariants({ variant: 'outline' })}>
          دیدن سایت
        </Link>

        <Button variant='outline' onClick={logOut}>
          خروج از حساب
        </Button>
      </EmptyContent>
    </Empty>
  )
}
