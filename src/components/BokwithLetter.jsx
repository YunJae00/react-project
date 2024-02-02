export default function BokwithLetterComponent(){
    
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
                <div>
                <img className="letter" src="/쪽지8.png"></img>
                </div>
                <img className="bok-L" src="/bok-b.png"></img>
            </div>
        )
    }

    function ArrowComponent() {
        return(
            <div className="arrow-container">
                <img className="arrow" src="/왼쪽 화살표.png"></img>
                <img className="arrow" src="/오른쪽 화살표.png"></img>
            </div>
        )
    }

    function ButtonComponent(){
        return(
            <div>
                <button className="light-button">
                    <p className="button-text">복주머니 채워주기</p>
                </button>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
                <TitleComponent />
                <ImageComponent/>
                <ArrowComponent/>
                <ButtonComponent />
            </div>
        </div>
    )
}