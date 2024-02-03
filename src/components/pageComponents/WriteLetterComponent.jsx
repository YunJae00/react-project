import { useParams } from "react-router-dom"

export default function WriteLetterComponent(){

    const {username} = useParams
    
    return(
        <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
            <div className="titleContainer">
              <p className="titleText">메시지를 남겨주세요</p>
            </div>
            <div className="Id_container">
                <p className="Id_element">Content</p>
                <input className="Letter_box" placeholder="편지를 작성해주세요"/>
            </div>
            <div className="Id_container">
                <p className="Id_element">Name</p>
                <input className="Id_box" placeholder="닉네임을 입력하세요(10글자 이하)"/>
            </div>
            <div>
                <button className="light-button">
                    <p className="button-text">복주머니 채워주기</p>
                </button>
            </div>
        </div>
    )
}