import {createRoot} from 'react-dom/client'
import React from 'react'
import App from './app.tsx'

const app = document.getElementById("app")
const root = createRoot(app)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)   