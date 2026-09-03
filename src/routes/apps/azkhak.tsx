import { createFileRoute } from '@tanstack/react-router'
import { AzkhakPage } from '#/apps/azkhak/AzkhakPage'

export const Route = createFileRoute('/apps/azkhak')({
  ssr: false,
  component: AzkhakPage,
})
