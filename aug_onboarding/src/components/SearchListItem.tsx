import styled from "styled-components";

export interface IDummy {
    description: string
    type: string
    key:string
}

export interface ISearchListItem {
    item: IDummy
    value: string
}

const SearchListItem = ({item, value}: ISearchListItem) => {
    const innerHtml = (word:string) => {
        const regex = new RegExp(`${value}`, 'i')
        return {
            __html: word.replace(regex, matched => {
                return `<span>${matched}</span>`
            }),
        }
    }

    return (
            <Item dangerouslySetInnerHTML={innerHtml(item.description)} />
    );
};

export default SearchListItem;

const Item  = styled.div`
    span {
        font-weight: 600;
    }
`
