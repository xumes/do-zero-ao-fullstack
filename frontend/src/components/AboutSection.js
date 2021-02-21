import React from 'react'

import {useHistory} from 'react-router-dom'

import {About, Description, Image} from '../styles'

import { motion } from 'framer-motion'
import {titleAnimation, fade, photoAnimation, scrollReveal} from '../animation'
import { useScroll } from '../hooks/useScroll'

const AboutSection = () => {
    const [element, controls] = useScroll()
    const history = useHistory()

    const redirectHandler = () => {
        history.push('/contact')
    }

    return (
        <About
            variants={scrollReveal}
            animate={controls}
            initial='hidden'
            ref={element}
        >
            <Description>
                <motion.h2 variants={titleAnimation}>Reginaldo Santos</motion.h2>
                <motion.h2 variants={titleAnimation}>Software Engineer</motion.h2>

                <motion.p variants={fade}>
                    I'm a software engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include chatbots, the MERN (Mongo, Express, React and Node) stack and PHP. I am currently working on an awesome startup called Proposify.
                </motion.p>

                <button onClick={redirectHandler}>Contact Me</button>
            </Description>

            <Image>
                <motion.div variants={photoAnimation}>
                    <img src="data:image/jpeg;base64,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" />
                </motion.div>
            </Image>
        </About>
    )
}


export default AboutSection
