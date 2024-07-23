import { forwardRef } from 'react'

export const SearchInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      type="text"
      className="input w-full"
      placeholder="Search"
      ref={ref}
      {...props}
    />
  )
})
