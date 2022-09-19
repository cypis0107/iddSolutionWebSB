import { useEffect, useContext } from 'react';
import { MenuContext } from '../../contexts/menu.context';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



const MenuMobile = (props) => {

    const { setHamburgerMenu } = useContext(MenuContext);

    const { i18n, t } = useTranslation();
    useEffect(() => {
        if (localStorage.getItem('i18nextLng')?.length > 2) {
            i18next.changeLanguage('en');
        }
    }, [])

    const handleLangChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }
    const handleClick = () => {
        setHamburgerMenu(false);
        document.querySelector("#div-close").classList.add('menu-mobile-container-close');
    }

    return (

        <div id='div-close' className={`${props.visible ? 'menu-mobile-container menu-mobile-container-open' : ' menu-mobile-container menu-mobile-container-close'}`}>

            <a href='#home' className='menu-mobile-box' onClick={handleClick}>
                <span className='menu-mobile-a '>{t('home')}</span>
            </a>
            <a href='#services' className='menu-mobile-box' onClick={handleClick}>
                <span className='menu-mobile-a '>{t('services')}</span>
            </a>
            <a href='#about' className='menu-mobile-box' onClick={handleClick}>
                <span className='menu-mobile-a '>{t('aboutus')}</span>
            </a>
            <a href='#references' className='menu-mobile-box' onClick={handleClick}>
                <span className='menu-mobile-a '>{t('references')}</span>
            </a>
            <a href='#contact-us' className='menu-mobile-box' onClick={handleClick}>
                <span className='menu-mobile-a '>{t('contactus')}</span>
            </a>

            <div className='menu-mobile-lang-box'>
                <select
                    className='menu-mobile-lang-item'
                    value={localStorage.getItem('i18nextLng')}
                    onChange={handleLangChange}>
                    <option value='en'>English</option>
                    <option value='pl'>Polish</option>
                </select>
            </div>
        </div>



    )
}

export default MenuMobile;
