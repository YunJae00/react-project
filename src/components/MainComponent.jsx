import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import TitleComponent from './pageComponents/TitleComponent';
import SignUpComponent from './pageComponents/SignUpComponent';
import LoginComponent from './pageComponents/LoginComponent';
import UserbokComponent from './pageComponents/UserBokComponent';
import MyBokComponent from './pageComponents/MyBokComponent';
import ChooseLetterComponent from './pageComponents/ChooseLetterComponent';
import WriteLetterComponent from './pageComponents/WriteLetterComponent';
import ErrorComponent from './pageComponents/ErrorComponent';
import AuthProvider, { useAuth } from '../security/AuthContext';

function AuthenticateRoute({ children }) {
    const authContext = useAuth()
    if (authContext.isAuthenticated) {
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
                    <Routes>
                        <Route path='/' element={<TitleComponent />}></Route>
                        <Route path='/auth/login' element={<LoginComponent />}></Route>
                        <Route path='/auth/register' element={<SignUpComponent />}></Route>
                        <Route path='/user/:username/bok' element={
                            <AuthenticateRoute>
                                <UserbokComponent />
                            </AuthenticateRoute>}>
                        </Route>
                        <Route path='/user/mybok' element={
                            <AuthenticateRoute>
                                <MyBokComponent />
                            </AuthenticateRoute>}>
                        </Route>
                        <Route path='/user/:username/letters/detail/img' element={
                            <AuthenticateRoute>
                                <ChooseLetterComponent />
                            </AuthenticateRoute>}>
                        </Route>
                        <Route path='/user/:username/letters/detail/text' element={
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