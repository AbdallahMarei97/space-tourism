import React from 'react'
import './navbar.scss'
import navbarLinks from './navbarLinks.json'
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {burgerActive: false};
    }

    // checkNavbarLinks = () => {
    //     navbarLinks.forEach(link => {
    //         if (window.location.pathname === link.url) {
    //             this.setState({pageUrl: link.url})
    //         }
    //     })
    // }
    // componentDidMount() {
    //     window.onpopstate = () => {
    //         this.checkNavbarLinks()
    //     }
    //     this.checkNavbarLinks()
    // }

    openBurgerMenu = () => {
        this.setState({burgerActive: !this.state.burgerActive})
    }

    render() {
        return (
          <nav className='navbar'>
            <NavLink to='/home' className='logo'>
                <img src='/images/shared/logo.svg' alt='logo'/>
            </NavLink>
            <div className='burger-menu' onClick={this.openBurgerMenu}>
                {this.state.burgerActive ? <img src='/images/shared/icon-close.svg' alt='close-icon'/> : <img src='/images/shared/icon-hamburger.svg' alt='burger-icon'/>}
            </div>
            <ul className={`${this.state.burgerActive ? 'navbar-links-burger-active' : ''} navbar-links`}>
                {navbarLinks.map(link => (
                <li key={link.id} className='navbar-singular-link'>
                    <NavLink to={link.url}>
                        <span className='navbar-link-bold'>{link.linkNumber}</span> {link.linkName}
                    </NavLink>
                </li>
                ))}
            </ul>
          </nav>
        )
    }
}

export default Navbar