import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import SalesChart, { SalesTabs } from '../../../../components/charts/SalesChart'
import { ButtonStyled, DropdownList } from '../../../../components/helpers/globalComponents'
import { payoutsColumns } from '../../../../components/helpers/tableVariables'
import ListTable from '../../../../components/tables/ListTable'
import { Box, HeadingStyled, SpanStyled } from '../../../../components/ui/Elements'

const Transcations = () => {
    const { transactions } = useSelector((state) => state.tutor);
    return (

        <Box>
            { transactions?.transactions?.length>0?
            <>
                <PayoutBarStyled>
                    <Box className='d-flex align-items-center justify-content-between'>
                        <Box>
                            <HeadingStyled size='24px' weight='700'>
                                Money needed for payout&nbsp;<SpanStyled size='10px' weight='600' color='var(--grey-color)'>(excluding commission)</SpanStyled>
                            </HeadingStyled>
                            <SpanStyled className='d-block mt-2' size='20px' weight='700'>
                                $400.87
                            </SpanStyled>
                        </Box>
                        <ButtonStyled className='border-0 text-white'>
                            Mark payout
                        </ButtonStyled>
                    </Box>
                </PayoutBarStyled>
                <Box>
                    <Box className='d-flex align-items-center justify-content-between'>
                        <HeadingStyled size='24px' weight='700' style={{ marginTop: '20px' }}>
                            Payments&nbsp;<SpanStyled size='10px' weight='600' color='var(--grey-color)'>(Commissions)</SpanStyled>
                        </HeadingStyled>
                        <Box style={{ width: '154px',  marginTop: '20px' }} className='mt-4'>
                            <DropdownList options={ ["Tutors"] } classes="filter__line" />
                        </Box>
                    </Box>
                    <TableWrapStyled>
                        <ListTable columns={ payoutsColumns }  rows={ transactions?.transactions } options={ [] } />
                    </TableWrapStyled>
                    <Box style={{ marginBottom: '20px', marginTop: '30px' }}>
                        <SalesTabs heading="Tutor earnings" />
                    </Box>
                    <Box>
                        <SalesChart />
                    </Box>
                </Box>
            </>
            :
            <HeadingStyled className='text-center' size='20px' weight='700' style={{ marginTop: '40px' }}>
               No Transaction found
            </HeadingStyled>
            }
        </Box>

    )

}

const PayoutBarStyled = styled.div`

    background: rgba(122, 187, 180, 0.15);
    border-radius: 20px;
    padding: 20px 30px;

`

const TableWrapStyled = styled.div`
    
    background: rgb(200, 200, 200,0.05);
    border-radius: 20px;
    padding: 20px;
    margin-top: 20px;

`

export default Transcations