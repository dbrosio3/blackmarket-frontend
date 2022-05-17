import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from '@/routes/paths';

import { Login } from './Login';
import { Register } from './Register';

export const AuthRoutes = () => (
  <Routes>
    <Route path={PATHS.LOGIN} element={<Login />} />
    <Route path={PATHS.REGISTER} element={<Register />} />
    <Route path="*" element={<Navigate to={PATHS.LOGIN} />} />
  </Routes>
);
