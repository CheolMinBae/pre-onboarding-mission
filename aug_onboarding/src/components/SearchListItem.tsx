export interface IDummy {
    description: string
    type: string
    key:string
}

export interface ISearchListItem {
    item: IDummy
}

const SearchListItem = ({item}: ISearchListItem) => {
    return (
        <div>
            <div>{item.description}</div>
        </div>
    );
};

export default SearchListItem;