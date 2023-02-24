import down from '../assets/icons/Down.svg'

export const Hero = () => {
    return (
        <section className="hero-section" id='hero-section'>
            <div className="hero-content">
                <div className="hero-text">
                    <h2>WEB DESIGNER AND FULL-STACK DEVELOPER</h2>
                    <h3>
                    I’m a UI/UX Designer and Full-Stack Developer. Designing creative website and application is my thing.
                    </h3>
                    {/* <button className="ghost-btn"><span>Contact Me</span></button> */}
                </div>
                <div className="scroll-animate">
                    <span>scroll down</span>
                    <img src={down} alt='down' />
                </div>
            </div>
        </section>
    )
}