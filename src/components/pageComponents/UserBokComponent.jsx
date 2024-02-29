import { useState } from "react";
import { useParams } from "react-router-dom"

export default function UserBokComponent(){

    const {username} = useParams();
    const [letterCount, setLetterCount] = useState(0);

    return(
        <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
            <div className="titleContainer">
                <p className="greenText">{username}의</p>  
                <span className="spacing"></span>
                <p className="titleText">복주머니</p> 
            </div>
            <div><p className="letterCountText">{letterCount}개의 쪽지</p></div>
            <div>
                <img className="img-d" src="/bok-b.png"></img>
            </div>
            <div>
                <button className="light-button">
                    <p className="button-text">복주머니 채워주기</p>
                </button>
            </div>
        </div>
    )
}