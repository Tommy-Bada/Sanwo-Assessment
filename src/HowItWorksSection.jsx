import buyer from './assets/how-it-works-buyer.png'
import './HowItWorksSection.css'
import seller from './assets/how-it-works-seller.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { gsap } from "gsap";

function HowItWorksSection(){
    return(
        <div id='how-it-works-section'>
            <h2>How it Works</h2>
            <div>
                <div className='hiw-image'><img src={buyer} alt='image of a buyer' width="100%" /></div>
                <div className='how-it-works-buyer'>
                    <h3>Are you a buyer</h3>
                    <p>Use our Sanwo express service to create one-off transactions. No need to set up an account. Just input your email address to get started.</p>
                    <div className='how-it-works-buyer-btn'>
                        <p>Start an Express Transaction</p>
                        <div><FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#ffffff",}} /></div>
                    </div>
                </div>
            </div>
            <div className='seller-box'>
                <div className='hiw-image'><img src={seller} alt='image of a seller' width="100%" /></div>
                <div className='how-it-works-seller'>
                    <h3>As a Seller</h3>
                    <p>Manage multiple escrow transactions at once. Just input the transaction details Buyer pays  You deliver the product/service  Buyer confirms  Sanwo pays you.</p>
                    <div className='how-it-works-seller-btn'>
                        <p>Open An Account Now</p>
                        <div><FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#ffffff",}} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HowItWorksSection