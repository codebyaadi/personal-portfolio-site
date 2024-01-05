import { ProjectCard } from "../cards/ProjectCards"
import project from '../assets/img/project-one.png'

export const Projects = () => {
    return (
        <section className="project-section ">
            <h2>Projects</h2>
            <div className="project-details">
                <ProjectCard
                    img={project}
                    title="sanmusic app - Shopify Project"
                    description="UI Enhance music application, which use RapidAPI
                    for music playing and finding songs."
                    techone="React JS"
                    techtwo="VS Code"
                    techthree="Rapid AI"
                    url="https://sanmusic.netlify.com"
                />
                <div className="more-projects">
                    <a href="https://github.com/uixaadi?tab=repositories">
                        <button className="ghost-btn">show me more</button>
                    </a>
                </div>
                {/* <ProjectCard
                    img={projectone}
                    title="discord clone"
                />
                <ProjectCard
                    img={projectone}
                    title="reals-estate website"
                /> */}
            </div>
        </section>
    )
}
