import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
import Logo from '../../assets/idd-solution-logo.jpg';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

import './menu.style.css'

const Menu = () => {

    const [isScrolling, setIsScrolling] = useState(true);
    useEffect(() => {
        const handleScroll = event => {
            window.scrollY > 50 ? setIsScrolling(false) : setIsScrolling(true);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    const { i18n, t } = useTranslation();
    useEffect(() => {
        if (localStorage.getItem('i18nextLng')?.length > 2) {
            i18next.changeLanguage('en');
        }
    }, [])

    const handleLangChange = (e) => {
        i18n.changeLanguage(e.target.value);
    }

    return (

        <Fragment>
            <div className={`nav-header nav-hook-${isScrolling ? 'off' : 'on'}`}>
                <a href='#home'><img className={`logo${!isScrolling ? '-small' : ''}`} src={Logo} alt='Home' /> </a>

                <div className='navlist'>

                    <div className='navlist-li'>
                        <a href='#home'>
                            <span className='navlist-a'>{t('home')}</span>
                        </a>
                    </div>
                    <div className='navlist-li'>
                        <a href='#services'>
                            <span className='navlist-a'>{t('services')}</span>
                        </a>
                    </div>
                    <div className='navlist-li'>
                        <a href='#about'>
                            <span className='navlist-a'>{t('aboutus')}</span>
                        </a>
                    </div>
                    <div className='navlist-li'>
                        <a href='#references'>
                            <span className='navlist-a'>{t('references')}</span>
                        </a>
                    </div>

                    <div className='navlist-li'>
                        <a href='#contact-us'>
                            <span className='navlist-a'>{t('contactus')}</span>
                        </a>
                    </div>
                    <div className='navlist-li'>

                        <select
                            className='nav-lang'
                            value={localStorage.getItem('i18nextLng')}
                            onChange={handleLangChange}>
                            <option value='en'>English</option>
                            <option value='pl'>Polish</option>
                            <option value='pl'>German</option>
                        </select>


                    </div>

                </div>



            </div>

            <Outlet />
        </Fragment >
    )
}

export default Menu;




/*
HOME  ABOUTUS SERVICES   REFERENCES  CONTACTUS
Home tak jak baltec
SERVICES -> INSPECTION DESING DOCUMENTATION
pod desing zdjecie industry1
contact us jak w starej wersji podzial na drop cv i wspolprace

INDUSTRY2


.animation-text {
    animation: animation-text 10s ease normal forwards;
}

@keyframes animation-text {
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-800px);
        transform: translateZ(-800px);
        -webkit-filter: blur(12px);
        filter: blur(12px);
        opacity: 0;
    }

    30% {
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        -webkit-filter: blur(0);
        filter: blur(0);
        opacity: 1;
    }

    80% {
        opacity: 0.8;
        transform: translateY(-300px);
    }

    100% {
        transform: translateY(-350px);
        opacity: 0;
    }
}
//import translate from 'translate';

    // translate.engine = "google";
    // translate.key = process.env.GOOGLE_TRANS_API_KEY;


    // let testA = '';
    // const translateText = async (text) => {
    //     await translate(text, "pl").then(response => {
    //         testA = response;
    //         // console.log(response);
    //     }).catch(error => console.log(error.message))


    // }

    // translateText('What is wrong')
    // console.log(testA)
*/