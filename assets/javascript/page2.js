import React, {useEffect, useRef, useState} from "react";
import '../styles/app.css';
import axios from "axios";
import html2pdf from "html2pdf.js/src";
import { jsPDF } from "jspdf";
import {useTranslation} from "react-i18next";
import i18n from './i18n.js';

import UMK_Logo from '../wizytowki/UMK.jpg';
import UMK_WCh_Logo from '../wizytowki/UMK_WCh.jpg';
import UMK_WFarm_Logo from '../wizytowki/UMK_WFarm.jpg';
import UMK_WFiNS_Logo from '../wizytowki/UMK_WFiNS.jpg';
import UMK_WFAiIS_Logo from '../wizytowki/UMK_WFAiIS.jpg';
import UMK_WH_Logo from '../wizytowki/UMK_WH.jpg';
import UMK_WL_Logo from '../wizytowki/UMK_WL.jpg';
import UMK_WMiI_Logo from '../wizytowki/UMK_WMiI.jpg';
import UMK_WNBiW_Logo from '../wizytowki/UMK_WNBiW.jpg';
import UMK_WNEiZ_Logo from '../wizytowki/UMK_WNEiZ.jpg';
import UMK_WNH_Logo from '../wizytowki/UMK_WNH.jpg';
import UMK_WNoPiB_Logo from '../wizytowki/UMK_WNoPiB.jpg';
import UMK_WNoZ_Logo from '../wizytowki/UMK_WNoZ.jpg';
import UMK_WNoZiGP_Logo from '../wizytowki/UMK_WNoZiGP.jpg';
import UMK_WPiA_Logo from '../wizytowki/UMK_WPiA.jpg';
import UMK_WSzP_Logo from '../wizytowki/UMK_WSzP.jpg';
import UMK_WT_Logo from '../wizytowki/UMK_WT.jpg';

import reverse1 from '../wizytowki/UMKwizrewers1.jpg';
import reverse2 from '../wizytowki/UMKwizrewers2.jpg';
import reverse3 from '../wizytowki/UMKwizrewers3.jpg';
import reverse4 from '../wizytowki/UMKwizrewers4.jpg';
import {Link} from "react-router-dom";



