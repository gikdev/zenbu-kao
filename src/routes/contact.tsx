import { createFileRoute } from '@tanstack/react-router'
import { ContactPage } from '#/apps/contact/ContactPage'

export const Route = createFileRoute('/contact')({ component: ContactPage })
