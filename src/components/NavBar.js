
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import logo from './images/logo.png';

function NavBar({Add}) {

  

  return (
    <>
     <Navbar className='menu-navbar'>
        <Container>
          <Navbar.Brand href="/">
          <img src={logo} alt="My Logo" 
            style={{ width: '110px', height: '70px' }}
          />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Aeroterrestre">Aéroterrestre</Nav.Link>
            <Nav.Link href="/Terrestre">Terrestre</Nav.Link>
            <Nav.Link href="/Aquatique">Aquatique</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavBar;