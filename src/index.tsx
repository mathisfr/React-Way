import {createRoot} from 'react-dom/client'
import App from './app.tsx'

const app = document.getElementById("app")
const root = createRoot(app)
root.render(<App/>)   