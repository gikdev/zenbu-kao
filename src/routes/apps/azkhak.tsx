import { createFileRoute } from '@tanstack/react-router'
import { AzkhakPage } from '#/apps/azkhak/AzkhakPage'

export const Route = createFileRoute('/apps/azkhak')({
  ssr: false,
  component: AzkhakPage,
  head: () => ({
    links: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/apps/Azkhak.png',
        sizes: '512x512',
      },
    ],
    meta: [{ title: 'ازخک - بهرامی' }],
  }),
})
