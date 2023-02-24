import Behance from '../assets/icons/Behance.svg'
import Dribble from '../assets/icons/Dribbble.svg'
import Linkedin from '../assets/icons/Linkedin.svg'
import Instagram from '../assets/icons/Instagram.svg'
// import Twitter from '../assets/icons/Twitter.svg'
import Github from '../assets/icons/Github.svg'

export const Social = () => {
    return (
        <>
        <div className="social">
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
        <div className='mail'>
            <a href="mailto:uixaadi@gmail.com" target="_blank" rel="noreferrer">
                <span>uixaadi@gmail.com</span>
            </a>
        </div>
        </>
    )
}