import { Nav, NavDropdown } from 'react-bootstrap'
import { auth, signOut } from '../../utils/firebase'
import { Navigate } from 'react-router-dom'

const UserMenu = () => {
  const logOut = () => {
    signOut(auth).then(() => {
      <Navigate to="/login" />
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <Nav className="justify-content-end user-menu">
      <NavDropdown
        title={<div className="pull-left">
          <img className="thumbnail-image"
              src="/person.svg"
              alt="user pic"
              width="30"
              height="30"
            />
          </div>}
        id="collasible-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  )
}

export { UserMenu }
