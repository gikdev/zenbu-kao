import { ListIcon, PlusIcon } from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { ButtonGroup } from '#/common/ui/button-group'
import { PlayPauseBtn } from './PlayPauseBtn'

export function ControlCenter() {
  return (
    <ButtonGroup>
      <RenderTooltip tooltip='گزینه‌های بیشتر'>
        <Button variant='outline' size='icon-huge'>
          <ListIcon className='size-8' />
        </Button>
      </RenderTooltip>

      <PlayPauseBtn />

      <RenderTooltip tooltip='زمان دستی'>
        <Button variant='outline' size='icon-huge'>
          <PlusIcon className='size-8' />
        </Button>
      </RenderTooltip>
    </ButtonGroup>
  )
}
