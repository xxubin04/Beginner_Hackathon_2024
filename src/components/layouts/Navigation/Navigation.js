import 'bootstrap/dist/css/bootstrap.min.css'
import './Navigation.css'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          해양쓰레기 현황
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="플로깅 커뮤니티" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/busan">
                부산시 
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/seoul">서울시</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gangwon">강원도</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gyeonggi">경기도</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gyeongnam">경상남도</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/gyeongbook">경상북도</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ulsan">울산시</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/incheon">인천시</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jeonnam">전라남도</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jeonbook">전라북도</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/jeju">제주도</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/chungnam">충청남도</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signin">
              로그인
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              회원가입
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation