import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Body from '../components/Body';
import AuthNavBar from '../components/AuthNavBar';

import HomePage from '../pages/HomePage';

const OtherRoutes = () => {
    return (
        <BrowserRouter>
            <AuthNavBar />

            <Body>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </Body>
        </BrowserRouter >
    );
};

export default OtherRoutes;