import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate();
    
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
        
        navigate("/adminPage")
      } else {
        axios.get('https://fakestoreapi.com/users/1')
        .then(result => {
          if(email === result.data.email && password === result.data.password){
            alert("kamu user")
            
            navigate("/userPage")
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
  
    return (
        <div>
          <section>
            <h1>Silahkan Login</h1>
              Email : <input value={email} onChange={handleEmail} type="text" /> <br />
              Password : <input value={password} onChange={handlePassword} type="text" /> <br />
              <button onClick={handleLoginAcc}>Login</button>
              
          </section>
        </div>
    );
}


export default Login