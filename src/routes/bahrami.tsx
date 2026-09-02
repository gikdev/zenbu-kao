import { createFileRoute } from '@tanstack/react-router'
import { BahramiPage } from '#/features/bahrami/BahramiPage'

export const Route = createFileRoute('/bahrami')({ component: BahramiPage })
