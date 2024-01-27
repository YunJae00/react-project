export default function MypageComponent(){
    
    function TitleComponent() {
        return (
          <div className="titleContainer">
            <div className="titleSection">
              <p className="greenText">권십재의</p>
              <span className="spacing"></span>
            </div>
            <div className="titleSection">
              <p className="titleText">복주머니</p>
            </div>
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
                <img className="img-d" src="/d.png"></img>
            </div>
        )
    }

    function ButtonComponent(){
        return(
            <div>
                <button className="light-button">복주머니 채워주기</button>
            </div>
        )
    }

    function ButtonComponent2(){
        return(
            <div>
                <button className="light-button">내 링크 복사하기</button>
            </div>
        )
    }

    

    return(
        <div className="container">
            <div className="inner-container">
                <TitleComponent />
                <LetterCount/>
                <ImageComponent />
                <ButtonComponent />
                <ButtonComponent2 />
            </div>
        </div>
    )
}
