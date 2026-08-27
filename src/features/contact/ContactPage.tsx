import { ArrowLeftIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { buttonVariants } from '#/common/ui/button'
import { ContactForm } from './ContactForm'
import { ContactItemsSection } from './ContactItemsSection'

const CONTACT_PAGE_DESC = `
راه‌های مختلف پیدا کردن من رو این پایین می‌بینی 👇🏻. خودم بیشتر در ایتا فعالیت دارم، ایمیل رو هم خیلی کم نگاه می‌اندازم. یه فرم هم همین پایین هست که باهاش می‌تونی از همین‌جا به راحتی پیام بدی.
`

export const ContactPage = () => (
  <div className="py-8 px-4 gap-4 min-h-dvh flex flex-col justify-center">
    <div className="max-w-lg w-full mx-auto flex flex-col gap-8 items-start justify-start">
      <div className="flex items-start gap-2 justify-start w-full">
        <Link
          to="/"
          className={buttonVariants({ size: 'icon-lg', variant: 'ghost' })}
        >
          <ArrowLeftIcon mirrored className="size-6" />
        </Link>

        <h1 className="text-3xl font-bold">راه‌های ارتباطی</h1>
      </div>

      <p className="text-muted-foreground w-full">{CONTACT_PAGE_DESC}</p>

      <ContactItemsSection />

      <ContactForm handler={null} />
    </div>
  </div>
)
