import { useEffect, useState } from "react"
import { executeCheckUsernameService, executeRegisterUserService } from "../../api/AuthenticationApiService";
import { useNavigate } from "react-router-dom";

export default function SignUpComponent() {

    const navigate = useNavigate()

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()
    const [email, setEmail] = useState()
    const [name, setName] = useState()

    const [registerConfirm, setRegisterConfirm] = useState(false)

    const [idCountSuccess, setIdCountSuccess] = useState(false)
    const [idSuccess, setIdSuccessMessage] = useState(false)
    const [idFail, setIdFailMessage] = useState(false)

    const [passwordSuccess, setPasswordSuccessMessage] = useState(false)
    const [passwordFail, setPasswordFailMessage] = useState(false)

    useEffect(() => {
        if (idSuccess && passwordSuccess) {
            setRegisterConfirm(true);
        } else {
            setRegisterConfirm(false);
        }
    }, [idSuccess, passwordSuccess]);

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    function handlePasswordConfirmChange(event) {
        setPasswordConfirm(event.target.value)
    }
    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    function handleNameChange(event) {
        setName(event.target.value)
    }

    async function checkUsername(username) {
        try {
            const response = await executeCheckUsernameService(username)
            if (response.status === 200) {
                return true
            } else {
                return false
            }
        } catch (error) {
            return false;
        }
    }

    async function idCheck() {
        if (username.length < 5) {
            setIdCountSuccess(true)
            setIdSuccessMessage(false)
            setIdFailMessage(false)
        } else {
            try {
                const isUsernameAvailable = await checkUsername(username);

                if (isUsernameAvailable) {
                    setIdCountSuccess(false)
                    setIdSuccessMessage(true)
                    setIdFailMessage(false)
                } else {
                    setIdCountSuccess(false)
                    setIdSuccessMessage(false)
                    setIdFailMessage(true)
                }
            } catch (error) {
                console.error('Error checking username:', error)
                setIdCountSuccess(false)
                setIdSuccessMessage(false)
                setIdFailMessage(true)
            }
        }
    }

    function passwordCheck() {
        if (password === passwordConfirm) {
            setPasswordSuccessMessage(true)
            setPasswordFailMessage(false)
        }
        else {
            setPasswordSuccessMessage(false)
            setPasswordFailMessage(true)
        }
    }

    async function registerUser() {
        const user = {
            "username": username,
            "password": password,
            "email": email
        }
        await executeRegisterUserService(user)
            .then(response => {
                console.log(response)
                navigate('/')
            })
            .catch(error => console.log(error))

    }

    return (
        <div className="inner-container" style={{ backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")' }}>
            <p className="login_element">Signup</p>
            <div className="Id_container">
                <p className="Id_element">ID</p>
                <input className="Id_box" type="text" name="username" value={username} onChange={handleUsernameChange} />
                <div>
                    <button type="button" name="idCheck" onClick={idCheck}>ID 중복 확인</button>
                    {idCountSuccess && <span>5자 이상 입력해주세요</span>}
                    {idSuccess && <span>사용가능한 아이디 입니다</span>}
                    {idFail && <span>사용중인 아이디 입니다</span>}
                </div>
            </div>
            <div className="Id_container">
                <p className="Id_element">Password</p>
                <input className="Id_box" type="password" name="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="Id_container">
                <p className="Id_element">Password</p>
                <input className="Id_box" type="password" name="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirmChange} />
                <div>
                    <button type="button" name="passwordCheck" onClick={passwordCheck}>비밀번호 확인</button>
                    {passwordSuccess && <span>사용 가능한 비밀번호입니다</span>}
                    {passwordFail && <span>비밀번호가 다릅니다</span>}
                </div>
            </div>
            <div className="Id_container">
                <p className="Id_element">Email</p>
                <input className="Id_box" type="text" name="email" value={email} onChange={handleEmailChange} />
            </div>
            {/* <div className="Id_container">
                <p className="Id_element">Name</p>
                <input className="Id_box" type="text" name="name" value={name} onChange={handleNameChange} />
            </div> */}
            {registerConfirm &&
                <div>
                    <button className="light-button" type="button" name="register" onClick={registerUser}>
                        <p className="button-text">Register</p>
                    </button>
                </div>
            }
            {!registerConfirm &&
                <div>
                    <button className="light-dark-button" type="button" name="register">
                        <p className="button-text">Register</p>
                    </button>
                </div>
            }
        </div>
    )
}