import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Header from './Header.jsx'
import HamburgerMenu from './HamburgerMenu.jsx'
import HeroSection from './HeroSection.jsx'
import HowItWorksSection from './HowItWorksSection.jsx'
import MoreFeaturesSection from './MoreFeaturesSection.jsx'
import OurProductSection from './OurProductSection.jsx'
import CustomerReviewSection from './CustomerReviewSection.jsx'
import WhySanwoSection from './WhySanwoSection.jsx'
import GetStartedSection from './GetStartedSection.jsx'
import Footer from './Footer.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <HamburgerMenu />
    <HeroSection />
    <HowItWorksSection />
    <MoreFeaturesSection />
    <OurProductSection />
    <CustomerReviewSection />
    <WhySanwoSection />
    <GetStartedSection/>
    <Footer />
    {/* <App /> */}
  </React.StrictMode>,
)
