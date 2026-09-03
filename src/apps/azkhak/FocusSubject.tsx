/** biome-ignore-all lint/a11y/noAutofocus: None of ur business! */

import { PencilSimpleIcon, TrashSimpleIcon } from '@phosphor-icons/react'
import { type FocusEvent, useState } from 'react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { Input } from '#/common/ui/input'
import { cn } from '#/common/utils'
import { DestructiveBtn } from './DestructiveBtn'
import { azkhakActions, useSubject } from './store'

export const FocusSubject = () => {
  const [isEditing, setEditing] = useState(false)
  const subject = useSubject()
  const hasSubject = !!subject
  const placeholder = 'روی چی می‌خوای تمرکز کنی؟'
  const subjectClass = cn(
    'text-2xl cursor-text',
    hasSubject ? 'font-bold text-foreground' : 'text-muted-foreground italic',
  )

  const handleEditing = (e: FocusEvent<HTMLInputElement, Element>) => {
    azkhakActions.setSubject(e.target.value)
    setEditing(false)
  }

  return isEditing ? (
    <Input
      autoFocus
      placeholder={placeholder}
      defaultValue={subject}
      onBlur={handleEditing}
      className='h-12 text-center'
    />
  ) : (
    <div className='flex items-center gap-2'>
      <DestructiveBtn
        disabled={!hasSubject}
        variant='ghost'
        icon={TrashSimpleIcon}
        onClick={() => azkhakActions.setSubject('')}
        size='icon-lg'
        iconSize='size-6'
        title='حذف'
      />

      <p className={subjectClass}>{subject || placeholder}</p>

      <RenderTooltip tooltip='ویرایش'>
        <Button size='icon-lg' variant='ghost' onClick={() => setEditing(true)}>
          <PencilSimpleIcon className='size-6' />
        </Button>
      </RenderTooltip>
    </div>
  )
}
