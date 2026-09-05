import { ArrowClockwiseIcon, ListIcon, XIcon } from '@phosphor-icons/react'
import { useHotkey } from '@tanstack/react-hotkeys'
import { useRef } from 'react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { useIsMobile } from '#/common/helpers/useIsMobile'
import { Button } from '#/common/ui/button'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '#/common/ui/drawer'
import { DestructiveBtn } from './DestructiveBtn'
import { DownloadReportBtn } from './DownloadReportBtn'
import { HistorySection } from './HistorySection'
import { azkhakActions } from './store'

export const MoreOptionsSection = () => {
  const TITLE = 'گزینه‌های بیشتر'
  const openBtnRef = useRef<HTMLButtonElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const swipeDirection = useIsMobile() ? 'down' : 'right'

  const clickOpenBtn = () => openBtnRef.current?.click()

  useHotkey('H', clickOpenBtn, {
    meta: { name: TITLE, description: `بخش ${TITLE} رو باز کن یا ببند.` },
  })

  return (
    <Drawer showSwipeHandle swipeDirection={swipeDirection}>
      <RenderTooltip tooltip={TITLE}>
        <DrawerTrigger
          render={
            <Button variant='outline' size='icon-huge' ref={openBtnRef}>
              <ListIcon className='size-8' />
            </Button>
          }
        />
      </RenderTooltip>

      <DrawerContent dir='ltr'>
        <DrawerHeader dir='rtl'>
          <DrawerTitle>{TITLE}</DrawerTitle>
          <DrawerDescription>
            به صورت دستی یه مقدار زمانی رو اضافه یا کم کن.
          </DrawerDescription>
        </DrawerHeader>

        <HistorySection />

        <DrawerFooter dir='rtl'>
          <DownloadReportBtn />

          <DestructiveBtn
            variant='destructive'
            icon={ArrowClockwiseIcon}
            onClick={() => azkhakActions.reset()}
            size='default'
            title='ریست'
            fullWidth
          />

          <DrawerClose render={<Button variant='outline' ref={closeBtnRef} />}>
            <XIcon />
            <span>بستن</span>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
