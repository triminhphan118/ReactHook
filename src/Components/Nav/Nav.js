import logo from '../../logo.svg';
import './nav.scss';
import { NavLink } from "react-router-dom";
 
const Nav = () => {

    return (
        <>
            <nav className="nav">
                <img src={logo} alt="logo" className="nav__logo"/>
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <NavLink to="/" className="nav__link">Home</NavLink>
                    </li>

                    <li className="nav__list-item">
                        <NavLink to="/timer" className="nav__link">Timer</NavLink>
                    </li>

                    <li className="nav__list-item">
                        <NavLink to="/todo" className="nav__link">Todo</NavLink>
                    </li>

                    <li className="nav__list-item">
                        <NavLink to="/posts" className="nav__link">Post Apps</NavLink>
                    </li>

                    <li className="nav__list-item">
                        <NavLink to="/secret" className="nav__link">Secret Meaning</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;