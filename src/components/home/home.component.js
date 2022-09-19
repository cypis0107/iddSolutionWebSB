import { useState, useRef, useEffect, useContext } from 'react';
import IndustryHImg from '../../assets/industry-1.jpeg';
import { useTranslation } from 'react-i18next';
import { ViewportContext } from '../../contexts/viewport.context';

import './home.style.css';

const Home = () => {
    const { t } = useTranslation();
    const myRef = useRef();
    const [elementIsVisable, setElementIsVisable] = useState();
    const { width, breakpoint } = useContext(ViewportContext);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisable(entry.isIntersecting);
        })
        observer.observe(myRef.current)

    }, [])
    if (width < breakpoint) {
        if (document.getElementsByClassName("home-title")[0]) {
            document.getElementsByClassName("home-title")[0].style.fontSize = '2rem';
            document.getElementsByClassName("home-title")[0].style.left = '170px';
        }
    }


    return (
        <section id='home'
            style={{
                scrollMarginTop: '45px',
                backgroundImage: `url(${IndustryHImg})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'

            }}>
            <div className='home-container' >
                <div ref={myRef} className={`${elementIsVisable ? 'home-title home-title-anim' : 'home-title'}`}>
                    {t('home.title.o')}<br />{t('home.title.t')} </div>
            </div>
        </section>
    )
}

export default Home;