
//import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { BiBroadcast } from 'react-icons/bi';
import bgImg from '../../assets/1.jpeg';
//import emailjs from '@emailjs/browser';

import './contact.style.css';



const ContactUs = () => {


    const { t } = useTranslation();
    // const { register, handleSubmit, reset, formState: { errors } } = useForm({
    //     mode: "onBlur"
    // });


    // const submitEmail = (event) => {
    //     //event.preventDefault();
    //     emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID,
    //         process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    //         document.getElementById("id-form"),
    //         process.env.REACT_APP_EMAIL_PUBLIC_KEY);

    //     document.getElementById("id-form").reset();
    //     reset();
    // }






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

                        <form name="contact" method="post">
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label>Your Name: <input type="text" name="name" /></label>
                            </p>
                            <p>
                                <label>Your Email: <input type="email" name="email" /></label>
                            </p>
                            <p>
                                <label>Message: <textarea name="message"></textarea></label>
                            </p>
                            <label>
                                <span>Add file:</span>
                                <input name="file" type="file" />
                            </label>
                            <p>
                                <button type="submit">Send</button>
                            </p>
                        </form>

                        {/* <form id="id-form" method="post" onSubmit={handleSubmit(submitEmail)}>
                            <input type="radio" id="cooperation" name="enquiry" value="cooperation" {...register("enquiry")} />
                            <label >&nbsp; {t('cooperation')}</label>
                            <input type="radio" id="enquiry" name="enquiry" value="career enquiry" {...register("enquiry")} />
                            <label >&nbsp; {t('career.enquiry')}</label>
                            <br />
                            <input
                                type="text"
                                placeholder={t('firstlastname')}
                                {...register("firstLastName", {
                                    required: <span>{t('error.required')}</span>,
                                    minLength: { value: 2, message: <span>{t('error.min')}</span> },
                                    maxLength: { value: 30, message: <span>{t('error.max')}</span> }
                                })} />
                            {errors.firstLastName && <p className="form-errors">{errors.firstLastName.message}</p>} */}

                        {/* <input type="email"
                                placeholder={t('email')}
                                {...register("email", {
                                    required: <span>{t('error.required')}</span>,
                                    pattern: {
                                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                        message: <span>{t('error.email')}</span>
                                    }
                                })} />
                            {errors.email && <p className="form-errors">{errors.email.message}</p>}

                            <input placeholder={t('subject')} type="text" {...register("subject")} />

                            <textarea type="text" placeholder={t('message')} maxLength={500} {...register("message")} />

                            <label class="custom-file-upload">
                                {t('upload.cv')}
                                <input type="file" name="my_file" />
                            </label>

                            <button type="submit">{t('send')}</button>
                        </form> */}


                    </div>
                </div>
                {/* <div className='contact-box-btm'></div> */}

            </div>

        </section>
    )
}

export default ContactUs;




/*
passs google nzfnevglkkcakaaf

to robi z backend nodemailer
   const submitEmail = async (data) => {

        console.log(data)
        const response = await fetch("http://localhost:3001/send", {
            method: "POST",
            //mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            },
            body: JSON.stringify({ data })
        })
            .then((res) => res.json())
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                    alert("Message Sent");
                } else if (resData.status === "fail") {
                    alert("Message failed to send");
                }
            })
            .then(() => {
                reset();
            });

    }

*/


    // const submitEmail = async (data, e) => {
    //     e.preventDefault();
    //     const { firstName, lastName, email, enquiry } = data;
    //     const subject = data.subject ? data.subject : '';
    //     const message = data.message ? data.message : '';
    //     const file = data.my_file ? data.my_file : '';
    //     emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, {
    //         first_name: firstName,
    //         last_name: lastName,
    //         email: email,
    //         enquiry: enquiry,
    //         subject: subject,
    //         message: message,
    //         file: file,
    //     }, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     document.getElementById("id-form").reset();
    //     reset();

    // };