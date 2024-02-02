export default function LoginComponent(){

    function Login_Title() {
        return(
            <p className="login_element">Login</p>
        )
    }

    function IdContainer() {
        return(
            <div className="Id_container">
                <p className="Id_element">ID</p>
                <input className="Id_box"/>
            </div>
            
        )
    }

    function PasswordContainer() {
        return(
            <div className="Id_container">
                <p className="Id_element">Password</p>
                <input className="Id_box"/>
            </div>
            
        )
    }

    function ButtonComponent(){
        return(
            <div>
                <button className="light-button">
                    <p className="button-text">Login</p>
                </button>
            </div>
        )
    }

    function ButtonComponent2(){
        return(
            <div>
                <button className="light-button">
                <p className="button-text">Login with Kakao</p>
                </button>
            </div>
        )
    }

    function ButtonComponent3(){
        return(
            <div>
                <button className="dark-button">
                <p className="button-text">Signup</p>
                </button>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
                <Login_Title/>
                <IdContainer/>
                <PasswordContainer/>
                <ButtonComponent />
                <ButtonComponent2 />
                <ButtonComponent3 />
            </div>
        </div>
    )
}