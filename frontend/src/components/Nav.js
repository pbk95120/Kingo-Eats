// Nav.js

import React from 'react';
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faNewspaper,
  faComments,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
  return (
    <Navbar bg="light" style={{ maxWidth: '330px' }}>
      <Container>
        <BootstrapNav className="mr-auto">
          <BootstrapNav.Link
            href="#home"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon icon={faHome} />
            <span style={{ marginTop: '4px' }}>식당</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="#new"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon icon={faNewspaper} />
            <span style={{ marginTop: '4px' }}>메뉴추천</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="#chat"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon icon={faComments} />
            <span style={{ marginTop: '4px' }}>커뮤니티</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="#user"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon icon={faUser} />
            <span style={{ marginTop: '4px' }}>마이페이지</span>
          </BootstrapNav.Link>
        </BootstrapNav>
      </Container>
    </Navbar>
  );
};

export default Nav;
