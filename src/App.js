import logo from './logo.svg';
import './App.css';
import HelloComponent from './components/HelloComponents';
import LoginComponent from './components/Login';
import SignupComponent from './components/Signup';
import UserpageComponent from './components/Userpage';
import MypageComponent from './components/Mypage';

function App() {
  return (
    <div className="App">
        <HelloComponent/>
        <LoginComponent/>
        <SignupComponent/>
        <UserpageComponent/>
        <MypageComponent/>
    </div>
  );
}

export default App;
