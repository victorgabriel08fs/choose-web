import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Body from '../components/Body';
import AuthNavBar from '../components/AuthNavBar';

import HomePage from '../pages/HomePage';
import { useAuth } from '../contexts/auth';
import UsersPage from '../pages/UsersPage';
import VotesPage from '../pages/VotesPage';

const AdminRoutes = () => {
    const { user } = useAuth();
    return (
        <BrowserRouter>
            <AuthNavBar />

            <Body>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/users" element={<UsersPage />} />
                    <Route path="/votes" element={<VotesPage />} />
                    <Route path='*' element={<Navigate to="/" />} />
                </Routes>
            </Body>
        </BrowserRouter >
    );
};

export default AdminRoutes;