import { useState } from "react"

export default function SignUpComponent(){

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [name, setName] = useState();

    const [registerConfirm, setRegisterConfirm] = useState(false);

    const [idCountSuccess, setIdCountSuccess] = useState(false)
    const [idSuccess, setIdSuccessMessage] = useState(false)
    const [idFail, setIdFailMessage] = useState(false)

    const [passwordSuccess, setPasswordSuccessMessage] = useState(false)
    const [passwordFail, setPasswordFailMessage] = useState(false)

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }
    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }
    function handlePasswordConfirmChange(event) {
        setPasswordConfirm(event.target.value)
    }
    function handleNameChange(event) {
        setName(event.target.value)
    }


    function idCheck(){
        if(username.length < 5){
            setIdCountSuccess(true)
            setIdSuccessMessage(false)
            setIdFailMessage(false)
        }
        else if(username==='test test'){
            setIdCountSuccess(false)
            setIdSuccessMessage(true)
            setIdFailMessage(false)
        }
        else{
            setIdCountSuccess(false)
            setIdSuccessMessage(false)
            setIdFailMessage(true)
        }
    }
    
    function passwordCheck(){
        if(password === passwordConfirm){
            setPasswordSuccessMessage(true)
            setPasswordFailMessage(false)
        }
        else{
            setPasswordSuccessMessage(false)
            setPasswordFailMessage(true)
        }
    }

    function registerUser(){
        if(idSuccess && passwordSuccess){
            setRegisterConfirm(true)
        }
        else{
            setRegisterConfirm(false)
        }
    }

    return(
        <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
            <p className="login_element">Signup</p>
            <div className="Id_container">
                <p className="Id_element">ID</p>
                <input className="Id_box" type="text" name="username" value={username} onChange={handleUsernameChange}/>
                <div>
                    <button type="button" name="idCheck" onClick={idCheck}>ID 중복 확인</button>
                    {idCountSuccess && <span>5자 이상 입력해주세요</span>}
                    {idSuccess && <span>사용가능한 아이디 입니다</span>}
                    {idFail && <span>사용중인 아이디 입니다</span>}
                </div>
            </div>
            <div className="Id_container">
                <p className="Id_element">Password</p>
                <input className="Id_box" type="password" name="password" value={password} onChange={handlePasswordChange}/>
            </div>
            <div className="Id_container">
                <p className="Id_element">Password</p> 
                <input className="Id_box" type="password" name="passwordConfirm" value={passwordConfirm} onChange={handlePasswordConfirmChange}/>
                <div>
                    <button type="button" name="passwordCheck" onClick={passwordCheck}>비밀번호 확인</button>
                    {passwordSuccess && <span>사용 가능한 비밀번호입니다</span>}
                    {passwordFail && <span>비밀번호가 다릅니다</span>}
                </div>
            </div>
            <div className="Id_container">
                <p className="Id_element">Email</p>
                <input className="Id_box"/>
            </div>
            <div className="Id_container">
                <p className="Id_element">Name</p>
                <input className="Id_box" type="text" name="name" value={name} onChange={handleNameChange}/>
            </div>
            <div>
                {registerConfirm && <span>다시 확인</span>}
                <button className="light-button" type="button" name="register" onClick={registerUser}>
                    <p className="button-text">Register</p>
                </button>
            </div>
            {/* {registerConfirm && 
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
            } */}
            
        </div>
    )
}