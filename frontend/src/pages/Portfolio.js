import React from 'react'

import styled from 'styled-components'
import {useLocation} from 'react-router-dom'

import ScrollTop from '../components/ScrollTop'

import Card from '../components/Card'
import PortfolioDetail from '../components/PortfolioDetail'
import {useApi} from '../hooks/useApi'

import {motion} from 'framer-motion'
import {pageAnimation} from '../animation'

const Portfolio = () => {
    const location = useLocation()
    const slug = location.pathname.split('/')[2]
    const {data} = useApi('/portfolio')

    return (
        <PortfolioList
            initial='hidden'
            animate='show'
            exit='exit'
            variants={pageAnimation}
        >
            {slug && <PortfolioDetail slug={slug} />}
            <Hide>
                <CardList>
                    {data?.data?.map(project => {
                        return( <Card key={project.slug} project={project}/> )
                    })}
                </CardList>
            </Hide>
            <ScrollTop />
        </PortfolioList>
    )
}

const Hide = styled.div`
    overflow: hidden;
`;

const PortfolioList = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
`;

const CardList = styled.div`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Portfolio
