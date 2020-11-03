import React from 'react';
import { Routes } from './routes';
import { Header } from './components/header';

export const App = () => {
    return (
        <>
            <Header />
            <Routes />
        </>
    );
};

export default App;
