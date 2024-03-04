import { useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { executeLetterSaveService, executeRegisterUserService } from "../../api/AuthenticationApiService";

export default function WriteLetterComponent(){

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const bokUsername = params.get('username');
    const selectedLetter = params.get('selectedLetter');

    const [content , setContent] = useState(null)
    const [name, setName] = useState(null)

    function handleContentChange(event) {
        setContent(event.target.value)
    }
    function handleNameChange(event) {
        setName(event.target.value)
    }

    const navigate = useNavigate()
    async function saveLetterHandler() {
        const letter = {
            "createUsername": name,
            "content": content,
            "letterNumber": selectedLetter
        }
        console.log(letter)
        console.log(bokUsername)
        await executeLetterSaveService(bokUsername, letter)
            .then(response => {
                console.log(response)
                navigate(`/user?username=${bokUsername}`)
            })
            .catch(error => console.log(error))
    }
    
    return(
        <div className="inner-container" style={{backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")'}}>
            <div className="titleContainer">
              <p className="titleText">메시지를 남겨주세요</p>
            </div>
            <div className="Id_container">
                <p className="Id_element">Content</p>
                <input className="Letter_box" type="text" name="content" value={content} onChange={handleContentChange} placeholder="편지를 작성해주세요"/>
            </div>
            <div className="Id_container">
                <p className="Id_element">Name</p>
                <input className="Id_box" type="text" name="name" value={name} onChange={handleNameChange} placeholder="닉네임을 입력하세요(10글자 이하)"/>
            </div>
            <div>
                <button className="light-button" onClick={saveLetterHandler}>
                    <p className="button-text">복주머니 채워주기</p>
                </button>
            </div>
        </div>
    )
}