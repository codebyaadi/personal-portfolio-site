import { useEffect, useRef, useState } from 'react';
import avatar from '../assets/img/photo.png';

export const AboutMe = () => {

    const abtRef = useRef();
    const [AbtVisible, setAbtVisible] = useState();
    console.log('AbtVisible', AbtVisible);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setAbtVisible(entry.isIntersecting)
        })
        observer.observe(abtRef.current);
    }, []);
    
    return (
        <section className="about-me-section" id="about-me-section">
            <h2 >about me</h2>
            <div ref={abtRef} className="about-me-content">
                <p className={`text-hide ${AbtVisible ? "slide-in-left" : " "}`}>
                Hello! My name is Aditya and I enjoy designing and developing website.
                I always had interest in technology and internet. Creating an inovative product 
                is my speciality. I have got lots of creative ideas to help organization with thier business.
                Designing and developing is my forte and had experience in both for 2 years. 
                </p>
                <div className={`img-container ${AbtVisible ? "slide-in-left" : " "}`}>
                    <img src={avatar} alt='mypic' />
                </div>
            </div>
        </section>
    )
}