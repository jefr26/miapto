import { Outlet } from "react-router-dom"
import { Container, Row, Col, Navbar, Card } from "react-bootstrap"

const MainLayout = () => {
  return (
    <>
      <Navbar fluid="sm">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="Mi Apto"
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Mi Apto
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid="sm" className="main-layout">
        <Row className="justify-content-md-center">
          <Col xs md="auto" lg="4">
            <Card>
              <Card.Body>
                <Outlet />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MainLayout
