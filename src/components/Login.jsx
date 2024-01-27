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
                <button className="light-button">Login</button>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="inner-container">
                <Login_Title/>
                <IdContainer/>
                <PasswordContainer/>
                <ButtonComponent />
                <ButtonComponent />
            </div>
        </div>
    )
}