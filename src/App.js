import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponents';
import LoginComponent from './components/Login';
import SignupComponent from './components/Signup';
import UserpageComponent from './components/Userpage';
import MypageComponent from './components/Mypage';
import MybokComponent from './components/Mybok';
import UserbokComponent from './components/Userbok';
import WriteLetterComponent from './components/WriteLetter';
import BokwithLetterComponent from './components/BokwithLetter';
import ChooseLetter from './components/ChooseLetter';

function App() {
  return (
    <div className="App">
        <HelloComponent/>
        <LoginComponent/>
        <SignupComponent/>
        <UserpageComponent/>
        <MypageComponent/>
        <MybokComponent/>
        <UserbokComponent/>
        <WriteLetterComponent/>
        <BokwithLetterComponent/>
        <ChooseLetter/>
    </div>
  );
}

export default App;
