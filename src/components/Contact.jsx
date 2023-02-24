import Behance from '../assets/icons/Behance.svg'
import Dribble from '../assets/icons/Dribbble.svg'
import Linkedin from '../assets/icons/Linkedin.svg'
import Instagram from '../assets/icons/Instagram.svg'
import Twitter from '../assets/icons/Twitter.svg'
import Github from '../assets/icons/Github.svg'

export const Contact = () => {
    return (
        <><section className="contact-section" id='contact'>
            <div className="contact-content">
                <div className="contact-text">
                    <h2>GET IN TOUCH WITH ME</h2>
                    <h3>
                        I’m always looking for new opportunity and working on creative ideas. Feel free to ask for any query.
                    </h3>
                    <a href="mailto:uixaadi@gmail.com"><button className="ghost-btn"><span>Say, Hello!</span></button></a>
                </div>
                <div className="social-mobile-view">
                    <a href="https://www.instagram.com/uix.aadi/" target="_blank" rel="noreferrer">
                        <img src={Instagram} alt="instagram" />
                    </a>
                    <a href="https://dribbble.com/uixaadi" target="_blank" rel="noreferrer">
                        <img src={Dribble} alt='dribble' />
                    </a>
                    <a href="https://www.linkedin.com/in/uixaadi/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt='linkedin' />
                    </a>
                    <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
                        <img src={Behance} alt='behance' />
                    </a>
                    <a href="https://github.com/uixaadi" target="_blank" rel="noreferrer">
                        <img src={Github} alt='github' />
                    </a>
                </div>
            </div>
        </section>
        <footer className="credit">
            <span>design and code by aaditya</span>
        </footer>
        </>
    )
}