function Page2() {
    const defaultFontSize = 7;
    const maxFontSizeChange = 2;

    const [fontSize1, setFontSize1] = useState(defaultFontSize);
    const [fontSize2, setFontSize2] = useState(defaultFontSize);
    const [fontSize3, setFontSize3] = useState(defaultFontSize);
    const [fontSize4, setFontSize4] = useState(defaultFontSize);
    const [fontSize5, setFontSize5] = useState(defaultFontSize);
    const [fontSize6, setFontSize6] = useState(defaultFontSize);
    const [fontSize7, setFontSize7] = useState(defaultFontSize);
    const [fontSize8, setFontSize8] = useState(defaultFontSize);
    const [fontSize9, setFontSize9] = useState(defaultFontSize);

    const paragraph1Ref = useRef(null);
    const paragraph2Ref = useRef(null);
    const paragraph3Ref = useRef(null);
    const paragraph4Ref = useRef(null);
    const paragraph5Ref = useRef(null);
    const paragraph6Ref = useRef(null);
    const paragraph7Ref = useRef(null);
    const paragraph8Ref = useRef(null);
    const paragraph9Ref = useRef(null);



    const [showControls, setShowControls] = useState(null);

    const handleClick_ = (paragraphRef) => {
        const paragraphId = paragraphRef.current.id;
        setShowControls(paragraphId);
    };
    const handleDocumentClick = (event) => {
        const clickedElement = event.target;
        if (showControls && !clickedElement.closest(`#${showControls}`)) {
            setShowControls(null);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleDocumentClick);
        return () => document.removeEventListener('click', handleDocumentClick);
    }, [showControls]);


    function increaseFontSize(setFontSize) {
        setFontSize(prevSize => Math.min(prevSize + maxFontSizeChange, defaultFontSize + maxFontSizeChange));
    }
    function decreaseFontSize(setFontSize) {
        setFontSize(prevSize => Math.max(prevSize - maxFontSizeChange, defaultFontSize - maxFontSizeChange));
    }

    function generatePDF() {
        const page = document.getElementById('card');
        const page1 = document.getElementById('card1');
        const page2 = document.getElementById('card2');

        const config = {
            filename: 'wizytowka.pdf',
            // pagebreak: { mode: 'css', after: '.page-break' },
            image: { type: 'png', quality: 1 },
            html2canvas: { scale: 8, logging: true, dpi: 500, letterRendering: true },
            jsPDF: { unit: 'mm', format: [96, 56], orientation: 'landscape' }
        };

        html2pdf().set(config).from(page1).toPdf().get('pdf').then(function (pdf) {
            pdf.addPage();
        }).set(config).from(page2).toContainer().toCanvas().toPdf().save('wizytowka.pdf');
    }


    const titleStorage = sessionStorage.getItem('Title');
    const nameStorage = sessionStorage.getItem('Name');
    const functionStorage = sessionStorage.getItem('Function');
    const unitStorage = sessionStorage.getItem('Unit');
    const departmentStorage = sessionStorage.getItem('Department');
    const addressStorage = sessionStorage.getItem('Address');
    const phoneStorage = sessionStorage.getItem('Phone');
    const mobileStorage = sessionStorage.getItem('Mobile');
    const emailStorage = sessionStorage.getItem('Email');
    const wwwStorage = sessionStorage.getItem('WWW');
    const logoStorage = sessionStorage.getItem('Logo');
    const reverseStorage = sessionStorage.getItem('Reverse');

    let logoImage;
    switch(logoStorage){
        case 'UMK_WCh':
            logoImage = <img src={UMK_WCh_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WFarm':
            logoImage = <img src={UMK_WFarm_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WFiNS':
            logoImage = <img src={UMK_WFiNS_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WFAiIS':
            logoImage = <img src={UMK_WFAiIS_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WH':
            logoImage = <img src={UMK_WH_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WL':
            logoImage = <img src={UMK_WL_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WMiI':
            logoImage = <img src={UMK_WMiI_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WNBiW':
            logoImage = <img src={UMK_WNBiW_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WNEiZ':
            logoImage = <img src={UMK_WNEiZ_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WNH':
            logoImage = <img src={UMK_WNH_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WNoPiB':
            logoImage = <img src={UMK_WNoPiB_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WNoZ':
            logoImage = <img src={UMK_WNoZ_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WNoZiGP':
            logoImage = <img src={UMK_WNoZiGP_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WPiA':
            logoImage = <img src={UMK_WPiA_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WSzP':
            logoImage = <img src={UMK_WSzP_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        case 'UMK_WT':
            logoImage = <img src={UMK_WT_Logo} alt="Logo" className="backgroundImg"/>;
            break;
        default:
            logoImage = <img src={UMK_Logo} alt="Logo" className="backgroundImg"/>;
            break;
    }

    let reverseImage;
    switch(reverseStorage){
        case 'rewers_nr_1':
            reverseImage = <img src={reverse1} alt="Reverse" className="reverseImg"/>
            break;
        case 'rewers_nr_2':
            reverseImage = <img src={reverse2} alt="Reverse" className="reverseImg"/>
            break;
        case 'rewers_nr_3':
            reverseImage = <img src={reverse3} alt="Reverse" className="reverseImg"/>
            break;
        case 'rewers_nr_4':
            reverseImage = <img src={reverse4} alt="Reverse" className="reverseImg"/>
            break;
    }

    return (
        <body id="card" className="page2Body">
        <div id="card1" className="PageContent">
            {logoImage}
            <div className="container_page2">
                <div className="div1">
                    <p className="text1 tytul" id="content1" contentEditable="true"
                       style={{fontSize: `${fontSize1}px`}}
                       ref={paragraph1Ref}
                        onClick={() => handleClick_(paragraph1Ref)}>
                        {showControls === "content1" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize1)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize1)}>-</span>
                            </>
                        )}
                        {titleStorage}
                    </p>

                    <p className="text2 imie-nazwisko" id="content2" contentEditable="true"
                       style={{fontSize: `${fontSize2}px`}}
                       ref={paragraph2Ref}
                        onClick={() => handleClick_(paragraph2Ref)}>
                        {showControls === "content2" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize2)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize2)}>-</span>
                            </>
                        )}
                        {nameStorage}
                    </p>

                    <p className="text3 stanowisko" id="content3" contentEditable="true"
                       style={{fontSize: `${fontSize3}px`}}
                       ref={paragraph3Ref}
                        onClick={() => handleClick_(paragraph3Ref)}>
                        {showControls === "content3" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize3)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize3)}>-</span>
                            </>
                        )}
                        {functionStorage}
                    </p>

                    <p className="text4 jednostka" id="content4" contentEditable="true"
                       style={{fontSize: `${fontSize4}px`}}
                       ref={paragraph4Ref}
                        onClick={() => handleClick_(paragraph4Ref)}>
                        {showControls === "content4" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize4)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize4)}>-</span>
                            </>
                        )}
                        {unitStorage}
                    </p>

                    <p className="text9 katedra" id="content5" contentEditable="true"
                       style={{fontSize: `${fontSize5}px`}}
                       ref={paragraph5Ref}
                        onClick={() => handleClick_(paragraph5Ref)}>
                        {showControls === "content5" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize5)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize5)}>-</span>
                            </>
                        )}
                        {departmentStorage}
                    </p>
                </div>
                <div className="div2">
                    <p className="text5 wydzial" id="content6" contentEditable="true"
                       style={{fontSize: `${fontSize6}px`}}
                       ref={paragraph6Ref}
                        onClick={() => handleClick_(paragraph6Ref)}>
                        {unitStorage}
                        {showControls === "content6" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize6)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize6)}>-</span>
                            </>
                        )}
                    </p>

                    <p className="text6 adres" id="content7" contentEditable="true"
                       style={{fontSize: `${fontSize7}px`}}
                       ref={paragraph7Ref}
                        onClick={() => handleClick_(paragraph7Ref)}>
                        {addressStorage}
                        {showControls === "content7" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize7)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize7)}>-</span>
                            </>
                        )}
                    </p>

                    <p className="text7 telefon" id="content8" contentEditable="true"
                       style={{fontSize: `${fontSize8}px`}}
                       ref={paragraph8Ref}
                        onClick={() => handleClick_(paragraph8Ref)}>
                        {mobileStorage}
                        {showControls === "content8" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize8)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize8)}>-</span>
                            </>
                        )}
                    </p>

                    <p className="text8 email" id="content9" contentEditable="true"
                       style={{fontSize: `${fontSize9}px`}}
                       ref={paragraph9Ref}
                        onClick={() => handleClick_(paragraph9Ref)}>
                        {emailStorage}
                        {showControls === "content9" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize9)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize9)}>-</span>
                            </>
                        )}
                    </p>
                </div>
            </div>
        </div>
        <br/>
        <div id="card2" className="PageContent_2">
            {reverseImage}
        </div>

        <button onClick={generatePDF}>Eksportuj do PDF</button>
        </body>
    )
}


export default Page2;
