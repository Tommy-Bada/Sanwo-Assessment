import './GetStartedSection.css'
import spiral from './assets/spiral.png'

function GetStartedSection(){
    return(
        <div id='get-started-section'>
            <div className='spiral'><img src={spiral} /></div>
            <h2>Ready to get Started on Sanwo?</h2>
            <div className='get-started-btns'>
                <div className='start-btn'>
                    <p>Start Express Transaction</p>
                    <div><img src='#' /></div>
                </div>
                <div className='gs-sign-up-btn'>
                    <p>Sign Up for Free</p>
                    <div><img src='#' /></div>
                </div>
            </div>
        </div>
    )
}

export default GetStartedSection
