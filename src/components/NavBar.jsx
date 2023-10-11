import burger from '../assets/icons/Burger.svg'
import cross from '../assets/icons/Cross.svg'
import { useRef } from "react"

export const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('show-nav');
    }

    return (
        <div className="navigation">
            <div className='logo'><a href='#hero-section'>codebyaadi</a></div>
            <nav ref={navRef} >
                <ul className='menu'>
                    <li><a href='./'>Home</a></li>
                    <li><a href='./#about-me-section' onClick={showNavBar}>About me</a></li>
                    <li><a href='#Home'>Projects</a></li>
                    <li><a href='./#contact' onClick={showNavBar}>Contact</a></li>
                </ul>
                <button className="false-btn close-btn" onClick={showNavBar}>
                    <img src={cross} alt='close' />
                </button>
            </nav>
            <button className="false-btn menu-btn" onClick={showNavBar}>
                <img src={burger} alt='menu' />
            </button>
        </div>
    )
}
