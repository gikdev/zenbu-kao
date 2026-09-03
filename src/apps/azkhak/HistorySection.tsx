import { EntryHistory } from './EntryHistory'
import { useHistory } from './store'

export function HistorySection() {
  const items = useHistory()

  return (
    <div className='p-4 flex flex-col gap-1 overflow-y-auto' dir='rtl'>
      {items.length ? (
        <EntryHistory zakhaks={items} />
      ) : (
        <p className='text-center font-code' dir='ltr'>
          ¯\_(ツ)_/¯
        </p>
      )}
    </div>
  )
}
