import { useRef } from 'react'

import { SearchButton } from '~/components/search-button'
import { SearchInput } from '~/components/search-input'

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="flex gap-2">
      <SearchInput ref={inputRef} />
      <SearchButton />
    </div>
  )
}
