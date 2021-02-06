import React, { useEffect } from 'react'
import Categories from '../components/Categories/Categories'
import Gallery from '../components/Gallery/Gallery'
import Hero from '../components/Hero/Hero'
import Process from '../components/Process/Process'
import Testimonial from '../components/Testimonial/Testimonial'

function Home() {
    useEffect(() => {
        // window.scrollTo(0, 0)

    }, [])
    return (
        <>
            <Hero />
            <Categories />
            <Testimonial/>
            <Gallery />
            <Process />
        </>
    )
}

export default Home
