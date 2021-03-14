import React from 'react'

import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

import AboutSection from '../components/AboutSection'
import ServicesSection  from '../components/ServicesSection'
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
