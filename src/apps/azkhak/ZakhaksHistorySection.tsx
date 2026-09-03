import { useViewHistory } from './store';
import { ZakhaksHistory } from './ZakhaksHistory';


export function ZakhaksHistorySection() {
  const items = useViewHistory();

  return (
    <div className='p-4 flex flex-col gap-1 overflow-y-auto' dir='rtl'>
      {items.length ? (
        <ZakhaksHistory zakhaks={items} />
      ) : (
        <p className='text-center font-code' dir='ltr'>¯\_(ツ)_/¯</p>
      )}
    </div>
  );
}
