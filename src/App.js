import './App.css';
import HelloComponent from './components2/HelloComponents';
import LoginComponent from './components2/Login';
import SignupComponent from './components2/Signup';
import UserpageComponent from './components2/Userpage';
import MypageComponent from './components2/Mypage';
import MybokComponent from './components2/Mybok';
import UserbokComponent from './components2/Userbok';
import WriteLetterComponent from './components2/WriteLetter';
import BokwithLetterComponent from './components2/BokwithLetter';
import ChooseLetter from './components2/ChooseLetter';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className="App">
        {/* <HelloComponent/>
        <LoginComponent/>
        <SignupComponent/>
        <UserpageComponent/>
        <MypageComponent/>
        <MybokComponent/>
        <UserbokComponent/>
        <WriteLetterComponent/>
        <BokwithLetterComponent/>
        <ChooseLetter/> */}
        <MainComponent />
    </div>
  );
}

export default App;
