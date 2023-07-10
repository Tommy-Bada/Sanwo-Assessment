import './MoreFeaturesSection.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function MoreFeaturesSection(){
    return(
        <div id="more-features">
            <div>
                <p>MORE FEATURES</p>
                <h2>Do more with your business on Sanwo.</h2>
                <div className='more-features-btn'>
                    <p>Sign Up for Free</p>
                    <div><FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#ffffff",}} /></div>
                </div>
            </div>
            <div>
              <div className='more-features-card'>
                <div><img src="#" /></div>
                <div>
                    <h3>Not quite ready for escrow? Set up a virtual business account.</h3>
                    <p>Set up a virtual account for your business so you can send and receive money with ease! - Coming soon</p>
                </div>
              </div>
              <div  className='more-features-card'>
                <div><img src="#" /></div>
                <div>
                    <h3>Manage your business</h3>
                    <p>Build a world-class business, when you:• Manage your sales • Create invoices • Get transaction insights • and more with Sanwo</p>
                </div>
              </div>
            </div>
        </div>
    )
}
export default MoreFeaturesSection