import React,{useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { sidebar_links } from '../helpers/variables'
import { Box, HeadingStyled, SpanStyled } from '../ui/Elements'
import { LogoText, TransactionsIcon } from './AllImages'
import Collapse from 'react-bootstrap/Collapse';
import ScrollArea from 'react-scrollbar'
import { useEffect } from 'react'
const Sidebar = ({ sidebarRef }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  return (
    <SidebarStyled ref={sidebarRef}>
        <ScrollArea
            speed={0.8}
            className="area"
            contentClassName="content"
            horizontal={false}
            style={{height:"calc(100vh - 80px)"}}
            verticalScrollbarStyle={{borderRadius:"10px",width:"5px"}}
            >
            <Box className='container__nav'>
                <Box className='d-flex align-items-center justify-content-center'>
                    <LogoText className='me-3' />&nbsp;<HeadingStyled color="#fff" size="13px" weight="300" >Admin panel</HeadingStyled>
                </Box>
                <Box className='border-separator mx-auto' />
                <ul className='list-unstyled mb-0'>
                    {sidebar_links.map((item,key)=>{
                        return(
                            <React.Fragment key={key}>
                                {!item.children?
                                    <li key={item.title.toLocaleLowerCase()}>
                                        <Link to={item.url} className={`d-flex text-decoration-none ${path==item.url?'active':''}`}>
                                            <item.icon width="24px" />
                                            <SpanStyled weight="300" color="#fff" size="13px">{item.title}</SpanStyled>
                                        </Link>
                                    </li>
                                :
                                    <li key={item.title.toLocaleLowerCase()}>
                                        <Link to="#" onClick={() => setOpen(!open)} className='d-flex text-decoration-none'>
                                            <TransactionsIcon width="24px" />
                                            <SpanStyled weight="300" color="#fff" size="13px">Transactions</SpanStyled>
                                        </Link>
                                        <Collapse in={open}>
                                            <div>
                                                <ul className='list-unstyled mb-0'>
                                                    {item.children.map((child)=>{
                                                        return(
                                                            <li key={child.title.toLocaleLowerCase()}>
                                                                <Link to={child.url} className='d-flex text-decoration-none'>
                                                                    <child.icon width="24px" />
                                                                    <SpanStyled weight="300" color="#fff" size="13px">{child.title}</SpanStyled>
                                                                </Link>
                                                            </li>
                                                        )
                                                    })}

                                                </ul>
                                            </div>
                                        </Collapse>
                                    </li>
                                }
                            </React.Fragment>
                        )
                    })}
                </ul>
            </Box>
        </ScrollArea>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.div`
    background: ${process.env.REACT_APP_THEME_COLOR};
    box-shadow: 0px 0px 80px rgba(122, 187, 181, 0.24), 0px 0px 46.8519px rgba(122, 187, 181, 0.182222), 0px 0px 25.4815px rgba(122, 187, 181, 0.145778), 0px 0px 13px rgba(122, 187, 181, 0.12), 0px 0px 6.51852px rgba(122, 187, 181, 0.0942222), 0px 0px 3.14815px rgba(122, 187, 181, 0.0577778);
    border-radius: 20px;
    width:180px;
    position:fixed;
    top:20px;
    left:20px;
    padding:22px 0px;
    height:calc(100vh - 40px);
    .border-separator{
        width:90%;
        height:2px;
        background-color: #fff;
        margin-bottom: 35px;
        margin-top:25px;
    }
    .container__nav{
        padding:0px 22px;
    }
    ul{
        li{
            a.active{
                svg path{
                    fill:#15847A;
                }
            }
            svg{
                margin-right:12px;
            }
            margin-bottom:30px;
        }
        ul{
            margin-top:30px;
        }
    }
`
export default Sidebar