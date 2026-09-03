import { createFileRoute, redirect } from '@tanstack/react-router'
import RegisterPage from '#/features/auth/RegisterPage'

export const Route = createFileRoute('/register')({
  component: RegisterPage,
  beforeLoad: (p) => {
    if (p.context.getIsLoggedIn()) {
      throw redirect({ to: '/dashboard' })
    }
  },
})
