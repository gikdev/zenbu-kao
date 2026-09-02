import { HouseIcon } from '@phosphor-icons/react'
import { createFileRoute, Link } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { Card, CardContent } from '#/common/ui/card'

export const Route = createFileRoute('/terms')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 text-muted-foreground'>
      <Card className='max-w-3xl w-full'>
        <CardContent className='text-muted-foreground'>
          <h1 className='text-foreground text-xl font-bold'>
            شرایط استفاده از وب‌سایت بهرامی
          </h1>

          <p>آخرین به‌روزرسانی: ۱۴۰۵/۰۶/۱۱</p>

          <p className='text-foreground font-bold mt-4'>۱. پذیرش شرایط</p>
          <p>
            با استفاده از این وبسایت، شما این شرایط را می‌پذیرید. اگر موافق
            نیستید، لطفاً از این سایت استفاده نکنید.
          </p>

          <p className='text-foreground font-bold mt-4'>۲. مالکیت محتوا</p>
          <p>
            تمامی محتوای این سایت (متن، تصویر، کد و غیره) متعلق به من است، مگر
            اینکه خلاف آن ذکر شده باشد. بدون اجازه قبلی، حق کپی یا استفاده مجدد
            از محتوا را ندارید.
          </p>

          <p className='text-foreground font-bold mt-4'>۳. رفتار کاربر</p>
          <p>
            لطفاً محترمانه رفتار کنید. استفاده از این سایت برای اهداف غیرقانونی،
            مضر یا توهین‌آمیز ممنوع است.
          </p>

          <p className='text-foreground font-bold mt-4'>
            ۴. سلب مسئولیت (بدون گارانتی)
          </p>
          <p>
            این وبسایت «همان‌طور که هست» و «با تمام نقص‌ها» ارائه می‌شود. هیچ
            تضمینی نمی‌دهم که همیشه کار کند، بدون اشکال باشد یا ۱۰۰٪ دقیق باشد.
            استفاده از این سایت با مسئولیت خودتان است.
          </p>

          <p className='text-foreground font-bold mt-4'>۵. محدودیت مسئولیت</p>
          <p>
            تا حد مجاز توسط قانون، من در قبال هیچ گونه خسارت، ضرر یا مشکلی که در
            اثر استفاده از این سایت به وجود آید، مسئولیتی ندارم.
          </p>

          <p className='text-foreground font-bold mt-4'>۶. تغییرات در شرایط</p>
          <p>
            ممکن است این شرایط را گاهی به‌روزرسانی کنم. تغییرات در همین صفحه
            اعلام می‌شود.
          </p>

          <p className='text-foreground font-bold mt-4'>۷. تماس با من</p>
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
