import React from 'react'
import { Col } from 'react-bootstrap';
import { Box, HeadingStyled, SpanStyled } from '../../components/ui/Elements';

const NotificationsDetail = () => {
  return (
    <>
        <Box className='container__md'>
            <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                Notification receivers
            </HeadingStyled>
            <Box>
                <SpanStyled className='d-block mt-1' size="12px">
                    abc@email.com
                </SpanStyled>
                <SpanStyled className='d-block mt-1' size="12px">
                    xyz@email.com
                </SpanStyled>
                <SpanStyled className='d-block mt-1' size="12px">
                    abc@email.com
                </SpanStyled>
                <SpanStyled className='d-block mt-1' size="12px">
                    xyz@email.com
                </SpanStyled>
                <HeadingStyled weight="600" size="14px" className='mt-4' color="var(--theme-grey-l)">
                    Notification body
                </HeadingStyled>
                <Col lg={8} className='mt-2 pb-4'>
                    <SpanStyled size='12px'>
                        Lorem ipsum dolor sit amet consectetur. Dignissim facilisi tellus neque augue a arcu ut quis facilisis. Ornare in et est id eget morbi dignissim. Blandit purus orci scelerisque sed egestas. Vel molestie purus ac risus mattis est.
                    </SpanStyled>
                </Col>
            </Box>
        </Box>
        <Box className='mt-4'>
            <ul className='list-unstyled m-0 p-0 d-flex flex-wrap'>
                <li className='me-5'>
                    <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                        Send on
                    </HeadingStyled>
                    <SpanStyled className='d-block mt-1 pt-1' size="12px">
                        21 Sept, 2022.
                    </SpanStyled>
                </li>
                <li>
                    <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                        Status
                    </HeadingStyled>
                    <SpanStyled className='d-block mt-1 pt-1' color="var(--themeColor)" size="12px">
                        Sending...
                    </SpanStyled>
                </li>
            </ul>
        </Box>
    </>
  )
}

export default NotificationsDetail;