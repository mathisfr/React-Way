import { NavLink } from "react-router";
import { Outlet } from "react-router";
import "./navbar.css"

export default function Navbar(){
    return(
        <>
            <ul id="navbar">
                <li className="navbar-drop">
                    <NavLink to="/" end>Accueil</NavLink>
                </li>
                <li className="navbar-drop">
                    Notes
                    <ul className="navbar-drop-content">
                        <li>
                            <NavLink to="/note/0" end>La configuration</NavLink>
                        </li>
                        <li>
                            <NavLink to="/note/1" end>Reprise du CSS</NavLink>
                        </li>
                        <li>
                            <NavLink to="/note/2" end>Component</NavLink>
                        </li>
                    </ul>
                </li>
                <li className="navbar-drop">
                    Exemples
                    <ul className="navbar-drop-content">
                        <li className="navbar-drop">
                            <NavLink to="/exemple/component" end>Component</NavLink>
                        </li>
                        <li className="navbar-drop">
                            <NavLink to="/exemple/interactivity" end>Interactivité</NavLink>
                        </li>
                    </ul>
                </li>
            </ul>
            <Outlet/>
        </>
    )
}