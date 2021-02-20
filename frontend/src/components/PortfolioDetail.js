import React from 'react'

import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PortfolioDetail = () => {
    return (
        <Detail>
            <Stats>
                <div>
                    <Title>Title</Title>
                    <DescriptionShort>
                        <p>Description</p>
                    </DescriptionShort>
                </div>
                <Info>
                    <h3> Technologies</h3>

                    <Technologies>
                        <Technology>
                            <FontAwesomeIcon icon={["fab", "react"]} size='4x' /> React
                        </Technology>
                        <Technology>
                            <FontAwesomeIcon icon={["fab", "node-js"]} size='4x' /> Node
                        </Technology>
                        <Technology>
                            <FontAwesomeIcon icon={["fas", "database"]} size='4x' /> Mongo
                        </Technology>
                    </Technologies>
                </Info>
            </Stats>
            <Description>
                <p>Long description</p>
            </Description>
            <img src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </Detail>
    )
}

const Detail = styled.div`
    width: 80%;
    min-height: 80vh;
    background: white;
    position: absolute;
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
