import buyer from './assets/how-it-works-buyer.png'
import './HowItWorksSection.css'
import seller from './assets/how-it-works-seller.png'

function HowItWorksSection(){
    return(
        <div id='how-it-works-section'>
            <h2>How it Works</h2>
            <div>
                <div><img src={buyer} alt='image of a buyer' className='how-it-works-buyer'/></div>
                <div>
                    <h3>Are you a buyer</h3>
                    <p>Use our Sanwo express service to create one-off transactions. No need to set up an account. Just input your email address to get started.</p>
                    <div>
                        <p>Start an Express Transaction</p>
                        <div><img src='#' /></div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>As a Seller</h3>
                    <p>Manage multiple escrow transactions at once. Just input the transaction details Buyer pays  You deliver the product/service  Buyer confirms  Sanwo pays you.</p>
                    <div>
                        <p>Open An Account Now</p>
                        <div><img src='#' /></div>
                    </div>
                </div>
                <div><img src={seller} alt='image of a seller' className='how-it-works-seller'/></div>
            </div>
        </div>
    )
}
export default HowItWorksSection