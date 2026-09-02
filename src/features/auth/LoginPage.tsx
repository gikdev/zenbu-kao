// biome-ignore-all lint/correctness/noChildrenProp: <reason for disabling>

import { ArrowLeftIcon, SignInIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { Field, FieldDescription } from '#/common/ui/field'
import { useAppForm } from '../forms'
import { Agreement } from './Agreement'
import { Badge } from '#/common/ui/badge'

export default function LoginPage() {
  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    async onSubmit(props) {
      // TODO: for now...
      console.log(props.value)
    },
  })

  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-6 md:p-10'>
      <div className='flex flex-col gap-2 items-center'>
        <form.AppForm>
          <SignInIcon className='size-6' />

          <h1 className='text-xl font-bold'>ورود به سایت <Badge>به زودی!</Badge></h1>

          <FieldDescription>
            <span>حساب نداری؟ </span>
            <Link to='/register'>ثبت‌نام کن</Link>
          </FieldDescription>

          <form.AppField
            name='email'
            children={field => (
              <field.SingleLineInput type='email' title='ایمیل' />
            )}
          />

          <form.AppField
            name='password'
            children={field => (
              <field.SingleLineInput type='password' title='رمز' />
            )}
          />

          <Field orientation="horizontal">
            <Link to="/" className={buttonVariants({ variant: 'outline', class: 'flex-1' })}><ArrowLeftIcon mirrored /></Link>

            <form.SimpleSubmitBtn
              disabled
              className={buttonVariants({ class: "flex-2" })}
              icon={SignInIcon}
              title='ورود'
            />
          </Field>

          <Agreement />
        </form.AppForm>
      </div>
    </div>
  )
}
