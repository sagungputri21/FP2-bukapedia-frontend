import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav} from "react-bootstrap";
import "../components/navbar/style.css"
import { Link } from 'react-router-dom';


const Landing = () => {
    return(
        <div>
            <Navbar bg="dark" variant="dark">
            </Navbar>
            <h1>Ini Landing public</h1>            
        </div>
    )
}

export default Landing