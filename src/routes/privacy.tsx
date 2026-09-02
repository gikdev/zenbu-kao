import { HouseIcon } from '@phosphor-icons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { Card, CardContent } from '#/common/ui/card'

export const Route = createFileRoute('/privacy')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 text-muted-foreground'>
      <Card className='max-w-3xl w-full'>
        <CardContent className='text-muted-foreground'>
          <h1 className='text-foreground text-xl font-bold'>
            سیاست حریم خصوصی وب‌سایت بهرامی
          </h1>

          <p>آخرین به‌روزرسانی: ۱۴۰۵/۰۶/۱۱</p>

          <p className='text-foreground font-bold mt-4'>
            ۱. چه داده‌هایی جمع‌آوری می‌کنم
          </p>

          <ul className='pr-5 list-disc'>
            <li>
              برای ثبت‌نام و ورود به سیستم، <strong>ایمیل و رمز عبور</strong> شما
              را جمع‌آوری می‌کنم.
            </li>
            <li>
              اگر از طریق فرم تماس با من ارتباط بگیرید، نام، راه ارتباطی و پیام
              شما را دریافت می‌کنم.
            </li>
            <li>
              <strong>هیچ ابزار تحلیلی</strong> (مانند گوگل آنالیتیکس) در این
              سایت استفاده نمی‌شود.
            </li>
          </ul>

          <p className='text-foreground font-bold mt-4'>۲. چرا جمع‌آوری می‌کنم</p>

          <ul className='pr-5 list-disc'>
            <li>برای ایجاد حساب کاربری و حفظ جلسه ورود شما.</li>
            <li>برای پاسخ به پیام‌های شما از طریق فرم تماس.</li>
            <li>برای بهبود تجربه کاربری و شخصی‌سازی سایت.</li>
          </ul>

          <p className='text-foreground font-bold mt-4'>
            ۳. با چه کسی به اشتراک می‌گذارم
          </p>

          <p>
            اطلاعات شخصی شما را{' '}
            <strong>
              نمی‌فروشم، معامله نمی‌کنم و با هیچ شخص ثالثی به اشتراک نمی‌گذارم
            </strong>
            . تمام داده‌ها تنها در سرور خود من ذخیره می‌شوند.
          </p>

          <p className='text-foreground font-bold mt-4'>۴. کوکی (Cookie)</p>

          {/* <p>این سایت از کوکی‌های ضروری برای مدیریت جلسه ورود شما استفاده می‌کند. این کوکی‌ها هیچ اطلاعات شخصی را ذخیره نمی‌کنند و تنها برای احراز هویت شما لازم هستند. می‌توانید کوکی را در تنظیمات مرورگر خود غیرفعال کنید، اما در این صورت ممکن است نتوانید وارد حساب خود شوید.</p> */}
          <p>فعلا از کوکی استفاده نمی‌شود.</p>

          <p className='text-foreground font-bold mt-4'>۵. حقوق شما</p>

          <p>شما می‌توانید در هر زمان:</p>

          <ul className='pr-5 list-disc'>
            <li>از من بخواهید تمام داده‌های مربوط به شما را حذف کنم.</li>
            <li>اطلاعات پروفایل خود را ویرایش کنید.</li>
          </ul>

          <p>
            برای انجام هر یک از این موارد، کافی است از طریق صفحه{' '}
            <a href='/contact' className='text-primary hover:underline'>
              تماس با من
            </a>{' '}
            درخواست خود را ثبت کنید.
          </p>

          <p className='text-foreground font-bold mt-4'>۶. تماس با من</p>

          <p>
            اگر سؤال، نگرانی یا درخواستی دارید، لطفاً از طریق صفحه{' '}
            <a href='/contact' className='text-primary hover:underline'>
              تماس با من
            </a>{' '}
            پیام دهید.
          </p>

          <Link to='/' className={buttonVariants({ variant: 'outline' })}>
            <HouseIcon />
            <span>بازگشت به خانه</span>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
