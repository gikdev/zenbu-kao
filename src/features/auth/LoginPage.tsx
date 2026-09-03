// biome-ignore-all lint/correctness/noChildrenProp: <reason for disabling>

import { ArrowLeftIcon, SignInIcon } from '@phosphor-icons/react'
import { Link, useNavigate } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { Field, FieldDescription } from '#/common/ui/field'
import { toast } from '#/common/ui/toast'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import { login } from '../api/client'
import { useAppForm } from '../forms'
import { Agreement } from './Agreement'
import { authStore } from './store'

export default function LoginPage() {
  const navigate = useNavigate()

  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
    },
    async onSubmit(p) {
      const res = await login({ loginCommand: p.value })

      if (res.data) {
        authStore.actions.logIn(res.data)
        form.reset()
        void navigate({ to: '/' })
        return
      }

      toast.add({
        type: 'error',
        description: extractErrorMessage(res.error),
        priority: 'high',
      })
    },
  })

  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-2 bg-background p-6 md:p-10'>
      <div className='flex flex-col gap-2 items-center'>
        <form.AppForm>
          <SignInIcon className='size-6' />

          <h1 className='text-xl font-bold'>ورود به سایت</h1>

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

          <Field orientation='horizontal'>
            <Link
              to='/'
              className={buttonVariants({
                variant: 'outline',
                class: 'flex-1',
              })}
            >
              <ArrowLeftIcon mirrored />
            </Link>

            <form.SimpleSubmitBtn
              className={buttonVariants({ class: 'flex-2' })}
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
