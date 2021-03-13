import React from 'react'

//Styled Components
import styled from 'styled-components'

import { motion } from 'framer-motion'

//Navigation
import {Link, useLocation} from 'react-router-dom'

import Userfront from '@userfront/react'
import {LogoutButton} from './auth/Authentication'

import useWindowDimensions from '../hooks/useWindowDimensions'

Userfront.init('9ny8dvbd')

const Nav = () => {
    const { pathname } = useLocation()
    const { height, width } = useWindowDimensions();

    const menuOptions = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }

    return (
        <StyledNav>
            <h1><Link to='/'>Reginaldo Santos</Link></h1>
            <ul>
                <li>
                    <Link to='/' >{menuOptions.about}</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/' ? '50%' : '0%' }}
                    />
                </li>

                <li>
                    <Link to='/portfolio'>{menuOptions.portfolio}</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname.startsWith('/portfolio') ? '50%' : '0%' }}
                    />
                </li>

                <li>
                    <Link to='/contact'>{menuOptions.contact}</Link>
                    <Line
                        transition={{ duration: 0.75 }}
                        initial={{ width: '0%' }}
                        animate={{ width: pathname === '/contact' ? '50%' : '0%' }}
                    />
                </li>

                {
                    width > 600 && !Userfront.accessToken() && (
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                                <Line
                                    transition={{ duration: 0.75 }}
                                    initial={{ width: '0%' }}
                                    animate={{ width: pathname === '/login' ? '50%' : '0%' }}
                                />
                            </li>
                            <li>
                                <Link to='/signup'>Cadastro</Link>
                                <Line
                                    transition={{ duration: 0.75 }}
                                    initial={{ width: '0%' }}
                                    animate={{ width: pathname === '/signup' ? '50%' : '0%' }}
                                />
                            </li>
                        </>
                    )
                }
                {Userfront.accessToken() && <li><LogoutButton /></li>}
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    a {
        color: white;
        text-decoration: none;
    }
    ul {
        display: flex;
        list-style: none;
    }
    #logo {
        font-size: 2rem;
        font-family: "Indie Flower", cursive;
    }
    li {
        padding-left: 10rem;
        position: relative;
        font-family: "Jura", sans-serif;
        a{
        font-size: 1.2rem;
        }
    }
    @media (max-width: 1300px) {
        flex-direction: column;
        padding: 2rem 1rem;
        #logo {
        display: inline-block;
        margin: 1rem;
        }
        ul {
        padding: 2rem;
        justify-content: space-around;
        width: 100%;
        li {
            padding: 0;
        }
        }
    }
`;

const Line = styled(motion.div)`
    height: 0.3rem;
    background: #416CD5;
    width: 0%;
    position: absolute;
    bottom: -80%;
    left: 55%;
    @media (max-width: 1300px) {
        left: 0%;
    }
`

export default Nav
