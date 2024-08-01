import { useSearch } from '@/hooks/useSearch'
import SearchBar from '@/components/search-bar'
import SearchList from '@/components/search-list'

import '@/assets/style.scss'

export default function App() {
    const search = useSearch()

    return (
        <div className="app-container">
            <div className="app-content-box">
                <SearchBar search={search} />
                {search.listVisible && <SearchList />}
            </div>
        </div>
    )
}
