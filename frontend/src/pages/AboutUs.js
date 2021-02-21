import React from 'react'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'

import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

import ScrollTop from '../components/ScrollTop'

const AboutUs = () => {
    return(
        <motion.div
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}
            >
            <AboutSection />
            <ServicesSection />
            <ScrollTop />
        </motion.div>
    )
}

export default AboutUs
