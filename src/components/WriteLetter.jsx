export default function WriteLetterComponent() {

    function TitleComponent() {
        return (
          <div className="titleContainer">
              <p className="titleText">메시지를 남겨주세요</p>
          </div>
        );
    }

    function LetterContainer() {
        return(
            <div className="Id_container">
                <p className="Id_element">Content</p>
                <input className="Letter_box" placeholder="편지를 작성해주세요"/>
            </div>
            
        )
    }

    function NameContainer() {
        return(
            <div className="Id_container">
                <p className="Id_element">Name</p>
                <input className="Id_box" placeholder="닉네임을 입력하세요(10글자 이하)"/>
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
            <div className="inner-container">
                <TitleComponent />
                <LetterContainer/>
                <NameContainer/>
                <ButtonComponent/>
            </div>
        </div>
    )
}