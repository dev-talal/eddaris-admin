import React from 'react'
import { Form } from 'react-bootstrap'
import styled from 'styled-components'
import { Box, HeadingStyled, InputStyled, SpanStyled } from '../../components/ui/Elements'

const Settings = () => {

  return (

    <MainContainer>
        <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
            Website currency
        </HeadingStyled>
        <Box className='d-flex align-items-center mt-3 mb-4'>
            <SpanStyled size="12px" weight="500" className='me-2'>Choose currency</SpanStyled>
            <select>
                <option value="usd">$ - USD</option>
            </select>
        </Box>
        <Box className='mb-3 pb-2'>
            <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                Website currency
            </HeadingStyled>
            <HeadingStyled weight="600" size="12px" className='mt-1' color="var(--drColor)">
                Monthly
            </HeadingStyled>
            <Box className='d-flex align-items-center mt-3 mb-3'>
                <SpanStyled size="12px" weight="500" className='me-2'>Monthly subscriptions are</SpanStyled>
                <select>
                    <option value="de-active">De-active</option>
                </select>
            </Box>
            <Box className='mb-2 pb-1'>
                <InputStyled placeholder='$' className='w-100' />
            </Box>
            <Box className='d-flex align-items-center'>
                <SpanStyled size="12px" weight="500" className='me-2 flex-shrink-0 d-flex align-items-center lh-2'>
                    <Box className="pt-0 form-switch">
                        <Form as='input' type="checkbox" className="form-check-input" />
                    </Box> 
                    Show above price as a discounted price. Original price
                </SpanStyled>
                <InputStyled placeholder='$' className='w-100' />
            </Box>
        </Box>
        <Box>
            <HeadingStyled weight="600" size="12px" className='mt-1' color="var(--drColor)">
                Yearly
            </HeadingStyled>
            <Box className='d-flex align-items-center mt-3 mb-3'>
                <SpanStyled size="12px" weight="500" className='me-2'>Yearly subscriptions are</SpanStyled>
                <select>
                    <option value="de-active">De-active</option>
                </select>
            </Box>
            <Box className='mb-2 pb-1'>
                <InputStyled placeholder='$' className='w-100' />
            </Box>
            <Box className='d-flex align-items-center'>
                <SpanStyled size="12px" weight="500" className='me-2 flex-shrink-0 d-flex align-items-center lh-2'>
                    <Box className="pt-0 form-switch">
                        <Form as='input' type="checkbox" className="form-check-input" />
                    </Box> 
                    Show above price as a discounted price. Original price
                </SpanStyled>
                <InputStyled placeholder='$' className='w-100' />
            </Box>
        </Box>
        <Box className='mt-4'>
            <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                Commission percentage
            </HeadingStyled>
            <Box className='d-flex align-items-center mt-3 mb-3'>
                <SpanStyled size="12px" weight="500" className='me-2'>Commissions are</SpanStyled>
                <select>
                    <option value="active">Active</option>
                </select>
            </Box>
            <Box className='mb-2 pb-1'>
                <InputStyled placeholder='20% of sales' className='w-100' />
            </Box>
            <Box className='d-flex align-items-center'>
                <SpanStyled size="12px" weight="500" className='me-2 flex-shrink-0 d-flex align-items-center lh-2'>
                    <Box className="pt-0 form-switch">
                        <Form as='input' type="checkbox" className="form-check-input" />
                    </Box> 
                    Show above percentage as a discounted price. Original commission
                </SpanStyled>
                <InputStyled placeholder='--%' className='w-100' />
            </Box>
        </Box>
        <Box className='mt-4'>
            <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                Featured listing price
            </HeadingStyled>
            <Box className='d-flex align-items-center mt-3 mb-3'>
                <SpanStyled size="12px" weight="500" className='me-2'>Featured listings are</SpanStyled>
                <select>
                    <option value="active">Active</option>
                </select>
            </Box>
            <Box className='mb-2 pb-1'>
                <InputStyled placeholder='$100' className='w-100' />
            </Box>
        </Box>
        <Box className='mt-4'>
            <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                Service charges
            </HeadingStyled>
            <Box className='d-flex align-items-center mt-3 mb-3'>
                <SpanStyled size="12px" weight="500" className='me-2'>Service charges are</SpanStyled>
                <select>
                    <option value="active">Active</option>
                </select>
            </Box>
            <Box className='mb-2 pb-1'>
                <InputStyled placeholder='$ 50' className='w-100' />
            </Box>
            <Box className='d-flex align-items-center'>
                <SpanStyled size="12px" weight="500" className='me-2 flex-shrink-0 d-flex align-items-center lh-2'>
                    <Box className="pt-0 form-switch">
                        <Form as='input' type="checkbox" className="form-check-input" />
                    </Box> 
                    Show above price as a discounted price. Original price
                </SpanStyled>
                <InputStyled placeholder='$ 60' className='w-100' />
            </Box>
        </Box>
        <Box className='mt-4'>
            <HeadingStyled weight="600" size="14px" color="var(--theme-grey-l)">
                Tax percentage
            </HeadingStyled>
            <Box className='d-flex align-items-center mt-3 mb-3'>
                <SpanStyled size="12px" weight="500" className='me-2'>Taxes are</SpanStyled>
                <select>
                    <option value="active">Active</option>
                </select>
            </Box>
            <Box className='mb-2 pb-1'>
                <InputStyled placeholder='20 % of total charges' className='w-100' />
            </Box>
        </Box>

    </MainContainer>

  )


}

const MainContainer = styled.div`
    
    max-width: 550px;

    select {

        width: 155px;
        border: 1px solid #E0E0E0;
        border-radius: 10px;
        height: 40px;
        padding-left: 15px;
        padding-right: 15px;
        background-position: center right 15px;
        font-size: 13px;
        font-weight: 500;
    }

    .form-switch {
        margin-right: 10px;
        .form-check-input {
            width: 32px;
            height: 18px;
        }
    }
    .lh-2{
        line-height: 2.1;
    }
`

export default Settings