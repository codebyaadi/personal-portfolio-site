import { useRef, useEffect, useState } from "react";

export const SkillCard = (props) => {

    const cardRef = useRef();
    const [CardVisible, setCardVisible] = useState();
    console.log('CardVisible', CardVisible);
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            setCardVisible(entry.isIntersecting)
        })
        observer.observe(cardRef.current)
    }, []);

    return (
        <div ref={cardRef} className={`skill-card ${CardVisible ? "slide-in-left" : " "}`}>
            <div className="skill-icon">
                <img src={props.icon} alt="" />
            </div>
            <div className="skill-info">
                <h3>{props.title}</h3>
                <h4>Lang & Tools</h4>
                <ul>
                    <li>{props.skill1}</li>
                    <li>{props.skill2}</li>
                    <li>{props.skill3}</li>
                    <li>{props.skill4}</li>
                    <li>{props.skill5}</li>
                </ul>
            </div>
        </div>
    )
}