import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const UserPage = () => {
    const [login, setLogin] = useState()
    const navigate = useNavigate()

    const handleLogout = () => {
        setLogin(false)
        navigate("/")
    }

    return(
        <div>
            <h1>Ini User Page</h1>
            <Link to="/home">Home </Link>
            <Link to="/cart">Cart </Link>
            <button onClick={handleLogout}> Logout</button>
        </div>
    )
}

export default UserPage