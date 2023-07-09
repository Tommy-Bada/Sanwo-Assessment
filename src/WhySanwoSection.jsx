import './WhySanwoSection.css'
import Box from "./Box"

function WhySanwoSection(){
    return(
        <div id='why-sanwo-section'>
            <h2>Why should you use <span>Sanwo</span>?</h2>
            <p>We reduce fraud between online buyers and sellers by providing a safe platform for them to transact without fear of being duped..</p>
            <div>
                <Box 
                    number="01"
                    header="Corporate Outlook"
                    text="Stand out from your competitors and get more leads with branding tailored towards your business needs."
                />
                <Box 
                    number="02"
                    header="Secure Payment"
                    text="We secure your money while you focus on satisfying your customers."
                />
                <Box 
                    number="03"
                    header="Business Management"
                    text="Create and track invoices, create sales reports and more with the Sanwo web app."
                />
                <Box 
                    number="04"
                    header="Everything on mobile"
                    text="Manage your business without stress from anywhere and any device in the world."
                />
        </div>
        </div>
    )
}

export default WhySanwoSection