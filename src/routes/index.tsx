import { createFileRoute, Navigate } from '@tanstack/react-router'
import { useIsLoggedIn } from '#/features/auth/store'

export const Route = createFileRoute('/')({
  component: () => (
    <Navigate to={useIsLoggedIn() ? '/dashboard' : '/bahrami'} />
  ),
})
