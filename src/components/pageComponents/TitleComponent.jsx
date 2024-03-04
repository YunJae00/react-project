import { useNavigate } from "react-router-dom"

export default function TitleComponent() {

    const navigate = useNavigate()

    function handelLogin(){
        navigate('/auth/login')
    }
    function handelLoginKakao(){
        navigate('/auth/login')
    }
    function handelSignUp(){
        navigate('/auth/register')
    }

    return(
        <div className="inner-container" style={{backgroundImage: 'url("./public/background.jpg")'}}>
            <div className="titleContainer"> 
                <p className="titleText">내 복주머니를</p>
                <span className="spacing"></span>
                <p className="greenTextT">가득</p>
                <span className="spacing"></span>
                <p className="titleText">채워줘</p>    
            </div>
            <div>
                <img className="img-d" src="/bok-a.png"></img>
            </div>
            <div>
                <button className="light-button" type="button" name="login" onClick={handelLogin}>
                <p className="button-text">Login</p>
                </button>
            </div>
            <div>
                <button className="light-button" type="button" name="kakao-login" onClick={handelLoginKakao}>
                <p className="button-text">Login with Kakao</p>
                </button>
            </div>
            <div>
                <button className="dark-button" type="button" name="signup" onClick={handelSignUp}>
                <p className="button-text">Signup</p>
                </button>
            </div>
        </div>
    )
}