import { useEffect, useState } from 'react'

export function useSearch() {
    const [keyword, setKeyword] = useState<string>('')
    const [listVisible, setListVisible] = useState<boolean>(false)

    function submit(): void {
        closeList()
        alert(`"${keyword}" search action`)
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
        } else {
            openList()
        }
    }, [keyword])

    return {
        keyword,
        listVisible,

        setKeyword,
        submit,
    }
}
