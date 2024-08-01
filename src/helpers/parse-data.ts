export function parseData(initialData: InitialData[]): SearchListData[] {
    const categorizedData = new Map()
    initialData.forEach((data) => {
        const { type, key, description } = data
        categorizedData.set(type, [
            ...(categorizedData.get(type) || []),
            { key, description },
        ])
    })

    const dataToUse = []
    categorizedData.forEach((value, key) => {
        dataToUse.push({ type: key, data: value })
    })

    return dataToUse
}
