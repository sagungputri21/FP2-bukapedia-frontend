import { useState } from "react"
import { useNavigate } from "react-router-dom"

const AdminPage = () => {
    const [login, setLogin] = useState()
    const navigate = useNavigate()

    const handleLogout = () => {
        setLogin(false)
        navigate("/")
    }
    
    return(
        <div>
            <h1>ini admin page</h1>
            <button onClick={handleLogout}> Logout</button>
        </div>
            
    )
}

export default AdminPage