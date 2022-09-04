import IndustryHImg from '../../assets/industry-1.jpeg';
import { useTranslation } from 'react-i18next';

import './home.style.css';

const Home = () => {
    const { t } = useTranslation();

    return (
        <section id='home'
            style={{
                scrollMarginTop: '35px',
                backgroundImage: `url(${IndustryHImg})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
                backgroundSize: 'cover'

            }}>
            <div className='home-container' >
                {/* <h1>We provide <br />high-quality services</h1> */}
                <span className='home-title'>{t('home.title.o')}<br />{t('home.title.t')} </span>
            </div>
        </section>
    )
}

export default Home;