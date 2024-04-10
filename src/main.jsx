import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/main.css'
import DataProvider from './utilities/DataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <DataProvider></DataProvider>
)
