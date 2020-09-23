import React, { Component } from 'react'
//Link is like anchor that 
import { Link } from 'gatsby'
import logo from '../../images/logo.png'

//It is used for icon
import { FaCartArrowDown } from 'react-icons/fa';
export default class Navbar extends Component {
    //Creating the state for navbar so that it can toggle properly
    state = {
        navBarState: false,
        navBarClassName: "collapse navbar-collapse",
        menus: [
            {
                id: 1,
                item: 'Home',
                url: '/'
            },
            {
                id: 2,
                item: 'About',
                url: '/about'
            },
            {
                id: 3,
                item: 'Services',
                url: '/services'
            },
            {
                id: 4,
                item: 'Contact',
                url: '/contact'
            }
        ]
    }
    //Toggler Method 
    myToggler = () => {
        this.state.navBarState ? this.setState({
            navBarState: false,
            navBarClassName: "collapse navbar-collapse"
        })
            : this.setState({
                navBarState: true,
                navBarClassName: "collapse navbar-collapse show"
            })
    }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-theme text-white">
                <Link to='/' className="nav-bar-brand ml-5">
                    <img src={logo} alt="logo goes here" width='40px' />

                </Link>
                <button
                    className="navbar-toggler" type="button" onClick={this.myToggler}>
                    <span className='text-white'>menu</span>
                </button>
                <div className={this.state.navBarClassName}>
                    <ul className='navbar-nav ml-auto mr-5'>
                        {this.state.menus.map(menu => {

                            return (
                                <li key ={menu.id} className="nav-item">
                                    <Link to={menu.url} className='nav-link text-white'>
                                        {menu.item}
                            </Link>
                                </li>
                            )
                        })}

                      
                        <li className="nav-item">
                            <Link to='/' className='nav-link text-white'>
                                <FaCartArrowDown className='cart-icon' />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
