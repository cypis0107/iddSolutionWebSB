import { useContext, useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { PdfContext } from '../../contexts/pdf.context';
//import ReferencesImg from '../../assets/references1.jpeg'
import BgImage from '../../assets/circular-bg.png'
import BaltecImg from '../../assets/baltec-logo.png';
import TeslaImg from '../../assets/tesla-logo.png';
import LogoStarImg from '../../assets/logo-star.png';
//import AkerImg from '../../assets/aker.svg';
import ReferencesBox from './references.box';
import PdfView from './pdf.view';
import BaltecPdf from './ref_files/reference-baltec.pdf'
import CopyPdf from './ref_files/sample.pdf'

import './references.style.css'


const References = () => {

    const { pdfNumberClick, setPdfNumerClick } = useContext(PdfContext)
    const { t } = useTranslation();
    const refScroll = useRef(null);

    const refTitle = useRef();
    const [elementIsVisable, setElementIsVisable] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setElementIsVisable(entry.isIntersecting);
        })
        observer.observe(refTitle.current)

    }, [])


    const goToScroll = () => refScroll.current.scrollIntoView({ behavior: "smooth" });

    const handleClick = (num) => {
        setPdfNumerClick(num);
        goToScroll();
    }

    return (
        <section ref={refScroll} id='references' style={{
            scrollMarginTop: '-30px',
            backgroundImage: `url(${BgImage})`,
            backgroundRepeat: "no-repeat",
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center center',
            backgroundSize: 'cover'
        }}>
            <div className='references-container'>
                <div ref={refTitle} className='ref-title-box'>
                    <div className={`${elementIsVisable ? 'ref-title ref-title-anim' : 'ref-title'}`}>{t('references')}</div>
                </div>

                <div className='ref-box'>
                    <span onClick={() => handleClick(1)} ><ReferencesBox img={BaltecImg} /></span>
                    <span  ><ReferencesBox img={TeslaImg} /></span>
                    {/* <span  ><ReferencesBox img={AkerImg} /></span> */}

                </div>

                {(() => {
                    switch (pdfNumberClick) {
                        case 1: return <PdfView pdf={BaltecPdf} />
                        case 2: return <PdfView pdf={CopyPdf} />
                        default:
                            return null
                    }

                })()}
                <div className='ref-bottom' >
                    <img className='ref-img' src={LogoStarImg} alt='' />
                </div>


                {/* <img className='ref-img' src={ReferencesImg} alt=''></img> */}
            </div>
        </section >
    )
}

export default References;




// const divVisable = document.getElementsByClassName("pdf-container")[0];
// if (divVisable) { divVisable.style.display = 'flex'; }
//document.body.classList.add("no-scroll")
// console.log(pdfNumberClick, divVisable)

// {/* <div className='ref-box-btm'></div> */ }
// {/* <img className='ref-img' src={ReferencesImg} alt=''></img> */ }

// {/* <button onClick={() => setOpenWindow(true)}>open</button>
//                 {openWindow && <RenderInWindow>hello world</RenderInWindow>
//                 } */}
