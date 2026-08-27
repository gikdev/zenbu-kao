import z from 'zod'
import { zContactMethod } from './ContactMethod'

export const zContactValue = z
  .object({
    name: z.string().min(1, 'نام الزامیه'),
    title: z.string().min(1, 'عنوان الزامیه'),
    body: z.string().min(1, 'متن پیام الزامیه'),
    contactMethod: zContactMethod,
    contactValue: z.string(),
  })
  .refine(
    d => d.contactMethod !== 'none' && d.contactValue.trim().length <= 0,
    {
      message: '؟؟؟',
      path: ['contactValue'],
    },
  )

export type ContactValue = z.infer<typeof zContactValue>

export const emptyContactValue: ContactValue = {
  name: '',
  body: '',
  title: '',
  contactMethod: 'none',
  contactValue: '',
}
