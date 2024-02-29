import { useEffect, useState } from "react"
import { executeCheckEmailService, executeCheckUsernameService, executeRegisterUserService } from "../../api/AuthenticationApiService";
import { useNavigate } from "react-router-dom";

export default function SignUpComponent() {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()
    const [nickname, setNickname] = useState()

    const [registerConfirm, setRegisterConfirm] = useState(false)

    const [emailSuccess, setEmailSuccessMessage] = useState(false)
    const [emailFail, setEmailFailMessage] = useState(false)

    const [passwordSuccess, setPasswordSuccessMessage] = useState(false)
    const [passwordFail, setPasswordFailMessage] = useState(false)

    useEffect(() => {
        if (emailSuccess && passwordSuccess) {
            setRegisterConfirm(true);
        } else {
            setRegisterConfirm(false);
        }
    }, [emailSuccess, passwordSuccess]);

    function handleEmailChange(event) {
        setEmail(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    function handlePasswordConfirmChange(event) {
        setPasswordConfirm(event.target.value)
    }
    function handleNicknameChange(event) {
        setNickname(event.target.value)
    }

    async function checkEmail(Email) {
        const email = {
            "email" : Email
        }
        try {
            const response = await executeCheckEmailService(email)
            if (response.data === true) {
                return false
            } else {
                return true
            }
        } catch (error) {
            return true;
        }
    }

    async function emailCheck() {
        try {
            const isEmailAvailable = await checkEmail(email);

            if (isEmailAvailable) {
                setEmailSuccessMessage(true)
                setEmailFailMessage(false)
            } else {
                setEmailSuccessMessage(false)
                setEmailFailMessage(true)
            }
        } catch (error) {
            console.error('Error checking username:', error)
            setEmailSuccessMessage(false)
            setEmailFailMessage(true)
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
            "email": email,
            "password": password,
            "nickname": nickname
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
                <p className="Id_element">Email</p>
                <input className="Id_box" type="text" name="email" value={email} onChange={handleEmailChange} />
                <div>
                    <button type="button" name="emailCheck" onClick={emailCheck}>Email 중복 확인</button>
                    {emailSuccess && <span>사용가능한 email 입니다</span>}
                    {emailFail && <span>사용중인 email 입니다</span>}
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
                <p className="Id_element">NickName</p>
                <input className="Id_box" type="text" name="nickname" value={nickname} onChange={handleNicknameChange} />
            </div>
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