import './OurProductSection.css'
import Box from "./Box"

function OurProductSection(){
    return(
        <div id='our-product-section'>
            <h2>Our Products</h2>
            <p>We reduce fraud between online buyers and sellers by providing a safe platform for them to transact without fear of being duped..</p>
            <div>
                <Box
                number = "01"
                header = "Sanwo Classic"
                text = "Sign up to protect your business with our escrow service and enjoy business management tool - all in one place."
                />
                 <Box
                number = "02"
                header = "Sanwo Express"
                text = "Secure your money when you buy online. Protect yourself through our escrow service without signing up."
                />
                 <Box
                number = "03"
                header = "Sanwo Travels"
                text = "Sign Up as a travel agent or browse through a list of carefully curated travel packages backed by our escrow service."
                />
            </div>
        </div>
    )
}
export default OurProductSection