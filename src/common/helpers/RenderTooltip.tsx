import type { ReactElement } from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from '#/common/ui/tooltip'

export const RenderTooltip = (p: {
  children: ReactElement
  tooltip: string
}) => (
  <Tooltip>
    <TooltipTrigger render={p.children} />

    <TooltipContent>
      <p>{p.tooltip}</p>
    </TooltipContent>
  </Tooltip>
)
