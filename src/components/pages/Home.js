import React from 'react'
import Categories from '../Categories/Categories'
import Footer from '../Footer/Footer'
import Gallery from '../Gallery/Gallery'
import Hero from '../Hero/Hero'

function Home() {
    return (
        <>
            <Hero />
            <Categories />
            <Gallery/>
            <Footer/>
        </>
        )
}

export default Home
