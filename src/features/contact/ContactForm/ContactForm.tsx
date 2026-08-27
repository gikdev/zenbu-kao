/** biome-ignore-all lint/correctness/noChildrenProp: It's TanStack! 大丈夫よ！ */
import { MailboxIcon } from '@phosphor-icons/react'
import { Badge } from '#/common/ui/badge'
import { buttonVariants } from '#/common/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '#/common/ui/card'
import { cn } from '#/common/utils'
import { useAppForm } from '#/features/forms'
import { contactMethodLabelMap, contactMethods } from './ContactMethod'
import {
  type ContactValue,
  emptyContactValue,
  zContactValue,
} from './ContactValue'

export type ContactFormHandler = (
  data: ContactValue,
  resetForm: () => void,
) => Promise<void>

type ContactFormProps = {
  handler: ContactFormHandler | null
}

export const ContactForm = (p: ContactFormProps) => {
  const isComingSoon = p.handler == null

  const cardStyles = cn('w-full max-w-md text-start', {
    'opacity-60': isComingSoon,
  })

  const form = useAppForm({
    defaultValues: emptyContactValue,
    validators: { onSubmit: zContactValue },
    onSubmit: ({ value }) => p.handler?.(value, () => form.reset()),
  })

  return (
    <form.AppForm>
      <Card className={cardStyles}>
        <CardHeader className=''>
          <CardTitle className='flex items-start gap-2'>
            <MailboxIcon size={20} weight='fill' />

            <span>ارسال پیام</span>

            {isComingSoon && <Badge>به زودی</Badge>}
          </CardTitle>

          <CardDescription>
            می‌تونی همین‌جا پیام‌تو برام بفرستی. اگه دوست داشتی جواب میدم.
          </CardDescription>
        </CardHeader>

        <CardContent className=''>
          <form.AppField
            name='name'
            children={field => (
              <field.SingleLineInput disabled={isComingSoon} title='نام' />
            )}
          />

          <form.AppField
            name='title'
            children={field => (
              <field.SingleLineInput disabled={isComingSoon} title='موضوع' />
            )}
          />

          <form.AppField
            name='body'
            children={field => (
              <field.MultiLineInput disabled={isComingSoon} title='پیام' />
            )}
          />

          <form.AppField
            name='contactMethod'
            children={field => (
              <field.SimpleStyledSelect
                disabled={isComingSoon}
                title='چطوری جواب بدم؟'
                items={contactMethods}
              />
            )}
          />

          <form.Subscribe
            selector={s => s.values.contactMethod}
            children={method =>
              method !== 'none' ? (
                <form.AppField
                  name='contactValue'
                  children={field => (
                    <field.SingleLineInput
                      disabled={isComingSoon}
                      title={contactMethodLabelMap[method]}
                    />
                  )}
                />
              ) : null
            }
          />
        </CardContent>

        <CardFooter className='gap-1'>
          <form.SimpleResetBtn
            disabled={isComingSoon}
            className={buttonVariants({
              variant: 'outline',
              class: 'shrink-0 grow-0',
            })}
          />

          <form.SimpleSubmitBtn
            disabled={isComingSoon}
            icon={MailboxIcon}
            title='پیام بده!'
            className={buttonVariants({
              variant: 'default',
              size: 'lg',
              class: 'flex-1',
            })}
          />
        </CardFooter>
      </Card>
    </form.AppForm>
  )
}
