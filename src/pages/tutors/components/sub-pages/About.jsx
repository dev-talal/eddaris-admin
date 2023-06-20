import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { MortarboardIcon } from '../../../../components/layouts/AllImages'
import { Box, HeadingStyled, SpanStyled, TextStyled } from '../../../../components/ui/Elements'

const About = () => {
    const { tutor } = useSelector((state) => state.tutor);
    const { data } = tutor;
    const ListContent = ({ h, t }) => {
        return (
          <li>
            <SpanStyled>{h}</SpanStyled>
            <SpanStyled var="var(--drColor)">{t}</SpanStyled>
          </li>
        );
      };

  return (

    <ContentContainerStyled>
        <HeadingStyled size='24px' weight={700}>
            About
        </HeadingStyled>
        <TextStyled size='12px' className='mb-4'>
           { data?.about_you }
        </TextStyled>
        <Box>
            <HeadingStyled size='24px' weight={700}>
                Education
            </HeadingStyled>
            {data?.education && data.education.map(( item, key ) => (
                <Box className='d-flex align-items-center' key={key}>
                    <IconBox className='d-flex align-items-center justify-content-center me-4'>
                        <MortarboardIcon />
                    </IconBox>
                    <Box>
                        <HeadingStyled size='16px' className='text-capitalize' weight={700}>
                            { item?.name_of_institution }
                        </HeadingStyled>
                        <TextStyled size='12px' className='mt-1 mb-3'>
                            { item?.degree_title }
                        </TextStyled>
                        <ul className='mb-0 list-unstyled edu-list d-flex align-items-center flex-wrap'>
                            <li>  { item?.city + ' ' + item?.country  }</li>
                            <li>{ item?.completion_year }</li>
                        </ul>
                    </Box>
                </Box>
            ))}
            <Box>
                <HeadingStyled size='24px' weight={700} className='mt-4 pt-2 mb-4'>
                    Experience
                </HeadingStyled>
                <ul className='list-unstyled mb-0 edu-list'>
                    {data?.experience && data.experience.map(( item, key ) => (
                        <li className='exp-list mb-3 pb-1' key={ key }>
                            <HeadingStyled size='16px' weight={700} className='mt-4'>
                                { item?.teaching_place }
                            </HeadingStyled>
                            <TextStyled size='12px' color='var(--lg-color)' className='mt-1 mb-2'>
                                { !item?.currently_working_here ? `${item?.from_year} - ${item?.to_year}` : item?.from_year + ' Currently workinge here' }
                            </TextStyled>
                            <TextStyled size='12px' className='mt-1 mb-3'>
                              { item?.short_description }
                            </TextStyled>
                        </li>
                    ))}
                </ul>
            </Box>
            <Box>
                <HeadingStyled size='24px' weight={700} className='mt-4 mb-4'>
                    Availability
                </HeadingStyled>

                <DetailList className="list-unstyled">
                    {data?.schedule?.availability_time && data?.schedule?.availability_time.map(( item, key ) => (
                        <ListContent key={ key } h={ item.name } t="3 pm - 7 pm" />
                    ))}
                </DetailList>
            </Box>
        </Box>
    </ContentContainerStyled>

  )
}

const ContentContainerStyled = styled.div`
    max-width: 797px;
    .edu-list {
        li {
            color: var(--lg-color);
            font-size: 13px;
            padding-left: 15px;
            position: relative;
            margin-right: 30px;
            &.exp-list {
                &:before {
                    top: 7px;
                }
            }
            &:not(.exp-list) {
                &:before {
                    top: 5px;
                }
            }
            &:before {
                content: '';
                position: absolute;
                left: 0;
                width: 8px;
                height: 8px;
                background-color: var(--lg-color);
                border-radius: 50%;
            }
        }
    }
`

const IconBox = styled.div`
    
    width: 91px;
    height: 91px;
    border-radius: 10px;
    background-color:rgb(200 200 200 / 20%);
    margin-top: 10px;

`
const DetailList = styled.ul`
  max-width: fit-content;
  li {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    span {
        
        &:first-child {
            width: 162px;
            display: block;
            margin-right: 50px;
            font-weight: 400;
            font-size: 12px;
        }
        
        &:last-child {
            font-size: 12px;
        }
    }
  }
`

export default About