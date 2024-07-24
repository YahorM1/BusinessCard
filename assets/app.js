import './styles/app.css';
import './bootstrap';

import Page1 from "./javascript/page1";
import Page2 from "./javascript/page2";
import Layout from "./javascript/button";
import React, {createContext, useEffect, useState} from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { createRoot } from 'react-dom/client';

export const dataContext = createContext();
export default function App() {
    const [cardData, setCardData] = useState(() => {
        const savedData = sessionStorage.getItem('cardData');
        return savedData ? JSON.parse(savedData) : {
            title: '',
            name: '',
            function: '',
            unit: '',
            department1: '',
            department2: '',
            address1: '',
            address2: '',
            phone: '',
            mobile: '',
            email: '',
            www: '',
            logo: 'UMK',
            reverse: 'bez_rewersu'
        };
    });

    useEffect(() => {
        sessionStorage.setItem('cardData', JSON.stringify(cardData));
    }, [cardData]);

    return(
        <BrowserRouter>
            <dataContext.Provider value={{ cardData, setCardData }}>
                <div>
                    <Routes>
                        <Route path="/" element={<Page1 />} />
                        <Route path="page2" element={<Page2 />} />
                        <Route path="generate-pdf"/>
                    </Routes>
                </div>
            </dataContext.Provider>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(<App/>);