import { FormEvent } from 'react'

export default function SearchBar({ search }) {
    function submit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault()
        search.submit()
    }

    return (
        <form className="search-bar-container" onSubmit={(e) => submit(e)}>
            <input
                className="search-input"
                value={search.keyword}
                onChange={(e) => search.updateKeyword(e.target.value)}
            />
            <button className="search-button">Search</button>
        </form>
    )
}
