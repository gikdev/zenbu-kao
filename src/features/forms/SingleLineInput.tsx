import type { ChangeEventHandler } from 'react'
import { Field, FieldError, FieldLabel } from '@/common/ui/field'
import { Input } from '@/common/ui/input'
import { useFieldContext } from '.'
import { FieldMeta } from './FieldMeta'

interface SingleLineInputProps {
  title: string
  type?: string
  className?: string
}

export function SingleLineInput(p: SingleLineInputProps) {
  const field = useFieldContext<string | null>()
  const value = field.state.value || ''

  const handleChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = e => {
    field.handleChange(e.target.value || '')
  }

  return (
    <Field>
      <FieldLabel htmlFor={field.name}>{p.title}</FieldLabel>

      <Input
        id={field.name}
        name={field.name}
        type={p.type}
        dir="auto"
        value={value}
        onBlur={field.handleBlur}
        onChange={handleChange}
      />

      <FieldError>
        <FieldMeta meta={field.state.meta} />
      </FieldError>
    </Field>
  )
}
