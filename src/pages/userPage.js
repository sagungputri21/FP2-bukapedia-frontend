import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useGlobalState from "../useGlobal"

const UserPage = () => {
    const [login, setLogin] = useState()
    const navigate = useNavigate()
    const [state, dispatch] = useGlobalState()

    const handleLogout = () => {
        setLogin(false)
        navigate("/")
    }

    if(state!==2){
        alert("kamu bukan user")
        navigate("/")
    } else {
        return(
            <div>
                <h1>Ini User Page</h1>
                <Link to="/home">Home </Link>
                <Link to="/cart">Cart </Link>
                <button onClick={handleLogout}> Logout</button>
            </div>       
        )
    }
}

export default UserPage