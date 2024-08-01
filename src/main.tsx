import React from 'react'
import ReactDOM from 'react-dom/client'

import App from '@/app'
import { SearchProvider } from '@/context/search-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SearchProvider>
            <App />
        </SearchProvider>
    </React.StrictMode>,
)
