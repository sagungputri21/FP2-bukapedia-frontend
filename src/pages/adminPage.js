import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import useGlobalState from "../useGlobal"

const AdminPage = () => {
    const [state, dispatch] = useGlobalState()

    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch({user: 0})
        navigate("/")
    }
    
    const handlePage = () => {
        console.log("ini sebelum", state)
        if(state.user!==1){
            alert("bukan admin")
        } else {
            return (
                <div >
                    <h1>Ini Admin Page</h1>
                    <button onClick={handleLogout}> Logout</button>
                </div>
            )
            
        }
    }

    // if(state===1){
    //     return(
    //         <div>
    //             <h1>ini admin page</h1>
    //             <button onClick={handleLogout}> Logout</button>
    //         </div>       
    //     )
    // } else {
    //     navigate("/")
    // }
    return(
        handlePage()
    )
    
}

export default AdminPage