import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav} from "react-bootstrap";
import "./style.css"
import useGlobalState from "../../useGlobal";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [state, dispatch] = useGlobalState()
  const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({user: 0})
        if(state.user===0) {
          navigate("/")
        }
    }

    const quantity = useSelector((state) => state.cart.totalQuantity);

  const handleNavbar = () => {
    console.log("ini di navbar", state)
    if(state.user===0){
        return (
          <div>
            <Navbar bg="dark" variant="dark">
              <Container>
                <Nav className="me-auto gap-3 py-2">
                  <Link to='/login' style={{ textDecoration: "none" }}>Login</Link> 
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
                <Nav className="mx-auto d-flex nav-justify justify-content-between py-2">
                  <div className="d-flex gap-3 nav-justify">
                    <Link to="/admin/update-stock" style={{ textDecoration: "none" }}>Update</Link> 
                    <Link to="/admin/rekap" style={{ textDecoration: "none" }}>Rekap</Link>
                  </div>
                  <div className="logout-button-wrap">
                    <button onClick={handleLogout} className="logout-button px-3"> Logout</button>
                  </div>
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
                <Nav className="mx-auto d-flex me-auto gap-3">
                  <div className="d-flex gap-3 nav-justify">
                    <Link to="/" style={{ textDecoration: "none" }}>Home</Link>
                    <Link to="/cart" style={{ textDecoration: "none" }}>Cart ({`${quantity}`})</Link> 
                  </div>
                  <div className="logout-button-wrap">
                    <button onClick={handleLogout} className="logout-button px-3"> Logout</button>
                  </div>
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
