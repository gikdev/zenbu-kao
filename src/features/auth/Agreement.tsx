import { Link } from '@tanstack/react-router'
import { FieldDescription } from '#/common/ui/field'

export const Agreement = () => (
  <FieldDescription className='px-6 text-center'>
    <span>با استفاده از این سایت، شما </span>
    <Link to='/terms'>شرایط استفاده </Link>
    <span>و </span>
    <Link to='/privacy'>سیاست حریم خصوصی </Link>
    <span>قبول کردین.</span>
  </FieldDescription>
)
