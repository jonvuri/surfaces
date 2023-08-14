import React from 'react'
import ReactDOM from 'react-dom/client'
import Demo from './Demo'

const rootEl = document.getElementById('root')

if (import.meta.env.DEV && !(rootEl instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?'
  )
}

const root = ReactDOM.createRoot(rootEl!)

root.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
)
