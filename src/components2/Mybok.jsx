export default function MybokComponent(){
    
    function TitleComponent() {
        return (
          <div className="titleContainer">
            <p className="greenText">권십재의</p>  
            <span className="spacing"></span>
            <p className="titleText">복주머니</p>  
          </div>
        );
    }

    function ImageComponent() {
        return(
            <div>
                <img className="img-d" src="/bok-b.png"></img>
            </div>
        )
    }

    function ButtonComponent(){
        return(
            <div>
                <button className="light-button">
                    <p className="button-text">뒤로 가기</p>
                </button>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
                <TitleComponent />
                <ImageComponent />
                <ButtonComponent />
            </div>
        </div>
    )
}
