import './HeroSection.css'
import heroSectionImage from './assets/hero-section.png'
function HeroSection() {
  
    return (
      <div id='hero-section'>
       <div id='hero-text'>
            <h1>Secure Your Transactions With Escrow That Works For Everyone.</h1>
            <p className='hero-text-1'>Sanwo’s easy-to-use escrow service allows you to gain your customers&apos; trust and transact online safely, whether you are a small business or a fortune 500.</p>
            <div>
                <div className='hero-sign-up-btn'>
                    <p>Sign Up for Free</p>
                    <div><img src='#' /></div>
                </div>
                <div className='hero-log-in-btn'>
                    <p>Login</p>
                    <div><img src='#' /></div>
                </div>
            </div>
            <p className='hero-text-2'>Trusted by over <span>150 e-commerce businesses</span> across Nigeria.</p>
       </div>
       <div id='hero-img'>
            <img src={heroSectionImage} className="hero-section-image" alt="Hero Image" />
       </div>
       </div>
    )
}
export default HeroSection