import React from 'react'

import styled from 'styled-components'

import {listaTodos } from '../services/Portfolio'

const Card =  () => {
    return (
        <>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?cs=srgb&dl=pexels-josh-sorenson-1714208.jpg&fm=jpg" />
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?cs=srgb&dl=pexels-markus-spiske-1089440.jpg&fm=jpg" />
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                    </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?cs=srgb&dl=pexels-fauxels-3184460.jpg&fm=jpg" />
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?cs=srgb&dl=pexels-designecologist-1779487.jpg&fm=jpg" />
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
            <StyledCard>
                <Content>
                    <Image src="https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg?cs=srgb&dl=pexels-pixabay-267394.jpg&fm=jpg" />
                    <Info>
                        <h3>Title</h3>
                        <h4>Date</h4>
                        <p>Short description</p>
                    </Info>
                </Content>
            </StyledCard>
        </>
    )
}

const StyledCard = styled.div`
    background-color: green;
    min-height: 30vh;
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
    height: 100%;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
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
