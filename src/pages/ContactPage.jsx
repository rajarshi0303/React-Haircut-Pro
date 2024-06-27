import React from 'react'
import Header from '../components/common/Header'
import ContactForm from '../components/forms/ContactForm'
import Footer from '../layout/Footer'

export default function ContactPage() {
    return (
        <div className='bg-gray-950'>
            <Header url="'/public/images/carousel-1.jpg'" current="contact" next="services" />
            <ContactForm />
            <Footer />
        </div>
    )
}
