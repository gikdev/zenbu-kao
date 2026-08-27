import { ArrowClockwiseIcon } from '@phosphor-icons/react'

import { useFormContext } from '.'

interface SimpleResetBtnProps {
  className: string
  disabled?: boolean
}

export function SimpleResetBtn(p: SimpleResetBtnProps) {
  const form = useFormContext()

  return (
    <button
      type='button'
      disabled={p.disabled}
      className={p.className}
      onClick={() => form.reset()}
    >
      <ArrowClockwiseIcon size={20} />
      <span>ریست</span>
    </button>
  )
}
