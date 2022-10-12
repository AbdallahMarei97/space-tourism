import React from 'react'
import './navbar.scss'
import navbarLinks from './navbarLinks.json'
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {burgerActive: false};
    }

    openBurgerMenu = () => {
        this.setState({burgerActive: !this.state.burgerActive})
    }

    render() {
        return (
          <nav className='navbar'>
            <Link to='/home' className='logo'>
                <img src='/images/shared/logo.svg' alt='logo'/>
            </Link>
            <div className='burger-menu' onClick={this.openBurgerMenu}>
                {this.state.burgerActive ? <img src='/images/shared/icon-close.svg' alt='close-icon'/> : <img src='/images/shared/icon-hamburger.svg' alt='burger-icon'/>}
            </div>
            <ul className={`${this.state.burgerActive ? 'navbar-links-burger-active' : ''} navbar-links`}>
                {navbarLinks.map(link => (
                <li key={link.id} className={`${window.location.pathname === link.url ? 'navbar-link-active' : ''} navbar-singular-link`}>
                    <Link to={link.url} onClick={()=>this.setState({...this.state, pageUrl: link.url})}>
                        <span className='navbar-link-bold'>{link.linkNumber}</span> {link.linkName}
                    </Link>
                </li>
                ))}
            </ul>
          </nav>
        )
    }
}

export default Navbar