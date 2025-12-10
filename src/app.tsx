import './app.css'
import { createHashRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './pages/home.tsx';
import Navbar from './componants/navbar.jsx'

import NotesTemplate from './pages/notes-template.tsx';
import Composant from './exemples/component/simpleComponent.tsx';
import Interactivity from './exemples/interactivity/simpleInteractivity.tsx';
const router = createHashRouter([
        {
            Component: Navbar,
            children :[
                {
                    path:"/",
                    Component: Home,
                },
                {
                    path:"note/:noteid",
                    Component:NotesTemplate,
                },
                {
                    path:"exemple",
                    children:[
                        {
                            path:"component",
                            Component:Composant,
                        },
                        {
                            path:"interactivity",
                            Component:Interactivity,
                        }
                    ]
                },
            ]
        }
    ],
    {
        basename: '/'
    }

)

export default function App(){
    return(
    <>
        <RouterProvider router={router} />
    </>
    )
}      