import { SkillCard } from "../cards/SkillCard"
import design from '../assets/icons/brush-square.svg'
import frontend from '../assets/icons/frontend.svg'
import backend from '../assets/icons/backend.svg'

export const Skills = () => {

    return (
        <section className="skill-section">
            <h2>skills</h2>
            <div className="skills-grid">
                <SkillCard 
                    icon={frontend}
                    title="Front-end Developer"
                    skill1="HTML & CSS"
                    skill2="JavaScript"
                    skill3="ReactJS"
                    skill4="ASP.NET"
                />
                <SkillCard 
                    icon={backend}
                    title="Back-end Developer"
                    skill1="NodeJS"
                    skill2="MongoDB"
                    skill3="MySQL"
                />
                <SkillCard 
                    icon={design}
                    title="Designer"
                    skill1="Figma"
                    skill2="Pen & Paper"
                />
            </div>
            <div className="swipe-text">
                <p>swipe left</p>
            </div>
        </section>
    )
}
