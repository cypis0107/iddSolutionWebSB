import { useTranslation } from 'react-i18next'
import { BsFacebook } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { TiSocialInstagramCircular } from 'react-icons/ti';

import './copyright.style.css';


const Copyright = () => {
    const { t } = useTranslation();
    return (
        <div className='copyright-container'>
            <div className='copyright-box'>
                <p>© {new Date().getFullYear()} IDD SOLUTION | {t('copyright')} </p>

                <div>
                    <a href='/'><BsFacebook size={'2.5rem'} /></a>
                    <a href='/'><AiFillTwitterCircle size={'2.8rem'} /></a>
                    <a href='/'><TiSocialInstagramCircular size={'3rem'} /></a>
                </div>
            </div>
        </div>

    );
}

export default Copyright;