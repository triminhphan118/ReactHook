import logo from '../../logo.svg';
import './nav.scss';
 
const Nav = () => {

    return (
        <>
            <nav className="nav">
                <img src={logo} alt="logo" className="nav__logo"/>
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <a href="#." className="nav__link active">Home</a>
                    </li>

                    <li className="nav__list-item">
                        <a href="#." className="nav__link">Todo</a>
                    </li>

                    <li className="nav__list-item">
                        <a href="#." className="nav__link">About</a>
                    </li>

                    <li className="nav__list-item">
                        <a href="#." className="nav__link">Intro</a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Nav;