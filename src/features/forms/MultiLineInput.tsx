import { Textarea } from '#/common/ui/textarea'
import { Field, FieldError, FieldLabel } from '@/common/ui/field'
import { useFieldContext } from '.'
import { FieldMeta } from './FieldMeta'

interface MultiLineInputProps {
  title: string
  disabled?: boolean
}

export function MultiLineInput(p: MultiLineInputProps) {
  const field = useFieldContext<string>()
  const value = field.state.value || ''

  return (
    <Field>
      <FieldLabel htmlFor={field.name}>{p.title}</FieldLabel>

      <Textarea
        id={field.name}
        name={field.name}
        dir='auto'
        disabled={p.disabled}
        value={value}
        onBlur={field.handleBlur}
        onChange={e => field.handleChange(e.target.value)}
      />

      <FieldError>
        <FieldMeta meta={field.state.meta} />
      </FieldError>
    </Field>
  )
}
