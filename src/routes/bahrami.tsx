import { createFileRoute } from '@tanstack/react-router'
import { BahramiPage } from '#/apps/bahrami/BahramiPage'

export const Route = createFileRoute('/bahrami')({ component: BahramiPage })
