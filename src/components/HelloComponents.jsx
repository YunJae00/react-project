export default function HelloComponent(){
    
    function TitleComponent() {
        return (
          <div className="titleContainer"> 
            <p className="titleText">내 복주머니를</p>
            <span className="spacing"></span>
            <p className="greenTextT">가득</p>
            <span className="spacing"></span>
            <p className="titleText">채워줘</p>    
          </div>
        );
      }

    function ImageComponent() {
        return(
            <div>
                <img className="img-d" src="/bok-a.png"></img>
            </div>
        )
    }

    function ButtonComponent(){
        return(
            <div>
                <button className="light-button">
                    <p className="button-text">Login</p>
                </button>
            </div>
        )
    }

    function ButtonComponent2(){
        return(
            <div>
                <button className="light-button">
                <p className="button-text">Login with Kakao</p>
                </button>
            </div>
        )
    }

    function ButtonComponent3(){
        return(
            <div>
                <button className="dark-button">
                <p className="button-text">Signup</p>
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
                <ImageComponent />
                <ButtonComponent />
                <ButtonComponent2 />
                <ButtonComponent3 />
            </div>
        </div>
    )
}
