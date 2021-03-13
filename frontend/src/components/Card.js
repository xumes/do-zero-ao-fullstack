import React from 'react'
import moment from 'moment'

import styled from 'styled-components'

import { motion } from 'framer-motion'
import { popup } from '../animation'

import {Link} from 'react-router-dom'

const Card =  ({project}) => {

    const loadDetailHandler = () => {
        document.body.style.overflow = 'hidden'
        // dispatch(loadDetail(id));
      }

    return (
            <StyledCard
                variants={popup}
                initial='hidden'
                animate='show'
                layoutId={project.slug}
                onClick={loadDetailHandler}
            >
                <Link to={`/portfolio/${project.slug}`}>
                    <Content>
                        <InfoImage>
                            <motion.img
                            layoutId={`image ${project.slug}`}
                            src={project.image}
                            alt={project.title}
                            />
                        </InfoImage>

                        <Info>
                        <Title layoutId={`title ${project.slug}`}>{project.title}</Title>
                            <h4>{moment(project.createdAt).format('MMM YYYY')}</h4>
                            <p layoutId={`descr ${project.slug}`}>{project.description}</p>
                        </Info>
                    </Content>
                </Link>
            </StyledCard>
    )
}

const StyledCard = styled.div`
    min-height: 30vh;
    box-shadow: 0px 5px 10px rgba(240, 255, 0, 0.3);
    border-color: #416CD5;
    border-style: outset;
    text-align: center;
    border-radius: 1rem;
    cursor: pointer;
    overflow: hidden;
    img {
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
`;

const InfoImage = styled(motion.div)`
    width: 100%;
    height: 100%;
`

const Info = styled.div`
    text-align: left;
    padding-left: 1rem;
`;

const Title = styled(motion.h3)`
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
`

export default Card
