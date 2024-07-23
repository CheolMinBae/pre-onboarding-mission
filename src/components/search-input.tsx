import { forwardRef } from 'react'

export const SearchInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input type="text" className="input" ref={ref} {...props} />
})
