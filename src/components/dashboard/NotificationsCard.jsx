import React from 'react'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { LazyImage } from '../helpers/globalComponents'
import { NotificationIcon, userImage } from '../layouts/AllImages'
import { Box, HeadingStyled, SpanStyled } from '../ui/Elements'

const NotificationsCard = () => {
  const { loading, data } = useSelector( state => state.dashboard )
  return (
    <NotifyCardStyled>
        <Box className="notify__header d-flex align-items-center justify-content-between">
            <HeadingStyled weight={700} size="18px" color="var(--grey-color)">Notifications</HeadingStyled>
            <NotificationIcon width="18px" />
        </Box>
        <Box className="notify__body">
            <ul className="list-unstyled">
                {data?.notifications?.slice(0,6).map((item,key)=>{
                    return(
                        <li className="d-flex align-items-center" key={key}>
                            <Box className="me-3">
                                <LazyImage src={userImage} width="40px" height="40px" />
                            </Box>
                            <Box>
                                <HeadingStyled size="12px" weight="700">
                                    {item.body}
                                </HeadingStyled>
                                <SpanStyled className="d-block" size="11px" color="var(--grey-color)">{ moment(item.createdAt).format('MMM DD, yyyy - hh:mm A') }</SpanStyled>
                            </Box>
                        </li>
                    )
                })}
            </ul>
        </Box>
        <Box className="notify__footer">
            <Link to="/notifications" className="text-decoration-none">
                <HeadingStyled size="12px" color="var(--themeColor)" weight="700">
                    See all notifications
                </HeadingStyled>
            </Link>
        </Box>
    </NotifyCardStyled>
  )
}
const NotifyCardStyled = styled.div`
    background:rgb(10,13,49, 0.03);
    padding:15px;
    border-radius: 20px;
    .notify__header{
        padding-bottom:5px;
        border-bottom: 1px solid rgb(10,13,49,0.15);
    }
    .notify__body{
        li{
            margin-top:15px;
        }
    }
    .notify__footer{
        padding-top:10px;
        border-top: 1px solid rgb(10,13,49,0.15);
    }
`
export default NotificationsCard