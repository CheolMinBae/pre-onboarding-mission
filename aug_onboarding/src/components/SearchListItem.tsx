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
    display: flex;
    align-items: center;
    padding: 10px;
    box-sizing: border-box;
    height: 36px;
    white-space: pre-wrap;
    span {
        font-weight: 600;
    }
    &:hover {
        background-color: #f2f2f2;
        cursor: pointer;
    }

`
