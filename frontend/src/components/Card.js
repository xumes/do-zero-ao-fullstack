import React from 'react'

import styled from 'styled-components'

const Card =  ({project}) => {

    return (
            <StyledCard>
                <Content>
                    <Image src={project.image} />
                    <Info>
                        <h3>{project.title}</h3>
                        <h4>{project.createdAt}</h4>
                        <p>{project.description}</p>
                    </Info>
                </Content>
            </StyledCard>
    )
}

const StyledCard = styled.div`
    background-color: green;
    min-height: 30vh;
    box-shadow: blue;
    border-color: #416CD5;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 70vh;
`;

const Image = styled.img`
    width: 100%;
    height: 70%;
`;

const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
        padding-top: 2rem;
    }
`;


export default Card
