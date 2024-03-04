import { useEffect, useState } from "react";
import { executeUserDetailsService } from "../../api/AuthenticationApiService";
import { useLocation, useNavigate } from "react-router-dom";

export default function MyBokComponent() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const bokUsername = params.get('username');

    const [username, setUsername] = useState(null)
    const [letterCount, setLetterCount] = useState(0)
    const [letters, setLetters] = useState([])

    const [userEqual, setUserEqual] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const email = bokUsername
        if (email === localStorage.getItem("username")) {
            setUserEqual(true)
        }
        getUserDetail(email)
    }, []);

    async function getUserDetail(email) {
        try {
            const response = await executeUserDetailsService(email)
            if (response.status === 200) {
                setUsername(response.data.nickname)
                setLetterCount(response.data.letters.length)
                setLetters(response.data.letters)
                console.log(response.data.letters)
            } else {

            }
        } catch (error) {
            return error;
        }
    }

    function handleBok(){
        navigate(`/user/letters/detail/img?username=${bokUsername}`)
    }

    return (
        <div className="inner-container" style={{ backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")' }}>
            <div className="titleContainer">
                <p className="greenText">{username}의</p>
                <span className="spacing"></span>
                <p className="titleText">복주머니</p>
            </div>
            <div><p className="letterCountText">{letterCount}개의 쪽지</p></div>
            <div class="bok-container">
                <div class="letters-container">
                    {letters.map((letter, index) => (
                        <div key={letter.id} className="letterBox">
                            <img src="/letter1.png" alt="편지 이미지" className="letter-img" />
                            <p>{letter.createUsername}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <div className="arrow-container">
                    <img className="arrow" src="/왼쪽 화살표.png"></img>
                    <img className="arrow" src="/오른쪽 화살표.png"></img>
                </div>
            </div>
            {userEqual &&
                <div>
                    <button className="light-button">
                        <p className="button-text">내 링크 복사하기</p>
                    </button>
                </div>
            }
            {!userEqual &&
                <div>
                    <button className="light-button" onClick={handleBok}>
                        <p className="button-text">복주머니 채워주기</p>
                    </button>
                </div>
            }
        </div>
    )
}