import { ArrowClockwiseIcon, ListIcon, XIcon } from '@phosphor-icons/react'
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
import { actions } from './store'
import { ZakhaksHistorySection } from './ZakhaksHistorySection'

export const MoreOptionsSection = () => {
  const TITLE = 'گزینه‌های بیشتر'
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const swipeDirection = useIsMobile() ? 'down' : 'right'

  return (
    <Drawer showSwipeHandle swipeDirection={swipeDirection}>
      <RenderTooltip tooltip={TITLE}>
        <DrawerTrigger
          render={
            <Button variant='outline' size='icon-huge'>
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

        <ZakhaksHistorySection />

        <DrawerFooter dir='rtl'>
          <DownloadReportBtn />

          <DestructiveBtn
            defaultVariant='destructive'
            icon={ArrowClockwiseIcon}
            onClick={() => actions.reset()}
            size='default'
            title='ریست'
            doStretch
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
