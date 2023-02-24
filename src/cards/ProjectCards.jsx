export const ProjectCard = (props) => {
    return(
        <div className="project-container">
            <div className="project">
                <img src={props.img} alt="" />
                <div className="project-text">
                    <a href={props.url} rel="noreferrer" target="_blank"><h3>{props.title}</h3></a>
                    <p>{props.description}</p>
                    <div className="tech-text">
                        <p>{props.techone}</p>
                        <p>{props.techtwo}</p>
                        <p>{props.techthree}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}