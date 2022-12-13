import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import PagesRouter from './Router/PageRouter';

import ThemeContextProvider from './hooks/useTheme';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

import { AuthProvider } from './hooks/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ThemeContextProvider>
      <ModalsProvider>
        <NotificationsProvider limit={3}>
          <BrowserRouter>
            <PagesRouter/>
          </BrowserRouter>
        </NotificationsProvider>
      </ModalsProvider>
    </ThemeContextProvider>  
  </AuthProvider>  
);

