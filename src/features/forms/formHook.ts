import { createFormHook } from '@tanstack/react-form'

import { fieldContext, formContext } from './formHookContexts'
import { SimpleSubmitBtn } from './SimpleSubmitBtn'
import { SingleLineInput } from './SingleLineInput'

export const { useAppForm } = createFormHook({
  formContext,
  fieldContext,
  fieldComponents: {
    SingleLineInput,
  },
  formComponents: {
    SimpleSubmitBtn,
  },
})
