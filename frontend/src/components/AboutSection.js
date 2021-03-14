import React from 'react'

import {useHistory} from 'react-router-dom'

import {About, Description, Image, Hide} from '../styles'
import profile from '../img/profile.jpeg'

import { motion } from 'framer-motion'
import {titleAnimation, fade, photoAnimation, scrollReveal} from '../animation'
import { useScroll } from '../hooks/useScroll'
import Wave from './Wave'

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
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>Reginaldo Santos</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}><span>Software Engineer</span></motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>
                    I'm a software engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include chatbots, the MERN (Mongo, Express, React and Node) stack and PHP. I am currently working on an awesome startup called Proposify.
                </motion.p>

                <button onClick={redirectHandler}>Contact Me</button>
            </Description>

            <Image>
                <motion.div variants={photoAnimation}>
                    <img alt='Reginaldo Santos' src={profile} />
                </motion.div>
            </Image>
            <Wave />
        </About>
    )
}


export default AboutSection
