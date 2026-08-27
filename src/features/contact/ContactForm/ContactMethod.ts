import z from 'zod'
import type { SimpleStyledSelectItem } from '#/features/forms/SimpleStyledSelect'

export const zContactMethod = z.enum(['phone', 'email', 'eitaa', 'none'])
export type ContactMethod = z.infer<typeof zContactMethod>

export const contactMethodLabelMap: Record<ContactMethod, string> = {
  phone: 'شماره تلفن (برای پیامک)',
  email: 'ایمیل',
  eitaa: 'آی‌دی ایتا',
  none: 'هیچی',
}

export const contactMethods: SimpleStyledSelectItem[] = [
  { value: 'none', label: 'جواب نمی‌خوام' },
  { value: 'eitaa', label: 'توی ایتا' },
  { value: 'email', label: 'با ایمیل' },
  { value: 'phone', label: 'با پیامک' },
] satisfies SimpleStyledSelectItem<ContactMethod>[]
