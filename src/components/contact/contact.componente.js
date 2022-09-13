
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BiBroadcast } from 'react-icons/bi';
import { MdDriveFileMove } from 'react-icons/md';
import bgImg from '../../assets/1.jpeg';

import './contact.style.css';



const ContactUs = () => {
    const [selectedFile, setSelectedFile] = useState();

    const { t } = useTranslation();

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);

    };

    return (
        <section id='contact-us' style={{
            scrollMarginTop: '-30px',
            backgroundImage: `url(${bgImg})`,
            backgroundSize: 'cover'
        }}>

            <div className='contact-container'>

                <div className='contact-box'>

                    <div className='contact-box-office'>
                        <div className='contact-title'>{t('contactus')}</div>
                        <div className='contact-box-address'>
                            <p className='contact-box-title'>{t('head.office.title')}</p>
                            <p className='font-size-1-4 nunito'>{t('head.office.street')}</p>
                            <p className='font-size-1-4 nunito'>{t('head.office.zip')} {t('head.office.city')}</p>
                            <p className='font-size-1-4 nunito'>{t('head.office.country')}</p>
                            <br /><br />
                            <p className='font-size-1-2 nunito'>{t('tel.mobile')} +48 531 810 519</p>
                            <br />
                            <a className='font-size-1-2 nunito' href="mailto:sylwester@iddsolution.pl">sylwester@iddsolution.pl</a>
                        </div>
                    </div>

                    <BiBroadcast size={140} color={'#607D8B'} />

                    <div className='contact-box-form'>
                        <div className="contact-enquiry">{t('form.title')}</div>

                        <form name="contact" method="post" encType="multipart/form-data">
                            <input type="hidden" name="form-name" value="contact" />
                            <input type="radio" name="enquiry" value="cooperation" />
                            <label >&nbsp; {t('cooperation')}</label>
                            <input type="radio" name="enquiry" value="career enquiry" />
                            <label >&nbsp; {t('career.enquiry')}</label>
                            <br />
                            <input type="text"
                                name="name"
                                placeholder={t('firstlastname')}
                                minLength="2"
                                maxlength="30"
                                required
                            />
                            <input type="email"
                                name="email"
                                placeholder={t('email')}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder={t('subject')}
                            />

                            <textarea
                                name="message"
                                placeholder={t('message')}
                                maxlength="500"
                            />

                            <div className='custom-file-div'>
                                <label class="custom-file-upload">
                                    {!selectedFile ? t('upload.cv')
                                        : <span className='custom-file-name '><MdDriveFileMove size={30} color={'#607D8B'} />
                                            {selectedFile.name}</span>}
                                    <input type="file" name="file" onChange={handleFileChange} />
                                </label>
                            </div>
                            <div className='button-div'>
                                <button type="submit">{t('send')}</button>
                            </div>

                        </form>

                    </div>
                </div>

            </div>

        </section>
    )
}

export default ContactUs;
