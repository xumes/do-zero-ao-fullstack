import React from 'react'

import styled from 'styled-components'

import Card from '../components/Card'
import {useApi} from '../hooks/useApi'

const Portfolio = () => {
    const {data} = useApi('/portfolio')

    return (
        <PortfolioList>
            <CardList>
                {data?.data?.data?.map(project => {
                    return( <Card project={project}/> )
                })}
            </CardList>
        </PortfolioList>
    )
}

const PortfolioList = styled.div`
    min-height: 90vh;
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
