import { MinusIcon, PlusIcon, XIcon } from '@phosphor-icons/react'
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
import { Field, FieldLabel } from '#/common/ui/field'
import { Input } from '#/common/ui/input'
import { actions } from './store'

export function ManualTimeSection() {
  const TITLE = 'زمان دستی'
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const minutesInputRef = useRef<HTMLInputElement>(null)
  const swipeDirection = useIsMobile() ? 'down' : 'left'

  const quickNumbers = [1, 2, 3, 5, 10, 15, 20, 25, 30, 40, 45, 60]

  const add = (isPositive: boolean) => () => {
    const num = minutesInputRef.current?.valueAsNumber || 0

    actions.addManual(isPositive ? +num : -num)

    closeBtnRef.current?.click()
  }

  const setNum = (num: number) => () => {
    if (!minutesInputRef.current) return

    minutesInputRef.current.value = num.toString()
  }

  return (
    <Drawer showSwipeHandle swipeDirection={swipeDirection}>
      <RenderTooltip tooltip={TITLE}>
        <DrawerTrigger
          render={
            <Button variant='outline' size='icon-huge'>
              <PlusIcon className='size-8' />
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

        <div className='p-4 flex flex-col gap-4' dir='rtl'>
          <Field>
            <FieldLabel htmlFor='manual-time'>مقدار (به دقیقه)</FieldLabel>
            <Input
              autoFocus
              ref={minutesInputRef}
              id='manual-time'
              type='number'
              defaultValue={0}
            />
          </Field>

          <div className='flex gap-1 items-center justify-start flex-wrap'>
            {quickNumbers.map(num => (
              <Button
                key={num}
                variant='outline'
                size='icon'
                onClick={setNum(num)}
              >
                <span>{num}</span>
              </Button>
            ))}
          </div>
        </div>

        <DrawerFooter dir='rtl'>
          <Button variant='default' onClick={add(true)}>
            <PlusIcon />
            <span>اضافه کن</span>
          </Button>

          <Button variant='secondary' onClick={add(false)}>
            <MinusIcon />
            <span>کم کن</span>
          </Button>

          <DrawerClose render={<Button variant='outline' ref={closeBtnRef} />}>
            <XIcon />
            <span>بستن</span>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}
