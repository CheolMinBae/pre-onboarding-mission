/// <reference types="vite/client" />

type InitialData = {
    type: string
    key: string
    description: string
}

type SearchListData = {
    type: string
    data: SearchListItem[]
}

type SearchListItem = {
    key: string
    description: string
}
