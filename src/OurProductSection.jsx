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
                color = "#19B500"
                bgcolor = "rgba(81, 181, 109, 0.2)"
                />
                 <Box
                number = "02"
                header = "Sanwo Express"
                text = "Secure your money when you buy online. Protect yourself through our escrow service without signing up."
                color = "#917AEB"
                bgcolor = "rgba(145, 122, 235, 0.2)"
                />
                 <Box
                number = "03"
                header = "Sanwo Travels"
                text = "Sign Up as a travel agent or browse through a list of carefully curated travel packages backed by our escrow service."
                color = "#19B500"
                bgcolor = "rgba(81, 181, 109, 0.2)"
                />
            </div>
        </div>
    )
}
export default OurProductSection