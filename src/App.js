import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import FeatureSection from './Components/FeatureSection/FeatureSection'
import CardSection from './Components/CardSecrtion/CardSection'
import FooterSection from './Components/FooterSection/FooterSection'

const App = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <CardSection />
            <FooterSection />

        </div>
    )
}
export default App