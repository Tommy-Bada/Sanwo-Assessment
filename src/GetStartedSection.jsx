import './GetStartedSection.css'
import spiral from './assets/spiral.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function GetStartedSection(){
    return(
        <div id='get-started-section'>
            <div className='spiral'><img src={spiral} /></div>
            <h2>Ready to get Started on Sanwo?</h2>
            <div className='get-started-btns'>
                <div className='start-btn'>
                    <p>Start Express Transaction</p>
                    <div><FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#FF8A00",}} /></div>
                </div>
                <div className='gs-sign-up-btn'>
                    <p>Sign Up for Free</p>
                    <div><FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#FFFFFF",}} /></div>
                </div>
            </div>
        </div>
    )
}

export default GetStartedSection
