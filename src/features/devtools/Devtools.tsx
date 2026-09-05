import { TanStackDevtools } from '@tanstack/react-devtools'
import { hotkeysDevtoolsPlugin } from '@tanstack/react-hotkeys-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'

const config = { position: 'bottom-right' } as const
const plugins = [
  hotkeysDevtoolsPlugin(),
  {
    name: 'Tanstack Router',
    render: <TanStackRouterDevtoolsPanel />,
  },
  {
    name: 'Tanstack Query',
    render: <ReactQueryDevtoolsPanel />,
  },
]

export const Devtools = () => (
  <TanStackDevtools config={config} plugins={plugins} />
)
