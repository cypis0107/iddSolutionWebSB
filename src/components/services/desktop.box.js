import { useState } from 'react';
import { useTranslation } from 'react-i18next';



const DesktopBox = (props) => {
    const [changeBoxSize, setChangeBoxSize] = useState(true);
    const { t } = useTranslation();
    const { img, title, list } = props;


    return (

        <div className='services-box'>
            <img
                className='services-img'
                src={img}
                alt=''
            />
            <div onClick={() => { setChangeBoxSize(!changeBoxSize) }}
                onMouseLeave={() => { !changeBoxSize && setChangeBoxSize(!changeBoxSize) }}>
                <div className={`${changeBoxSize ? 'services-box-text' : 'services-box-text services-box-tex-drop'} `} >
                    {title}
                    <ul className={`${changeBoxSize ? 'services-ul' : 'services-ul services-ul-back'}`}>
                        {list.map((point) => (
                            <li key={point} className='services-li'>{t(point)}</li>
                        ))}

                    </ul>

                </div>
            </div>
        </div>
    )
}

export default DesktopBox;