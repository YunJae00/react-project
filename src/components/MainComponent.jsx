import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import TitleComponent from './pageComponents/TitleComponent';
import SignUpComponent from './pageComponents/SignUpComponent';
import LoginComponent from './pageComponents/LoginComponent';
import MyBokComponent from './pageComponents/MyBokComponent';
import ChooseLetterComponent from './pageComponents/ChooseLetterComponent';
import WriteLetterComponent from './pageComponents/WriteLetterComponent';
import ErrorComponent from './pageComponents/ErrorComponent';
import AuthProvider, { useAuth } from '../security/AuthContext';
import HeaderComponent from './pageComponents/HeaderComponent';

function AuthenticateRoute({ children }) {
    const storedToken = localStorage.getItem("isLoggedIn");
    if (storedToken === "1") {
        return (
            children
        )
    }
    else {
        return (
            <Navigate to="/" />
        )
    }
}

export default function MainComponent() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="container">
                    <HeaderComponent />
                    <Routes>
                        <Route path='/' element={<TitleComponent />}></Route>
                        <Route path='/auth/login' element={<LoginComponent />}></Route>
                        <Route path='/auth/register' element={<SignUpComponent />}></Route>
                        <Route path='/user' element={
                            <MyBokComponent />
                        }>
                        </Route>
                        <Route path='/user/letters/detail/img' element={
                            <AuthenticateRoute>
                                <ChooseLetterComponent />
                            </AuthenticateRoute>}>
                        </Route>
                        <Route path='/user/letters/detail/text' element={
                            <AuthenticateRoute>
                                <WriteLetterComponent />
                            </AuthenticateRoute>}>
                        </Route>
                        <Route path='*' element={<ErrorComponent />}></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </AuthProvider>
    )
}