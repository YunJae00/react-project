export default function MypageComponent(){
    
    function TitleComponent() {
        return (
          <div className="titleContainer">
            <p className="greenText">권십재의</p>  
            <span className="spacing"></span>
            <p className="titleText">복주머니</p> 
          </div>
        );
    }

    function LetterCount() {
        return (
            <p className="letterCountText">0개의 쪽지</p>
        )
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
                    <p className="button-text">복주머니 채워주기</p>
                </button>
            </div>
        )
    }

    function ButtonComponent2(){
        return(
            <div>
                <button className="light-button">
                    <p className="button-text">내 링크 복사하기</p>
                </button>
            </div>
        )
    }

    

    return(
        <div className="container">
            <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
                <TitleComponent />
                <LetterCount/>
                <ImageComponent />
                <ButtonComponent />
                <ButtonComponent2 />
            </div>
        </div>
    )
}
