export default function ChooseLetter() {
    function TitleComponent() {
        return (
          <div className="titleContainer"> 
            <p className="titleText">쪽지를</p>
            <span className="spacing"></span>
            <p className="titleText">선택하세요</p>    
          </div>
        );
      }

    function LetterContainer() {
        return(
            <div className="letterContainer">
                <div className="letter_img_box">
                    <img className="letter_img" src="/쪽지1.png"></img>
                </div>
                <div className="letter_img_box">
                    <img className="letter_img" src="/쪽지3.png"></img>
                </div>
                <div className="letter_img_box">
                    <img className="letter_img" src="/쪽지4.png"></img>
                </div>
                <div className="letter_img_box">
                    <img className="letter_img" src="/쪽지5.png"></img>
                </div>
                <div className="letter_img_box">
                    <img className="letter_img" src="/쪽지6.png"></img>
                </div>
                <div className="letter_img_box">
                    <img className="letter_img" src="/쪽지7.png"></img>
                </div>
                <div className="letter_img_box">
                    <img className="letter_img" src="/쪽지8.png"></img>
                </div>
                <div className="letter_img_box">
                    <img className="letter_img" src="/쪽지9.png"></img>
                </div>
            </div>
        )
    }

    function ButtonComponent(){
        return(
            <div>
                <button className="light-button">
                    <p className="button-text">다음으로</p>
                </button>
            </div>
        )
    }

    return(
        <div className="container">
            <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
                <TitleComponent />
                <LetterContainer />
                <ButtonComponent />
            </div>
        </div>
    )
}