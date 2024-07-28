export interface IDummy {
    description: string
    type: string
    key:string
}

export interface ISearchListItem {
    item: IDummy
}

const SearchListItem = (props: ISearchListItem) => {
    const {description, key, type} = props
    return (
        <div>
            <div>{key}</div>
            <div>{description}</div>
        </div>
    );
};

export default SearchListItem;