import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import GlobalStyle from './styles/Global';

import {AuthProvider} from './hooks/AuthContext';

const App: React.FC = () => (
    <>
    <BrowserRouter>
    <AuthProvider>
        <Routes />
    </AuthProvider>
    </BrowserRouter>
    <GlobalStyle />
    </>
)

export default App;
