import { useNavigate } from '@tanstack/react-router'
import { authStore } from './store'

export const useLogOut = () => {
  const navigation = useNavigate()

  return () => {
    authStore.actions.logOut()
    void navigation({ to: '/' })
  }
}
