import { useEffect, useState } from "react"
import { useAuth } from "../../security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function HeaderComponent() {

    const authContext = useAuth()
    const navigate = useNavigate()

    const [isLogedIn, setIsLogedIn] = useState(false)

    useEffect(() => {
        const logedIn = localStorage.getItem("isLoggedIn")
        if (logedIn === "1") {
            setIsLogedIn(true)
        }
        else{
            setIsLogedIn(false)
        }
    }, [handleLogin, handleLogout]);

    function handleLogin() {
        navigate('/auth/login')
    }

    function handleLogout() {
        authContext.logout()
        navigate('/')
    }

    return (
        <div>
            {!isLogedIn &&
                <button type="button" name="login" onClick={handleLogin}>Login</button>
            }
            {isLogedIn &&
                <button type="button" name="logout" onClick={handleLogout}>Logout</button>
            }
        </div>
    )
}