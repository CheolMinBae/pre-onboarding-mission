import { forwardRef } from 'react'

export const SearchInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      type="text"
      className="input"
      placeholder="Search"
      ref={ref}
      {...props}
    />
  )
})
