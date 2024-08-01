import { createContext, Dispatch, useContext, useState } from 'react'

const SearchContext = createContext({
    keyword: '' as string,
    setKeyword: undefined as Dispatch<string>,
    listVisible: false as boolean,
    setListVisible: undefined as Dispatch<boolean>,
})

export function SearchProvider({ children }) {
    const [keyword, setKeyword] = useState('')
    const [listVisible, setListVisible] = useState(false)
    const contextValue = { keyword, setKeyword, listVisible, setListVisible }

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    )
}

export function useSearchContext() {
    return useContext(SearchContext)
}
