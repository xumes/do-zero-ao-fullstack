import React from 'react'

import styled from 'styled-components'
import {useLocation} from 'react-router-dom'

import Card from '../components/Card'
import PortfolioDetail from '../components/PortfolioDetail'
import {useApi} from '../hooks/useApi'

const Portfolio = () => {
    const location = useLocation()
    const slug = location.pathname.split('/')[2]
    const {data} = useApi('/portfolio')

    return (
        <PortfolioList>

            {slug && <PortfolioDetail slug={slug} />}

            <Hide>
                <CardList>
                    {data?.data?.map(project => {
                        return( <Card key={project.slug} project={project}/> )
                    })}
                </CardList>
            </Hide>
        </PortfolioList>
    )
}

const Hide = styled.div`
    overflow: hidden;
`;

const PortfolioList = styled.div`
    overflow: hidden;
    padding: 5rem 10rem;
`;

const CardList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Portfolio
