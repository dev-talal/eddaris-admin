import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styled from 'styled-components'
import { Box, HeadingStyled, SpanStyled, TextStyled } from '../../../../components/ui/Elements'
import { Ratings } from '../../../../components/tables/tablesComponents'
import { LazyImage } from '../../../../components/helpers/globalComponents'
import { userAvatarImage } from '../../../../components/layouts/AllImages'

const Reviews = () => {

  return (

    <ReviewContainerStyled>
        <HeadingStyled size='21px' className='mb-2 pb-1' weight={700}>
            Reviews
        </HeadingStyled>
        <Row>
            <Col md={6}>
                <Box className='review-card d-flex flex-column justify-content-center align-items-center'>
                    <Ratings size={56} value={1} count={1} color='#ddd' activeColor="var(--themeColorO)" />
                    <TextStyled color='var(--lg-color)' size='16px' weight={700} className='mb-0'>
                        4.9
                    </TextStyled>
                </Box>
            </Col>
            <Col md={6}>
                <Box className='review-card h-100 d-flex flex-column justify-content-between align-items-center'>
                    <HeadingStyled color='var(--themeColorO)' size='36px' weight={700} className='mb-0 d-flex align-items-center'>
                        77
                    </HeadingStyled>
                    <TextStyled color='var(--lg-color)' size='16px' weight={700} className='mb-0'>
                        4.9
                    </TextStyled>
                </Box>
            </Col>
            <Col xs={12}>
                {[...Array(5)].map(( item, key_count ) => (
                    <RatingFeedbackStyled className='d-flex align-items-start mt-4 pt-2' key={key_count}>
                        <Box className='me-3 pe-1'>
                            <LazyImage src={userAvatarImage} width='65px' height='65px' className='object-cover' />
                        </Box>
                        <Box>
                            <HeadingStyled size='16px' weight={700}>
                                Irfan Ali
                            </HeadingStyled>
                            <Box className='d-flex align-items-center'>
                                <Ratings size={20} value={5} count={5} color='#ddd' activeColor="var(--themeColorO)" />
                                <SpanStyled className='ms-1' size='14px' color='var(--themeColorO)'>5.0</SpanStyled>
                            </Box>
                            <TextStyled size='12px' weight={400} className='mb-0'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sit nibh amet nulla. 
                                Nisl, quam in amet nulla quis nisl. Tellus nec sed urna commodo lacus, dui morbi lectus. 
                                A tempor iaculis non turpis pellentesque turpis magna.
                            </TextStyled>
                        </Box>
                    </RatingFeedbackStyled>
                ))}
            </Col>
        </Row>
    </ReviewContainerStyled>

  )

}

const ReviewContainerStyled = styled.div`
    max-width: 700px;
    .review-card {
        border: 1px solid var(--lg-color);
        border-radius: 20px;
        padding: 25px 22px;
        p {
            margin-top: 15px;
        }
        .react-stars span {
            line-height: 0.8;
        }
        div {
            height: 44.8px;
        }
    }
    
`

const RatingFeedbackStyled = styled.div`
    img {
        border-radius: 10px;
    }
`

export default Reviews