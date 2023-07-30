import './Footer.css'
import sanwoLogo from './assets/sanwo-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF} from '@fortawesome/free-brands-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'
import { faInstagram} from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
function Footer(){
    return(
        <footer>
            <div>
                <div id='newsletter'>
                    <h3>Read Business insights and tips from Olu</h3>
                    <form>
                        <input type="text" name="first-name" placeholder="First name" /><br/>
                        <input type="email" name="mail" placeholder="Email address" className='email' />
                        <button type="submit" className='subscribe'><FontAwesomeIcon icon={faArrowRight} size="2xl" style={{color: "#ffffff",}} /></button>
                    </form>
                    <p>Olu writes the best business growth articles, subscribe to get these articles in your inbox.</p>
                </div>
                <div id='footer-box'>
                    <div id='footer-links'>
                        <div>
                            <h3>Company</h3>
                                <ul>
                                    <li>About Us</li>
                                    <li>Privacy Policy</li>
                                    <li>Terms & Conditions</li>
                                </ul>
                        </div>
                        <div>
                            <h3>Help</h3>
                            <ul>
                                <li>Contact Us</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                    </div>
                    <div id='footer-socials'>
                        <div className='footer-logo'><img src={sanwoLogo} /></div>
                        <div id='socials'>
                            <div className='social-icon'><FontAwesomeIcon icon={faFacebookF} size="xl" style={{color: "#040404",}} /></div>
                            <div className='social-icon'><FontAwesomeIcon icon={faTwitter} size="xl" style={{color: "#040404",}} /></div>
                            <div className='social-icon'><FontAwesomeIcon icon={faInstagram} size="xl" style={{color: "#040404",}} /></div>
                            <div className='social-icon'><FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{color: "#040404",}} /></div>
                        </div>
                    </div>
                </div>
            </div>
            <p>Copyright 2022. Sanwo Technologies Limited</p>
        </footer>
    )
}

export default Footer