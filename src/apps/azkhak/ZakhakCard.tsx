import { HandIcon, TimerIcon, TrashSimpleIcon } from '@phosphor-icons/react'
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from '#/common/ui/item'
import { DestructiveBtn } from './DestructiveBtn'
import { formatToHoursAndMinutes } from './formatToHoursAndMinutes'
import { azkhakActions } from './store'
import type { ZakhakEntry } from './ZakhakEntry'

export const ZakhakCard = (p: {
  type: ZakhakEntry['type']
  durationInMinutes: ZakhakEntry['durationInMinutes']
  id: ZakhakEntry['id']
}) => (
  <Item variant='outline' size='xs'>
    <ItemMedia>
      {p.type === 'timer' && <TimerIcon className='size-6 text-amber-400' />}

      {p.type === 'manual' && <HandIcon className='size-6 text-sky-400' />}
    </ItemMedia>

    <ItemContent>
      <ItemTitle className='font-code' dir='ltr'>
        {p.durationInMinutes != null
          ? formatToHoursAndMinutes(p.durationInMinutes)
          : '-'}
      </ItemTitle>
    </ItemContent>

    <ItemActions>
      <DestructiveBtn
        variant='ghost'
        icon={TrashSimpleIcon}
        title='حذف'
        size='icon'
        onClick={() => azkhakActions.deleteEntry(p.id)}
      />
    </ItemActions>
  </Item>
)
