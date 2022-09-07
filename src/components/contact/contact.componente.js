import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { BiBroadcast } from 'react-icons/bi';
//import emailjs from '@emailjs/browser';


import './contact.style.css';


const ContactUs = () => {


    const { t } = useTranslation();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });


    async function submitEmail(data) {

        await fetch("http://localhost:3001/send", {
            method: "POST",
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            },
            body: JSON.stringify({ data })
        })
            .then((res) => {
                console.log('res', res)
                res.json()
            })
            .then(async (res) => {
                const resData = await res;
                console.log(resData);
                if (resData.status === "success") {
                    alert("Message Sent");
                } else if (resData.status === "fail") {
                    alert("Message failed to send");
                }
            }).then(() => {
                reset();
            });
    }




    // const onSubmit = async (data, e) => {
    //     e.preventDefault();

    //     const response = await fetch("http://localhost:3001/send", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then((res) => {
    //             res.json()
    //             // console.log('res', res);
    //         })
    //         .then(async (res) => {
    //             const resData = await res;
    //             console.log(resData);
    //             if (resData.status === "success") {
    //                 alert("Message Sent");
    //             } else if (resData.status === "fail") {
    //                 alert("Message failed to send");
    //             }
    //         })
    //         .then(() => {
    //             reset();
    //         });




    // console.log(response);

    // e.preventDefault();
    // const { firstName, lastName, email, enquiry } = data;
    // const subject = data.subject ? data.subject : '';
    // const message = data.message ? data.message : '';
    // emailjs.send(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, {
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: email,
    //     enquiry: enquiry,
    //     subject: subject,
    //     message: message
    // }, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // document.getElementById("id-form").reset();
    // reset();

    //};


    return (
        <section id='contact-us' style={{ scrollMarginTop: '-30px' }}>

            <div className='contact-container'>

                <div className='contact-box'>

                    <div className='contact-box-office'>
                        <div className='contact-title'>{t('contactus')}</div>
                        <div className='contact-box-address'>
                            <p className='contact-box-title'>{t('head.office.title')}</p>
                            <p className='font-size-1-4'>{t('head.office.street')}</p>
                            <p className='font-size-1-4'>{t('head.office.zip')} {t('head.office.city')}</p>
                            <p className='font-size-1-4'>{t('head.office.country')}</p>
                            <br /><br />
                            <p className='font-size-1-2'>{t('tel.mobile')} +48 531 810 519</p>
                            <br />
                            <a className='font-size-1-2' href="mailto:sylwester@iddsolution.pl">sylwester@iddsolution.pl</a>
                        </div>
                    </div>
                    {/* <div className="contact-separator" /> */}
                    <BiBroadcast size={120} color={'#607D8B'} />

                    <div className='contact-box-form'>
                        <div className="contact-enquiry">{t('form.title')}</div>

                        <form id="id-form" onSubmit={handleSubmit(submitEmail)}>
                            <input style={{ marginLeft: 50 }} type="radio" id="cooperation" name="enquiry" value="cooperation" {...register("enquiry")} />
                            <label style={{ marginRight: 60 }}>&nbsp; {t('cooperation')}</label>
                            <input type="radio" id="enquiry" name="enquiry" value="career enquiry" {...register("enquiry")} />
                            <label >&nbsp; {t('career.enquiry')}</label>
                            <br /><br />
                            <label >{t('firstname')}</label>
                            <input type="text" placeholder="" {...register("firstName", {
                                required: "this is required",
                                minLength: { value: 2, message: "Min length is 2 characters" },
                                maxLength: { value: 30, message: "Max length is 30 characters" }
                            })} />
                            {errors.firstName && <p>{errors.firstName.message}</p>}

                            <label>{t('lastname')}</label>
                            <input type="text" {...register("lastName", {
                                required: "this is required",
                                minLength: { value: 2, message: "Min length is 2 characters" },
                                maxLength: { value: 30, message: "Max length is 30 characters" }
                            })} />
                            {errors.lastName && <p>{errors.lastName.message}</p>}

                            <label>{t('email')}</label>
                            <input type="email" {...register("email", {
                                required: "this is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: "Invalid email address"
                                }
                            })} />
                            {errors.email && <p>{errors.email.message}</p>}

                            <label>{t('subject')}</label>
                            <input type="text" {...register("subject")} />


                            <label>{t('message')}</label>
                            <textarea type="text" maxLength={1000} {...register("message")} />

                            <button type="submit">{t('send')}</button>
                        </form>


                    </div>
                </div>
                {/* <div className='contact-box-btm'></div> */}

            </div>

        </section>
    )
}

export default ContactUs;
