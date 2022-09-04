
import { useTranslation } from 'react-i18next';
import InspectionImg from '../../assets/4.jpeg';
import DesignImg from '../../assets/3.jpeg';
import DocumentationImg from '../../assets/documentation.jpeg';
import BgImage from '../../assets/circular-bg.png';

import AnimationBox from './animation.box';
import './services.style.css'

const Services = () => {

    const { t } = useTranslation();

    const inspectionList = ['inspection.a', 'inspection.b', 'inspection.c', 'inspection.d'];
    const desingList = ['design.a', 'design.b', 'design.c'];
    const documentationList = ['documentation.a', 'documentation.b', 'documentation.c'];
    return (
        <section id='services'
            style={{
                scrollMarginTop: '-30px',
                backgroundImage: `url(${BgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center center',
            }}>

            <div className='services-container'>

                <div className='services-title'>
                    {t('services')}
                </div>

                <div className='services-content'>
                    <AnimationBox img={InspectionImg} title={t('inspection')} list={inspectionList} />
                    <AnimationBox img={DesignImg} title={t('design')} list={desingList} />
                    <AnimationBox img={DocumentationImg} title={t('documentation')} list={documentationList} />
                </div>

            </div>
        </section>
    )
}

export default Services;

