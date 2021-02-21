import React from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useHistory} from 'react-router-dom'

import {useApi} from '../hooks/useApi'

const PortfolioDetail = ({slug}) => {
    const history = useHistory()
    const {data} = useApi(`/portfolio/${slug}`)

    const exitDetailHandler = (e) => {
        const element = e.target
        if (element.classList.contains('shaddow')) {
            document.body.style.overflow = 'auto'
            history.push('/portfolio')
        }
    }

    return (
        <CardShaddow className="shaddow" onClick={exitDetailHandler}>
            <Detail>
                <Stats>
                    <div>
                        <Title>{data?.data?.title}</Title>
                        <DescriptionShort>
                            <p>{data?.data?.description}</p>
                        </DescriptionShort>
                    </div>
                    <Info>
                        <h3>Technologies</h3>

                        <Technologies>
                            {
                                data?.data?.technologies.map(tech => {
                                    return (
                                        <Technology key={tech.icon}>
                                            <FontAwesomeIcon icon={[tech.iconType, tech.icon]} size='4x' /> {tech.label}
                                        </Technology>
                                    )
                                })
                            }
                        </Technologies>
                    </Info>
                </Stats>
                <Description>
                    <p>{data?.data?.longDescription}</p>
                </Description>
                <img src={data?.data?.image} />
            </Detail>
        </CardShaddow>
    )
}

const CardShaddow = styled.div`
    width: 100%;
    min-height: 90vh;
    overflow-y: scroll;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    &::-webkit-scrollbar {
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #ff7676;
    }
    &::-webkit-scrollbar-track {
        background: white;
    }

`;

const Detail = styled.div`
    width: 80%;
    min-height: 80vh;
    background: white;
    position: absolute;
    border-radius: 1rem;
    left: 10%;
    top: 15%;
    margin-bottom: 10%;
    z-index: 10;
    img {
        width: 100%;
        object-fit: cover;
        height: 50vh;
    }
`;

const Stats = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 5rem;
`;

const Title = styled.h2`
    color: #696969;
`;

const Description = styled.div`
    padding: 2rem 5rem;
    p{
        color: black;
    }
`;

const Info = styled.div`
    text-align: center;
    min-width: 300px;
    h3 {
        color: #696969;
    }
`;

const DescriptionShort = styled(Description)`
    padding: 0;
`;

const Technologies = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding-top: 1rem;
    svg {
        color: #416CD5;
    }
`;

const Technology = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #416CD5;
`;

export default PortfolioDetail
