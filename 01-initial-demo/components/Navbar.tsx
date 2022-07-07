import React from 'react'
import ActiveLink from './ActiveLink'

const MENU_ITEMS = [
    {id: '1', text: 'Home', href: '/'},
    {id: '2', text: 'About', href: '/about'},
    {id: '3', text: 'Contact', href: '/contact'},
    {id: '4', text: 'Pricing', href: '/pricing'},
];


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {MENU_ITEMS.map(({id, text, href}) =>  (
                        <li className="nav-item" key={id}>
                            <ActiveLink text={text} href={href}/>
                        </li>
                    ))}
                </ul>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar