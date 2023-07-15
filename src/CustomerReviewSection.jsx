import './CustomerReviewSection.css'
import CustomerReview from "./CustomerReview"
import logo1 from './assets/01.png'
import logo2 from './assets/02.jpeg'

function CustomerReviewSection(){
    return(
        <div id="customer-review-section">
            <p>OUR SERVICE HOLDERS</p>
            <h2>Trusted by over 150 e-commerce businesses across Nigeria</h2>
            <div>
                <CustomerReview 
                 text = "I would recommend sanwo to everyone out there because it’s easier to use and help build trust between vendors and client. I’ve used it for numerous transactions and guess what ? It doesn’t require any serious teaching before one could access it. Love the e-receipt package and the fact that I can get my money once I’ve delivered the package."
                 name = "Busayo Adeseun"   
                 title = "CEO, Baker's Castle"
                 image = {logo1}
                />
                <CustomerReview
                text = "The process of using Sanwo was very easy and filled with great user experience, I will recommend Sanwo to vendors and buyers on my timeline. Great product!"
                name = "Femi Adesope"
                title = "Co-founder, Creative Digitals"
                image = {logo2}
                />
            </div>
        </div>
    )
}

export default CustomerReviewSection