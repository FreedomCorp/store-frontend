import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../pages/Home';

import Marketplace from '../../pages/Marketplace';
import NotFoundPage from '../../pages/NotFoundPage';
import Register from '../../pages/Authentication/Register';
import Login from '../../pages/Authentication/Login';
import DashboardPath from '../DashboardPath';
import { useContext } from 'react';
import { AuthContext } from '../../hooks/AuthContext';

function PagesRouter() {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path="plugins" element={<Marketplace/>}/>
            <Route path="client" element={<DashboardPath/>}/>
            <Route path="client/:path" element={<DashboardPath/>}/>
            <Route path="client/auth/register" element={<Register/>}/>
            <Route path="client/auth/login" element={<Login/>}/>
            <Route path="*" element={<NotFoundPage/>}/>    
        </Routes>
    );
}

export default PagesRouter;