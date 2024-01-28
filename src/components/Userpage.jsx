export default function UserpageComponent(){
    
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



    function InputComponent(){
        return(
            <div>

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
            </div>
        </div>
    )
}
