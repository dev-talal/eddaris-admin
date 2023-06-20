import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { LazyImage } from '../../../components/helpers/globalComponents'
import { NoAvatar, userAvatarImage } from '../../../components/layouts/AllImages'
import { Ratings } from '../../../components/tables/tablesComponents'
import { Box, HeadingStyled, SpanStyled, TextStyled } from '../../../components/ui/Elements'

const TutorProfileInfo = () => {
    const { tutor } = useSelector((state) => state.tutor);
    const { data } = tutor;
    return (
        <UserInformationContainer className='pe-lg-2'>

            <Box className='user-profile-info'>
                <LazyImage src={ data?.user_id?.profile_pic || NoAvatar} alt='username' />
                <Box className='text-center'>
                    <HeadingStyled weight='700' size='24px' className='mt-3 mb-1 text-capitalize'>
                        { data?.user_id?.first_name+' '+ data?.user_id?.last_name }
                    </HeadingStyled>
                    <SpanStyled className='d-block mt-0' size='12px' weight='700'>
                        $8.5/hour
                    </SpanStyled>
                    <TextStyled className='d-block mt-1 mb-0' size='12px' weight='400' color='var(--lg-color)'>
                        Riyadh, Saudi Arabia.
                    </TextStyled>
                    <Box className='text-center w-fit-content mx-auto d-flex align-items-center'>
                        <Ratings size={33} value= {data?.no_of_review} count={5} color='#ddd' activeColor="var(--themeColorO)" />
                        <SpanStyled size='16px' className='pt-1 ms-2' color='var(--lg-color)'>
                            { data?.rating }
                        </SpanStyled>
                    </Box>
                </Box>
            </Box>
            <Box>
                <TextStyled size='12px' className='mt-2 mb-3 py-1'>{ data?.intro }</TextStyled> 
                <Box className='d-flex justify-content-between'>
                    <HeadingStyled className='mb-0' size='12px' weight='700'>
                        Response rate
                        <SpanStyled className='d-block pt-1' color='var(--lg-color)' >(excluding weekends)</SpanStyled>
                    </HeadingStyled>
                    <HeadingStyled className='mb-0' size='12px' weight='700'>
                        2 hours
                    </HeadingStyled>
                </Box>
                <Box className='mt-4'>
                    <SpanStyled className='d-block' size='12px' weight='600' color='var(--lg-color)' >Lesson language(s)</SpanStyled>
                    <ul className='d-flex align-items-center list-unstyled'>
                        {data?.teach_language && data?.teach_language.map(( item, key ) => (
                            <li key={key}>
                                <TagsLabelStyled>{ item }</TagsLabelStyled>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className='mt-4'>
                    <SpanStyled className='d-block' size='12px' weight='600' color='var(--lg-color)' >Service venue</SpanStyled>
                    <ul className='d-flex align-items-center list-unstyled flex-wrap'>
                        {data?.teach_type && data?.teach_type.map(( item, key ) => (
                            <li key={key}>
                                <TagsLabelStyled>{ item }</TagsLabelStyled>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className='mt-4'>
                    <SpanStyled className='d-block' size='12px' weight='600' color='var(--lg-color)' >Field</SpanStyled>
                    <ul className='d-flex align-items-center list-unstyled'>
                        {data?.main_field && data?.main_field.map(( item, key ) => (
                            <li key={key}>
                                <TagsLabelStyled>{ item }</TagsLabelStyled>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className='mt-4'>
                    <SpanStyled className='d-block' size='12px' weight='600' color='var(--lg-color)' >Teaches</SpanStyled>
                    <ul className='d-flex align-items-center list-unstyled flex-wrap'>
                        {data?.you_teach && data?.you_teach.map(( item, key ) => (
                            <li key={key}>
                                <TagsLabelStyled>{ item }</TagsLabelStyled>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className='mt-4'>
                    <SpanStyled className='d-block' size='12px' weight='600' color='var(--lg-color)' >Levels</SpanStyled>
                    <ul className='d-flex align-items-center list-unstyled flex-wrap'>
                        {data?.level_you_teach && data?.level_you_teach.map(( item, key ) => (
                            <li key={key}>
                                <TagsLabelStyled>{ item }</TagsLabelStyled>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className='mt-4'>
                    <SpanStyled className='d-block' size='12px' weight='600' color='var(--lg-color)' >Students age teachable</SpanStyled>
                    <ul className='d-flex align-items-center list-unstyled flex-wrap'>
                        {data?.student_age_you_teach && data?.student_age_you_teach.map(( { from_age, to_age }, key ) => (
                            <li key={key}>
                              <TagsLabelStyled>{ from_age } - { to_age }</TagsLabelStyled>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className='mt-4'>
                    <SpanStyled className='d-block' size='12px' weight='600' color='var(--lg-color)' >Class type</SpanStyled>
                    <ul className='d-flex align-items-center list-unstyled flex-wrap'>
                        {data?.class_type && data?.class_type.map(( item, key ) => (
                            <li key={key}>
                                <TagsLabelStyled>{ item }</TagsLabelStyled>
                            </li>
                        ))}
                    </ul>
                </Box>
                <Box className='mt-4'>
                    <SpanStyled className='d-block' size='12px' weight='600' color='var(--lg-color)' >ID</SpanStyled>
                    <ul className='d-flex align-items-center list-unstyled flex-wrap'>
                        <li>
                            <TagsLabelStyled>1 to 1</TagsLabelStyled>
                        </li>
                        <li>
                            <TagsLabelStyled className='text-capitalize'>{ data?.id_iqama_verification_approved }</TagsLabelStyled>
                        </li>
                    </ul>
                </Box>
            </Box>

        </UserInformationContainer>

    )

}

const UserInformationContainer = styled.div`

    .user-profile-info {

        &,.lazy-load-image-background {
            width: 203px;
        }

        img {
            width:100%;
            height: 168px;
            border-radius: 20px;
            object-fit: cover;
            object-position: top;
        }

    }

`

const TagsLabelStyled = styled.div`

    background: rgba(200, 200, 200, 0.2);
    border-radius: 10px;
    padding: 8px 20px;
    margin-top: 10px;
    margin-right: 10px;
    font-size: 12px;
`

export default TutorProfileInfo