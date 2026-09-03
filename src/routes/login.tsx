import { createFileRoute, redirect } from '@tanstack/react-router'
import LoginPage from '#/features/auth/LoginPage'

export const Route = createFileRoute('/login')({
  component: LoginPage,
  beforeLoad: p => {
    if (p.context.getIsLoggedIn()) {
      throw redirect({ to: '/dashboard' })
    }
  },
})
