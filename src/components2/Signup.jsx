export default function SignupComponent(){

    function Signup_Title() {
        return(
            <p className="login_element">Signup</p>
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

    function EmailContainer() {
        return(
            <div className="Id_container">
                <p className="Id_element">Email</p>
                <input className="Id_box"/>
            </div>
            
        )
    }

    function NameContainer() {
        return(
            <div className="Id_container">
                <p className="Id_element">Name</p>
                <input className="Id_box"/>
            </div>
            
        )
    }


    function ButtonComponent(){
        return(
            <div>
                <button className="light-button">
                    <p className="button-text">Register</p>
                </button>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
                <Signup_Title/>
                <IdContainer/>
                <PasswordContainer/>
                <PasswordContainer/>
                <EmailContainer/>
                <NameContainer/>
                <ButtonComponent />
            </div>
        </div>
    )
}