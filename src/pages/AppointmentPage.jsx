import React from 'react'
import AppointmentForm from '../components/forms/AppointmentForm'
import Header from '../components/common/Header'
import Footer from '../layout/Footer'

export default function AppointmentPage() {
    return (
        <div className='bg-gray-950'>
            <Header url="public/images/open.jpg" current="appointment" next="services" />
            <AppointmentForm />
            <Footer />
        </div>
    )
}
