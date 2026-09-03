import {
  CheckIcon,
  type Icon,
  TrashSimpleIcon,
  XIcon,
} from '@phosphor-icons/react'
import type { VariantProps } from 'class-variance-authority'
import { useState } from 'react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button, type buttonVariants } from '#/common/ui/button'
import { ButtonGroup } from '#/common/ui/button-group'

type BtnSize = VariantProps<typeof buttonVariants>['size']
type BtnVariant = VariantProps<typeof buttonVariants>['variant']

export const DestructiveBtn = (p: {
  size?: BtnSize
  variant?: BtnVariant
  title?: string
  icon?: Icon
  iconSize?: string
  disabled?: boolean
  onClick?: () => void
  fullWidth?: boolean
}) => {
  const isIcon = p.size?.includes('icon')
  const [isConfirmation, setConfirmation] = useState(false)
  const finalTitle = p.title || 'حذف'
  const FinalIcon = p.icon || TrashSimpleIcon

  return isConfirmation ? (
    <ButtonGroup className={p.fullWidth ? 'w-full *:flex-1' : ''}>
      <RenderTooltip tooltip='تایید'>
        <Button
          size={p.size}
          variant='destructive'
          onClick={() => {
            p.onClick?.()
            setConfirmation(false)
          }}
        >
          <CheckIcon className={p.iconSize} />
          {!isIcon && <span>تایید</span>}
        </Button>
      </RenderTooltip>

      <RenderTooltip tooltip='انصراف'>
        <Button
          size={p.size}
          variant='secondary'
          onClick={() => setConfirmation(false)}
        >
          <XIcon className={p.iconSize} />
          {!isIcon && <span>انصراف</span>}
        </Button>
      </RenderTooltip>
    </ButtonGroup>
  ) : (
    <RenderTooltip tooltip={finalTitle}>
      <Button
        size={p.size}
        variant={p.variant}
        disabled={p.disabled}
        onClick={() => setConfirmation(true)}
      >
        <FinalIcon className={p.iconSize} />
        {!isIcon && <span>{finalTitle}</span>}
      </Button>
    </RenderTooltip>
  )
}
