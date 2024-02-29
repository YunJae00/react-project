import { useState } from "react";
import { useAuth } from "../../security/AuthContext"
import { useNavigate } from "react-router-dom"

export default function LoginComponent(){

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value);
    }

    const authContext = useAuth()
    const navigate = useNavigate()

    async function handleLogin(){
        const loginSuccess = await authContext.login(email, password)

        if(loginSuccess){
            navigate('/user/mybok')
        }
        else{
            console.log('login fail')
        }
    }

    return(
        <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
            <p className="login_element">Login</p>
            <div className="Id_container">
                <p className="Id_element">Email</p>
                <input className="Id_box" name="usename" value={email} onChange={handleEmailChange}/>
            </div>
            <div className="Id_container">
                <p className="Id_element">Password</p>
                <input className="Id_box" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div>
                <button className="light-button" type="button" name="login" onClick={handleLogin}>
                    <p className="button-text">Login</p>
                </button>
            </div>
            <div>
                <button className="light-button">
                <p className="button-text">Login with Kakao</p>
                </button>
            </div>
            <div>
                <button className="dark-button">
                <p className="button-text">Signup</p>
                </button>
            </div>
        </div>
    )
}