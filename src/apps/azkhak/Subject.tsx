/** biome-ignore-all lint/a11y/noAutofocus: None of ur business! */

import { PencilSimpleIcon, TrashSimpleIcon } from '@phosphor-icons/react'
import { type FocusEvent, useState } from 'react'
import { Button } from '#/common/ui/button'
import { Input } from '#/common/ui/input'
import { cn } from '#/common/utils'
import { actions, useViewSubject } from './store'

export const Subject = () => {
  const [isEditing, setEditing] = useState(false)
  const subject = useViewSubject()
  const hasSubject = !!subject
  const placeholder = 'روی چی می‌خوای تمرکز کنی؟'
  const subjectClass = cn(
    'text-2xl cursor-text',
    hasSubject ? 'font-bold text-foreground' : 'text-muted-foreground italic',
  )

  const handleEditing = (e: FocusEvent<HTMLInputElement, Element>) => {
    actions.setSubject(e.target.value)
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
      <Button
        size='icon-lg'
        variant='ghost'
        onClick={() => actions.setSubject('')}
      >
        <TrashSimpleIcon className='size-6' />
      </Button>

      <p className={subjectClass}>{subject || placeholder}</p>

      <Button size='icon-lg' variant='ghost' onClick={() => setEditing(true)}>
        <PencilSimpleIcon className='size-6' />
      </Button>
    </div>
  )
}
