import { KeyboardIcon, XIcon } from '@phosphor-icons/react'
import { useHotkeyRegistrations } from '@tanstack/react-hotkeys'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/common/ui/dialog'
import { Kbd } from '#/common/ui/kbd'

export function KeyboardShortcutsGuideDialog() {
  const TITLE = 'میانبرهای صفحه کلید'
  const { hotkeys } = useHotkeyRegistrations()

  return (
    <Dialog>
      <RenderTooltip tooltip={TITLE}>
        <DialogTrigger
          render={
            <Button variant='outline' size='icon'>
              <KeyboardIcon />
            </Button>
          }
        />
      </RenderTooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{TITLE}</DialogTitle>
        </DialogHeader>

        <div className='p-4 flex flex-col gap-4 text-muted-foreground'>
          {hotkeys.map(reg => (
            <div className='flex flex-col gap-1' key={reg.hotkey}>
              <p className='flex'>
                <span className='me-auto text-foreground'>
                  {reg.options.meta?.name}
                </span>
                <Kbd className='font-bold text-foreground'>{reg.hotkey}</Kbd>
              </p>

              <p className='text-xs'>{reg.options.meta?.description}</p>
            </div>
          ))}
        </div>

        <DialogFooter>
          <DialogClose render={<Button variant='outline' />}>
            <XIcon />
            <span>بستن</span>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
