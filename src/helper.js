/*
  // const divVisable = document.getElementsByClassName("nav-header")[0];
        // if (divVisable) { divVisable.style.display = 'none'; }





import { useRef, useEffect, useState } from 'react';
import pic_wind from '../../../assets/wind.jpg'
import './about.style.scss'
import 'animate.css';

const About = () => {

    const myRef = useRef();
    const [myElementIsVisable, setMyElementIsVisable] = useState();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setMyElementIsVisable(entry.isIntersecting);
        })
        observer.observe(myRef.current)
    }, [])

    return (
        <div className='about' ref={myRef}>
            <section id='aboutSection'>
                <div className='container'>
                    <div className={`${myElementIsVisable ? 'animate__animated animate__fadeInLeft' : ''}`}>
                        <h1>More Than 15 Years Of Experience</h1>
                        <p>IDD Solution works around the world finding and connecting
                            the best candidates with companies and organisations that:
                            design, build, operate, maintain or support the production
                            of goods and services for a variety of industry sectors
                            covering; oil, gas, chemicals, manufacturing, power, renewable energy.</p>

                    </div>
                    <img className={`${myElementIsVisable ? 'animate__animated animate__fadeInRight' : ''}`}
                        src={pic_wind} alt='' />
                </div>
            </section>
        </div>
    );
}

export default About;

*/