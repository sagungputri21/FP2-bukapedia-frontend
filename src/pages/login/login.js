import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useGlobalState from "../../useGlobal";
import "../../styles/login-style.css"
import Container from 'react-bootstrap/Container';


const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    const [state, dispatch] = useGlobalState()
   
    console.log({ email, password })

    const handleEmail = (e) => {
      setEmail(e.target.value)
    }
  
    const handlePassword = (e) => {
      setPassword(e.target.value)
    }
    
    const handleLoginAcc = () => {

      if(email === "admin@bukapedia.com" && password === "admin123") {
        alert("kamu admin")
        dispatch({user: 1})
        console.log(state)
        navigate("/admin/update-stock")
      } else {
        axios.get('https://fakestoreapi.com/users/1')
        .then(result => {
          if(email === result.data.email && password === result.data.password){
            alert("kamu user")
            dispatch({user: 2})
            
            navigate("/")
          } else {
            alert("email belum terdaftar")
          }
          console.log(result.data)
        })
          .catch(error => {
            alert('service error')
            console.log(error)
        })
      }
    }

    const handleLogout = () => {
      dispatch({user: 0})
      console.log(state)
      navigate("/")
    }
  
    return (
      <Container fluid>
        <section className="login">
          {state.user===0? 
            <section>
            <h1>Silahkan Login</h1>
              Email : <input value={email} onChange={handleEmail} type="text" /> <br />
              Password : <input value={password} onChange={handlePassword} type="text" /> <br />
              <button onClick={handleLoginAcc}>Login</button>
            <p>user : john@gmail.com m38rmF$ </p>
            <p>admin : admin@bukapedia.com admin123 </p>
          </section>  
          : <section>
              <h1>
                Kamu sudah login
              </h1>
              <button onClick={handleLogout}>Logout</button>
            </section>  
          }
          
        </section>
      </Container>
        
    );
}

export default Login