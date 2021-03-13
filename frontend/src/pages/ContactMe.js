import React from 'react'

import styled from 'styled-components'

import SocialNetworkSection from '../components/SocialNetworkSection'
import ContactForm from '../components/ContactForm'

import {motion} from 'framer-motion'
import {pageAnimation, titleAnimation, sliderContainer, slider} from '../animation'


const ContactMe = () => {
    return (
        <ContactStyled
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}
        >
        <motion.div variants={sliderContainer}>
            <Frame1 variants={slider} />
            <Frame2 variants={slider} />
            <Frame3 variants={slider} />
            <Frame4 variants={slider} />
        </motion.div>

            <Title>
                <Hide>
                    <motion.h2 variants={titleAnimation}>Get in <span>touch</span>.</motion.h2>
                </Hide>
            </Title>
            <Areas>
                <FormArea>
                    <ContactForm />
                </FormArea>

                <SocialNetworkSection />
            </Areas>
        </ContactStyled>
    )
}

const ContactStyled = styled(motion.div)`
    padding: 1rem 10rem;
    color: #353535;
    min-height: 90vh;
`;

const Title = styled.div`
    margin-bottom: 4rem;
    h2 {
        color: white;
    }
`;

const Hide = styled.div`
  overflow: hidden;
`

const Areas = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const FormArea = styled(motion.div)`
  min-width: 80vh;
`

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default ContactMe
