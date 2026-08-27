import { Field, FieldError, FieldLabel } from '@/common/ui/field'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/common/ui/select'
import { useFieldContext } from '.'
import { FieldMeta } from './FieldMeta'

export type SimpleStyledSelectItem<T extends string = string> = {
  value: T
  label: string
}

interface SimpleStyledSelectProps {
  title: string
  items: SimpleStyledSelectItem[]
  disabled?: boolean
}

export function SimpleStyledSelect(p: SimpleStyledSelectProps) {
  const field = useFieldContext<string>()
  const value = field.state.value || ''

  return (
    <Field>
      <FieldLabel htmlFor={field.name}>{p.title}</FieldLabel>

      <Select
        disabled={p.disabled}
        id={field.name}
        name={field.name}
        items={p.items}
        value={value}
        onValueChange={value => field.handleChange(value || '')}
      >
        <SelectTrigger className="w-full">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectGroup>
            <SelectLabel>انتخاب کن</SelectLabel>
            {p.items.map(item => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>

      <FieldError>
        <FieldMeta meta={field.state.meta} />
      </FieldError>
    </Field>
  )
}
