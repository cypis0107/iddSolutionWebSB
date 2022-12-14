import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import IndustryAImg from '../../assets/industry-2.jpg';

import './about.style.css'

const About = () => {

    const { t } = useTranslation();

    const myRef = useRef();
    const [elementIsVisable, setElementIsVisable] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisable(entry.isIntersecting);
        })
        observer.observe(myRef.current)

    }, [])


    return (
        <div id='about' className='about-container'
            style={{
                scrollMarginTop: '-20px',
                backgroundImage: `url(${IndustryAImg})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center right',
                backgroundSize: '40% 100%'

            }}>
            <div className={`${elementIsVisable ? 'about-title about-title-anim' : 'about-title'}`}>{t('aboutus')}</div>

            <div ref={myRef} className='about-box '>

                <div className='about-txt'>

                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Sequi ducimus soluta aperiam repellendus reiciendis impedit unde laudantium eum!
                    <br /><br />Fuga ad amet error reiciendis ex! Incidunt, enim sed. Voluptatibus
                    doloremque voluptatum voluptate laudantium cumque nihil expedita laboriosam voluptates
                    rerum dignissimos, consectetur reprehenderit aut dolorem rem itaque iusto nesciunt
                    perspiciatis alias nam, laborum veniam, architecto modi. Necessitatibus at ducimus eveniet ex.
                    Nesciunt, quibusdam nostrum.

                </div>
            </div>

        </div>
    )
}

export default About;