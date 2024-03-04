import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom"

export default function ChooseLetterComponent() {

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const bokUsername = params.get('username');

    const [selectedLetter, setSelectedLetter] = useState(null);
    const handleClick = (index) => {
        setSelectedLetter(index);
    };
    const handleLetterClick = (letterId) => {
        setSelectedLetter(letterId);
    };

    const navigate = useNavigate()
    function nextHandle() {
        navigate(`/user/letters/detail/text?username=${bokUsername}&selectedLetter=${selectedLetter}`)
    }

    return (
        <div className="inner-container" style={{ backgroundImage: 'url("https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/01/urbanbrush-20220127133732902351.jpg")' }}>
            <div className="titleContainer">
                <p className="titleText">쪽지를</p>
                <span className="spacing"></span>
                <p className="titleText">선택하세요</p>
            </div>
            <div className="letterContainer">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
                    <div
                        key={index}
                        className={`letter_img_box ${selectedLetter === index ? 'selected' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        <img className="letter_img" src={`/letter${index}.png`} alt={`쪽지 ${index}`} onClick={() => handleLetterClick(index)} />
                    </div>
                ))}
            </div>
            <div>
                <button className="light-button" onClick={nextHandle}>
                    <p className="button-text">다음으로</p>
                </button>
            </div>
        </div>
    )
}