import { useEffect, useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { ViewportContext } from '../../contexts/viewport.context';
import { MenuContext } from '../../contexts/menu.context';
import LogoImg from '../../assets/logoN1.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { RiCloseFill } from 'react-icons/ri';
import MenuDesktop from './menu.desktop';
import MenuMobile from './menu.mobile';

import './menu.style.css'

const Menu = () => {

    const [isScrolling, setIsScrolling] = useState(true);
    const { width, breakpoint } = useContext(ViewportContext);
    const { hamburgerMenu, setHamburgerMenu } = useContext(MenuContext);

    useEffect(() => {
        const handleScroll = event => {
            window.scrollY > 50 ? setIsScrolling(false) : setIsScrolling(true);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    const handleClick = () => {
        setHamburgerMenu(!hamburgerMenu)
    }

    const showMenu = () => {
        if (hamburgerMenu) {
            document.getElementsByClassName("home-title")[0].style.display = 'none'
            document.body.style.overflow = "hidden"
            return <MenuMobile visible={true} />
        }
        else {
            if (document.getElementsByClassName("home-title")[0]) {
                document.getElementsByClassName("home-title")[0].style.display = 'block'
            }
            if (document.getElementsByClassName("menu-mobile-container")[0]) {
                document.body.style.overflow = "scroll";
                return <MenuMobile visible={false} />
            }
        }

    }

    return (
        <>
            <div>
                <div className={`nav-header nav-hook-${isScrolling ? 'off' : 'on'}`}>
                    <a href='#home'><img className={`logo${!isScrolling ? '-small' : ''}`} src={LogoImg} alt='Home' /> </a>

                    {
                        width < breakpoint ?


                            <span onClick={handleClick}>
                                {hamburgerMenu ? <RiCloseFill size={40} color={'#7F9BC3'} /> : <GiHamburgerMenu size={40} color={'#7F9BC3'} />}
                            </span>
                            :
                            <MenuDesktop />

                    }

                </div>
                {showMenu()}

            </div>
            <Outlet />
        </>
    )
}

export default Menu;