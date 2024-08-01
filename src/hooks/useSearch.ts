import { useEffect, useState } from 'react'

export function useSearch() {
    const [keyword, setKeyword] = useState<string>('')
    const [listVisible, setListVisible] = useState<boolean>(false)

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
