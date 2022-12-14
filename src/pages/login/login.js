import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useGlobalState from "../../useGlobal";
import "../../styles/login-style.css"
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
        <div className="login">
          {state.user===0? 
            <div className="wrapper">
              <div className="title">
                BUKAPEDIA
              </div>
              <form>
                  <div className="field">
                    <input value={email} onChange={handleEmail} type="text"/>
                    <label>Email Address</label>
                  </div>
                  <div className="field">
                    <input value={password} onChange={handlePassword} type="text"/>
                    <label>Password</label>
                  </div>
                  
                  <div className="field">
                    <Button variant="primary" type="submit" onClick={handleLoginAcc}>
                      Submit
                    </Button>
                  </div>
                  <p>Email: admin@bukapedia.com , Password: admin123</p>
                  <span></span>
                  <p>Email: john@gmail.com, Password: m38rmF$</p>
                  
              </form>
            </div>
            
            : <section>
                  <h1>
                    Kamu sudah login
                  </h1>
                  <button onClick={handleLogout}>Logout</button>
              </section>
            }
        </div>
             
    );
}

export default Login