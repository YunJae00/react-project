export default function LoginComponent(){

    return(
        <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
            <p className="login_element">Login</p>
            <div className="Id_container">
                <p className="Id_element">ID</p>
                <input className="Id_box"/>
            </div>
            <div className="Id_container">
                <p className="Id_element">Password</p>
                <input className="Id_box"/>
            </div>
            <div>
                <button className="light-button">
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