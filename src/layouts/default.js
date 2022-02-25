import { Link, Outlet } from 'react-router-dom'
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap'
import { UserMenu } from '../components/menu/userMenu'

const DefaultLayout = () => {
  return (
    <>
      <Navbar fluid="sm">
        <Container>
          <Navbar.Brand as={Link} to="/dashboard">
            <img
              alt="Mi Apto"
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Mi Apto
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link href="#deets">Información</Nav.Link>
              <Nav.Link href="#deets">Pagos</Nav.Link>
              <Nav.Link href="#memes">Documentos</Nav.Link>
              <Nav.Link href="#deets">Ideas</Nav.Link>
            </Nav>
            <UserMenu />
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid="sm" className="main-content">
        <Row className="justify-content-md-center">
          <Col xs md="auto" lg="12">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default DefaultLayout
