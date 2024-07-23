import { SearchButton } from '~/components/search-button'
import { SearchInput } from '~/components/search-input'

export function SearchBar() {
  return (
    <div className="flex gap-2">
      <SearchInput />
      <SearchButton />
    </div>
  )
}
