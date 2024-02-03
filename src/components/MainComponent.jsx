import {BrowserRouter, Routes, Route} from 'react-router-dom'

import TitleComponent from './pageComponents/TitleComponent';
import SignUpComponent from './pageComponents/SignUpComponent';
import LoginComponent from '../components2/Login';
import UserbokComponent from './pageComponents/UserBokComponent';
import MyBokComponent from './pageComponents/MyBokComponent';
import ChooseLetterComponent from './pageComponents/ChooseLetterComponent';
import WriteLetterComponent from './pageComponents/WriteLetterComponent';
import ErrorComponent from './pageComponents/ErrorComponent';


export default function MainComponent(){
    return(
        <BrowserRouter>
            <div className="container">
                    <Routes>
                        <Route path='/' element={ <TitleComponent /> }></Route>
                        <Route path='/auth/login' element={ <LoginComponent /> }></Route>
                        <Route path='/auth/register' element={ <SignUpComponent /> }></Route>
                        <Route path='/user/:username/bok' element={ <UserbokComponent /> }></Route>
                        <Route path='/user/mybok' element={ <MyBokComponent /> }></Route>
                        <Route path='/user/:username/letters/detail/img' element={ <ChooseLetterComponent /> }></Route>
                        <Route path='/user/:username/letters/detail/text' element={ <WriteLetterComponent /> }></Route>
                        <Route path='*' element={ <ErrorComponent /> }></Route>
                    </Routes>
            </div>
        </BrowserRouter>
    )
}