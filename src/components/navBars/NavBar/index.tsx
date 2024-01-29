import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../../../hooks";


const Index = () => {
  const auth = useAuth()
  const navigate = useNavigate()
  return <Navbar bg="dark" data-bs-theme="dark">
    <Navbar.Brand className={'px-4'} as={Link} to="/">Minmathi</Navbar.Brand>
    <Container>
      <Nav className="me-auto">
        {/*<Nav.Link as={Link} to={'/About'}>About</Nav.Link>*/}
        {/*<Nav.Link as={Link} to={'/Profile'}>Profile</Nav.Link>*/}
      </Nav>
    </Container>
    <Nav className="me-auto text-white align-items-center">
      <Nav.Item onClick={()=>navigate('/settings')}><i className="bi-gear"></i></Nav.Item>
      {auth.isAuthenticated ? <NavDropdown title={auth.userData?.firstName|| auth.userData?.email}>
        {/*<NavDropdown.Item as={Link} to={'/Profile'}>Profile</NavDropdown.Item>*/}
        <NavDropdown.Item onClick={auth.logout}
                          className={'text-danger'}>Logout</NavDropdown.Item>
      </NavDropdown> : <NavDropdown title={'Welcome'}>
        <NavDropdown.Item onClick={()=>{navigate('/login')}}>Login</NavDropdown.Item>
      </NavDropdown>}
    </Nav>
  </Navbar>
}

export default Index
