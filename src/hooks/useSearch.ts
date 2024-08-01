import { useEffect } from 'react'

import { useSearchContext } from '@/context/search-context'

export function useSearch() {
    const { keyword, setKeyword, listVisible, setListVisible } =
        useSearchContext()

    function submit(): void {
        closeList()
        alert(`"${keyword}" search action`)
    }

    function updateKeyword(text): void {
        setKeyword(text)
        openList()
    }

    function selectItem(item): void {
        setKeyword(item)
        closeList()
    }

    function openList(): void {
        setListVisible(true)
    }

    function closeList(): void {
        setListVisible(false)
    }

    useEffect(() => {
        if (keyword.length === 0) {
            closeList()
        }
    }, [keyword])

    return {
        keyword,
        listVisible,

        updateKeyword,
        submit,
        selectItem,
    }
}
