import React, { lazy, Suspense }  from 'react'

import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const AboutSection = lazy(() => import('../components/AboutSection'));
const ServicesSection = lazy(() => import('../components/ServicesSection'));
const ScrollTop = lazy(() => import('../components/ScrollTop'));

const renderLoader = () => <p>Loading</p>;

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
