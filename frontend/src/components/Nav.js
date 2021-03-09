import React from 'react'

//Styled Components
import styled from 'styled-components'

//Navigation
import {Link} from 'react-router-dom'

import Userfront from '@userfront/react'
import {LogoutButton} from './auth/Authentication'

Userfront.init('9ny8dvbd')

const Nav = () => {
    const menuOptions = {
        about: '<About Me />',
        portfolio: '<Portfolio />',
        contact: '<Contact Me />'
    }

    return (
        <StyledNav>
            <h1><Link to='/'>Reginaldo Santos</Link></h1>
            <ul>
                <li><Link to='/' >{menuOptions.about}</Link></li>
                <li><Link to='/portfolio'>{menuOptions.portfolio}</Link></li>
                <li><Link to='/contact'>{menuOptions.contact}</Link></li>
                {
                    !Userfront.accessToken() && (
                        <>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/signup'>Cadastro</Link></li>
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
    ul {
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 5rem;
    }
    a{
        color: white;
        text-decoration: none;
    }

`;

export default Nav
