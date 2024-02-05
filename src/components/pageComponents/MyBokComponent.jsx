import { useState } from "react";
import { useAuth } from "../../security/AuthContext";

export default function MyBokComponent(){

    const [letterCount, setLetterCount] = useState(0)

    const authContext = useAuth()

    return(
        <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
            <div className="titleContainer">
                <p className="greenText">나의</p>  
                <span className="spacing"></span>
                <p className="titleText">복주머니</p> 
            </div>
            <div><p className="letterCountText">{letterCount}개의 쪽지</p></div>
            <div>
                <img className="img-d" src="/bok-b.png"></img>
            </div>
            <div>
                <div className="arrow-container">
                    <img className="arrow" src="/왼쪽 화살표.png"></img>
                    <img className="arrow" src="/오른쪽 화살표.png"></img>
                </div>
            </div>
            <div>
                <button className="light-button">
                    <p className="button-text">내 링크 복사하기</p>
                </button>
            </div>
            {/* <div>
                <button className="light-button">
                    <p className="button-text">뒤로 가기</p>
                </button>
            </div> */}
        </div>
    )
}