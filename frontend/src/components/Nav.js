import { Navbar, Nav as BootstrapNav, Container } from "react-bootstrap";

const Nav = (props) => {
  return (
    <Navbar
      bg="light"
      style={{
        width: "100%",
        position: "fixed", // 화면에 고정
        bottom: 0,
      }}
    >
      <Container>
        <BootstrapNav className="mr-auto" style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
          <BootstrapNav.Link
            href="/menu"
            style={{
              flex: "1",
              textAlign: "center",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={
                props.page === "restaurant"
                  ? process.env.PUBLIC_URL + "/images/nav_식당.svg"
                  : process.env.PUBLIC_URL + "/images/nav_식당_off.svg"
              }
              alt="식당 아이콘"
              width="24"
              height="24"
            />

            <span style={{ marginTop: "4px", fontSize: "11px" }}>식당</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="/recommand"
            style={{
              flex: "1",
              textAlign: "center",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={
                props.page === "recommand"
                  ? process.env.PUBLIC_URL + "/images/nav_메뉴추천.svg"
                  : process.env.PUBLIC_URL + "/images/nav_메뉴추천_off.svg"
              } // 이미지 파일 경로 설정
              alt="메뉴추천 아이콘"
              width="24"
              height="24"
            />
            <span style={{ marginTop: "4px", fontSize: "11px" }}>메뉴추천</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="/community"
            style={{
              flex: "1",
              textAlign: "center",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={
                props.page === "community"
                  ? process.env.PUBLIC_URL + "/images/nav_커뮤니티.svg"
                  : process.env.PUBLIC_URL + "/images/nav_커뮤니티_off.svg"
              } // 이미지 파일 경로 설정
              alt="커뮤니티 아이콘"
              width="24"
              height="24"
            />
            <span style={{ marginTop: "4px", fontSize: "11px" }}>커뮤니티</span>
          </BootstrapNav.Link>
          <BootstrapNav.Link
            href="/mypage"
            style={{
              flex: "1",
              textAlign: "center",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={
                props.page === "mypage"
                  ? process.env.PUBLIC_URL + "/images/nav_마이페이지.svg"
                  : process.env.PUBLIC_URL + "/images/nav_마이페이지_off.svg"
              } // 이미지 파일 경로 설정
              alt="마이페이지 아이콘"
              width="24"
              height="24"
            />
            <span style={{ marginTop: "4px", fontSize: "11px" }}>마이페이지</span>
          </BootstrapNav.Link>
        </BootstrapNav>
      </Container>
    </Navbar>
  );
};

export default Nav;
