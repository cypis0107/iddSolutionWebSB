import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

const MenuDesktop = () => {

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
                </select>
            </div>
        </div>
    )
}

export default MenuDesktop;