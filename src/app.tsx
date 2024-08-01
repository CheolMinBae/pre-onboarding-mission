import SearchBar from '@/components/search-bar'
import SearchList from '@/components/search-list'

import '@/assets/style.scss'

export default function App() {
    return (
        <div className="app-container">
            <div className="app-content-box">
                <SearchBar />
                <SearchList />
            </div>
        </div>
    )
}
