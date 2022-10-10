import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Body from '../components/Body';
import NoAuthNavBar from '../components/NoAuthNavBar';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';

const SignRoutes = () => {
    return (
        <BrowserRouter>
            <NoAuthNavBar />

            <Body>
                <Routes>
                    {/* <Route path='*' element={<Navigate to="/login" />} /> */}
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignupPage />} />
                </Routes>
            </Body>
        </BrowserRouter>
    );
};

export default SignRoutes;