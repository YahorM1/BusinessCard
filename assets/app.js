import './styles/app.css';
import './bootstrap';

import Page1 from "./javascript/page1";
import Page2 from "./javascript/page2";
import Layout from "./javascript/button";
import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import i18n from './javascript/i18n.js';


export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page1 />} />
                <Route path="page2" element={<Page2 />} />
                <Route path="generate-pdf"/>
            </Routes>
        </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(<App/>);