// Nav.js

import React from 'react';
import { Navbar, Nav as BootstrapNav, Container } from 'react-bootstrap';

const Nav = () => {
  return (
    <Navbar bg="light"
    style={{
      width: '100%',
      position: 'fixed',  // 화면에 고정
      bottom: 0,       
    }}
    >
      <Container>
        <BootstrapNav className="mr-auto" style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <BootstrapNav.Link
            href="#home"
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={process.env.PUBLIC_URL + '/images/nav_식당.svg'} // 이미지 파일 경로 설정
              alt="식당 아이콘"
              width="24"
              height="24"
            />
            <span style={{ marginTop: '4px', fontSize: '11px' }}>식당</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="#new"
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={process.env.PUBLIC_URL + '/images/nav_메뉴추천.svg'} // 이미지 파일 경로 설정
              alt="메뉴추천 아이콘"
              width="24"
              height="24"
            />
            <span style={{ marginTop: '4px', fontSize: '11px' }}>메뉴추천</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="#chat"
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={process.env.PUBLIC_URL + '/images/nav_커뮤니티.svg'} // 이미지 파일 경로 설정
              alt="커뮤니티 아이콘"
              width="24"
              height="24"
            />
            <span style={{ marginTop: '4px', fontSize: '11px' }}>커뮤니티</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="#user"
            style={{
              flex: '1',
              textAlign: 'center',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img
              src={process.env.PUBLIC_URL + '/images/nav_마이페이지.svg'} // 이미지 파일 경로 설정
              alt="마이페이지 아이콘"
              width="24"
              height="24"
            />
            <span style={{ marginTop: '4px', fontSize: '11px' }}>마이페이지</span>
          </BootstrapNav.Link>
        </BootstrapNav>
      </Container>
    </Navbar>
  );
};

export default Nav;
