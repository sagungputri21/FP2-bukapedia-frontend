import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useGlobalState from "../useGlobal"

const UserPage = () => {
    const [login, setLogin] = useState()
    const navigate = useNavigate()
    const [state, dispatch] = useGlobalState()

    const handleLogout = () => {
        dispatch({user: 0})
        navigate("/")
    }

    const handlePage = () => {
        console.log("ini sebelum", state)
        if(state.user!==2){
            alert("bukan user")
        } else {
            return (
                <div >
                    <h1>Ini user page</h1>
                    <button onClick={handleLogout}> Logout</button>
                </div>
            )
            
        }
    }
          
    return(
        handlePage()
    )   
    
}

export default UserPage