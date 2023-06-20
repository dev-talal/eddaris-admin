import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Box, HeadingStyled } from '../ui/Elements';
import Dropdown from 'react-bootstrap/Dropdown';
import {  
  InterrogationIcon,
  BellIcon,
  EmailIcon, 
  userImage
} 
from './AllImages';
import { LazyImage } from '../helpers/globalComponents';
const Topbar = () => {
  const location = useLocation();
  const path = location.pathname;
  return (
    <Box className="d-flex align-items-center pt-2 justify-content-between">
      <HeadingStyled size="18px" weight="700">Dashboard</HeadingStyled>
      <ListHeader className="list-unstyled d-flex align-items-center mb-0">
        <li><Link  to="/settings"  className="text-decoration-none main-link">Settings</Link></li>
        <li>
          <Dropdown>
            <Dropdown.Toggle variant="none" className="p-0">
              Download a report
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </li>
        <li>
          <Link className={`${path=='/interrogation'?'active':''}`}>
            <InterrogationIcon />
          </Link>
        </li>
        <li>
          <Link to="/notifications" className={`${path.indexOf('notification') > -1?'active':''}`}>
            <BellIcon />
          </Link>
        </li>
        <li>
          <Link to="/emails" className={`${path=='/emails'?'active':''}`}>
            <EmailIcon />
          </Link>
        </li>
        <li className="me-0">
          <LazyImage src={userImage} width="50px" height="50px" alt="username" />
        </li>
      </ListHeader>
    </Box>
  )
}
const ListHeader = styled.ul`
  li{
    margin-right:30px;
    .dropdown-toggle{
      border:none !important;
      line-height:1;
    }
    a.main-link,.dropdown-toggle{
      color:var(--themeColor);
      font-weight: 700;
      font-size: 13px;
    }
    a.active svg path{
      fill:var(--themeColor);
    }
    .dropdown-menu a{
      font-size:13px;
    }
  }
`
export default Topbar;