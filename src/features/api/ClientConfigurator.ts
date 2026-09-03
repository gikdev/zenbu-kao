import { useEffect } from 'react'
import { useAccessToken } from '../auth/store'
import { client } from './client'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

if (typeof API_BASE_URL?.trim() !== 'string') {
  throw new Error('VITE_API_BASE_URL is not valid!')
}

export const ClientConfigurator = () => {
  const accessToken = useAccessToken()

  useEffect(() => {
    client.setConfig({
      baseUrl: API_BASE_URL,
      throwOnError: false,
      auth: () => accessToken || undefined,
    })
  }, [accessToken])

  return null
}
