import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav} from "react-bootstrap";
import "./style.css"

const Navigation = () => {
  return(
    <header id= "navbar" >
        <div >
          <Navbar bg="dark" variant="dark">
            <Container>
              <Nav className="me-auto gap-3">
                <Link to="/home">Home </Link>
                <Link to='/login'>Login</Link> 
              </Nav>
            </Container>
          </Navbar>
        </div>
      </header>
  )
};

export default Navigation
