import { ContactItemsSection } from './ContactItemsSection'

export const ContactPage = () => (
  <div className="py-8 px-4 gap-4 min-h-dvh flex flex-col items-center justify-center text-center">
    <h1 className="text-3xl font-bold">راه‌های ارتباطی</h1>

    <ContactItemsSection />

    <div className="flex flex-col">{/* Contact Form */}</div>
  </div>
)
