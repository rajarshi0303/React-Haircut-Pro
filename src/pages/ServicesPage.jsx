import React from 'react'
import Header from '../components/common/Header'
import Services from '../components/services/Services'
import FeaturedServices from '../components/services/FeaturedServices'
import Pricing from '../components/services/Pricing'
import Testimonial from '../components/common/Testimonial'
import Footer from '../layout/Footer'

export default function ServicesPage() {
    return (
        <div className='bg-slate-950'>
            <Header url="public/images/price.jpg" current="services" next="contact"></Header>
            <Services />
            <FeaturedServices />
            <Pricing />
            <Testimonial />
            <Footer />
        </div>
    )
}
