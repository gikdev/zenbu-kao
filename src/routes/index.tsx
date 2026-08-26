import {
  ChatCircleDotsIcon,
  CodeIcon,
  PenNibIcon,
  ReadCvLogoIcon,
  SquaresFourIcon,
  TranslateIcon,
} from '@phosphor-icons/react'
import { createFileRoute } from '@tanstack/react-router'
import { Button } from '#/common/ui/button'
import { ButtonGroup } from '#/common/ui/button-group'
import { AppVersion } from '#/features/versioning/AppVersion'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="py-8 px-4 gap-4 min-h-dvh flex flex-col items-center justify-center text-center">
      <img alt="" src="/Spec.png" className="size-40 rounded-full" />

      <h1 className="text-3xl font-bold">بهرامی‌ام! 👋🏻</h1>

      <ButtonGroup>
        <Button variant="outline" disabled>
          <CodeIcon />
          <span>برنامه‌نویس فول‌استک</span>
        </Button>

        <Button variant="outline" disabled>
          <TranslateIcon />
          <span>خوره‌ی زبان</span>
        </Button>
      </ButtonGroup>

      <div className="flex flex-wrap items-center justify-center gap-1">
        <Button variant="outline" disabled>
          <ReadCvLogoIcon />
          <span>رزومه</span>
        </Button>

        <Button variant="outline" disabled>
          <ChatCircleDotsIcon />
          <span>تماس</span>
        </Button>

        <Button variant="outline" disabled>
          <SquaresFourIcon />
          <span>برنامک‌ها</span>
        </Button>

        <Button variant="outline" disabled>
          <PenNibIcon />
          <span>بلاگ</span>
        </Button>
      </div>

      <div className="flex-1" />

      <footer dir='ltr' className='text-muted-foreground text-xs'>
        <span className="font-fa">۱۴۰۵</span>
        <span className="font-code"> - </span>
        <span className="font-code"><AppVersion /></span>
      </footer>
    </div>
  )
}
