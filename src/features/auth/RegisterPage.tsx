// biome-ignore-all lint/correctness/noChildrenProp: <reason for disabling>

import { ArrowLeftIcon, UserPlusIcon } from '@phosphor-icons/react'
import { Link, useNavigate } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { Field, FieldDescription } from '#/common/ui/field'
import { toast } from '#/common/ui/toast'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import { register } from '../api/client'
import { useAppForm } from '../forms'
import { Agreement } from './Agreement'

export default function RegisterPage() {
  const navigate = useNavigate()
  const form = useAppForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
      userName: '',
      displayName: '',
      fullName: '',
    },
    async onSubmit(p) {
      const res = await register({ body: p.value })

      if (res.data) {
        toast.add({
          type: 'success',
          description: 'با موفقیت ثبت‌نام کردین. حالا لطفا وارد بشین.',
        })
        form.reset()
        void navigate({ to: '/login' })
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
          <UserPlusIcon className='size-6' />

          <h1 className='text-xl font-bold'>ثبت‌نام در سایت</h1>

          <FieldDescription>
            <span>قبلاً حساب دارید؟ </span>
            <Link to='/login'>وارد شوید</Link>
          </FieldDescription>

          <form.AppField
            name='email'
            children={field => (
              <field.SingleLineInput type='email' title='ایمیل' />
            )}
          />

          <form.AppField
            name='userName'
            children={field => (
              <field.SingleLineInput type='text' title='نام کاربری' />
            )}
          />

          <form.AppField
            name='displayName'
            children={field => (
              <field.SingleLineInput type='text' title='نام نمایشی' />
            )}
          />

          <form.AppField
            name='fullName'
            children={field => (
              <field.SingleLineInput type='text' title='نام کامل' />
            )}
          />

          <form.AppField
            name='password'
            children={field => (
              <field.SingleLineInput type='password' title='رمز عبور' />
            )}
          />

          <form.AppField
            name='confirmPassword'
            children={field => (
              <field.SingleLineInput type='password' title='تکرار رمز عبور' />
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
              icon={UserPlusIcon}
              title='ثبت‌نام'
            />
          </Field>

          <Agreement />
        </form.AppForm>
      </div>
    </div>
  )
}
