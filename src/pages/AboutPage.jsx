import React from 'react'
import Header from '../components/common/Header'
import AboutContent from '../components/about/AboutContent'
import Barbers from '../components/about/Barbers'
import FeaturedServices from '../components/services/FeaturedServices'
import WorkingHours from '../components/about/WorkingHours'
import Footer from '../layout/Footer'

export default function AboutPage() {
    return (
        <div className='bg-slate-950'>
            <Header url="public/images/open.jpg" current="about" next="services"></Header>
            <AboutContent />
            <Barbers />
            <FeaturedServices />
            <WorkingHours />
            <Footer />
        </div>
    )
}
