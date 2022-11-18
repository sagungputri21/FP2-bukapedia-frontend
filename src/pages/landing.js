import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav} from "react-bootstrap";
import "../components/navbar/style.css"
import { Link } from 'react-router-dom';


const Landing = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                <Nav className="me-auto gap-3">
                    <Link to="/home">Home </Link>
                    <Link to='/login'>Login</Link> 
                </Nav>
                </Container>
            </Navbar>
            <h1>Ini Landing public</h1>            
        </div>
    )
}

export default Landing