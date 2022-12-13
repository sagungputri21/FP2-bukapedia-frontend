import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav} from "react-bootstrap";
import "./style.css"
import useGlobalState from "../../useGlobal";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [state, dispatch] = useGlobalState()
  const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({user: 0})
        if(state.user===0) {
          navigate("/")
        }
    }

  const handleNavbar = () => {
    console.log("ini di navbar", state)
    if(state.user===0){
        return (
          <div >
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto gap-3">
                  <Link to='/login'>Login</Link> 
                </Nav>
              </Container>
            </Navbar>
          </div>
        )
    }
    if(state.user===1){
      return (
        <div >
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto gap-3">
                  <Link to="/admin/update-stock">Update</Link> 
                  <Link to="/admin/rekap">Rekap</Link>
                  <button onClick={handleLogout}> Logout</button>
                </Nav>
              </Container>
            </Navbar>
          </div>
      )
    }
    if(state.user===2){
      return(
        <div >
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto gap-3">
                  <Link to="/">Home</Link>
                  <Link to="/cart">Cart</Link> 
                  <button onClick={handleLogout}> Logout</button>
                </Nav>
              </Container>
            </Navbar>
          </div>
      )
    }
  }
  
  return(
    handleNavbar()
  )
};

export default Navigation
