import { useCallback, useRef, useState } from 'react'

import { useDebounce } from '~/hooks/use-debounce'
import { SearchButton } from '~/components/search-button'
import { SearchInput } from '~/components/search-input'
import { SearchSuggestion } from '~/components/search-suggestion'

export function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)

  const handleSuggestionClick = useCallback((suggestion: string) => {
    setQuery(suggestion)
    inputRef.current?.focus()
  }, [])

  return (
    <div className="flex gap-2">
      <div className="relative flex w-80">
        <SearchInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          ref={inputRef}
        />
        {query && (
          <SearchSuggestion
            query={debouncedQuery}
            onClickSuggestion={handleSuggestionClick}
          />
        )}
      </div>
      <SearchButton />
    </div>
  )
}
