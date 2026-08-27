import { type Icon, SpinnerGapIcon } from '@phosphor-icons/react'

import { useFormContext } from '.'

interface SimpleSubmitBtnProps {
  icon: Icon
  title: string
  className: string
  disabled?: boolean
}

export function SimpleSubmitBtn(p: SimpleSubmitBtnProps) {
  const form = useFormContext()

  return (
    <form.Subscribe selector={s => [s.canSubmit, s.isSubmitting]}>
      {([canSubmit, isSubmitting]) => (
        <button
          type='button'
          className={p.className}
          onClick={() => form.handleSubmit()}
          disabled={!canSubmit || isSubmitting || p.disabled}
        >
          {isSubmitting ? (
            <SpinnerGapIcon size={20} className='animate-spin' />
          ) : (
            <p.icon size={20} />
          )}

          <span>{isSubmitting ? 'در حال بارگذاری...' : p.title}</span>
        </button>
      )}
    </form.Subscribe>
  )
}
