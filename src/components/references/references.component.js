
import { useTranslation } from 'react-i18next'
import BgImage from '../../assets/circular-bg.png'
//import ReferencesImg from '../../assets/references.jpeg'
import RefImg from '../../assets/1.jpeg';
import AnimationBox from '../services/animation.box'
import './references.style.css'


const References = () => {
    const { t } = useTranslation();

    const refList = ['reference.a', 'reference.b', 'referenece.c'];

    return (
        <section id='references' style={{
            scrollMarginTop: '-30px',
            backgroundImage: `url(${BgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'

        }}>

            <div className='references-container'>
                <div className='ref-title-box'>
                    <div className='ref-title'>{t('references')}</div>
                </div>
                <div className='ref-box'>
                    <AnimationBox img={RefImg} title={t('reference1')} list={refList} />
                </div>
                {/* <div className='ref-box-btm'></div> */}
                {/* <img className='ref-img' src={ReferencesImg} alt=''></img> */}

            </div>
        </section>
    )
}

export default References;