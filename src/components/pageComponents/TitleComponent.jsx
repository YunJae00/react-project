export default function TitleComponent() {

    return(
        <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
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