import React, {useContext, useEffect, useRef, useState} from "react";
import '../styles/app.css';
import axios from "axios";
import html2pdf from "html2pdf.js/src";
import { jsPDF } from "jspdf";
import {useTranslation} from "react-i18next";
import i18n from './i18n.js';
import {dataContext} from "../app";

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
    const {cardData} = useContext(dataContext);

    const maxFontSizeChange = 2;

    const [fontSize1, setFontSize1] = useState(13.5);
    const [fontSize2, setFontSize2] = useState(12.5);
    const [fontSize3, setFontSize3] = useState(7.5);
    const [fontSize4, setFontSize4] = useState(8);
    const [fontSize5, setFontSize5] = useState(7.8);
    const [fontSize6, setFontSize6] = useState(9);
    const [fontSize7, setFontSize7] = useState(9);
    const [fontSize8, setFontSize8] = useState(9);
    const [fontSize9, setFontSize9] = useState(8.5);
    const [fontSize10, setFontSize10] = useState(8.5);
    const [fontSize11, setFontSize11] = useState(8.5);
    const [fontSize12, setFontSize12] = useState(7.8);

    const paragraph1Ref = useRef(null);
    const paragraph2Ref = useRef(null);
    const paragraph3Ref = useRef(null);
    const paragraph4Ref = useRef(null);
    const paragraph5Ref = useRef(null);
    const paragraph6Ref = useRef(null);
    const paragraph7Ref = useRef(null);
    const paragraph8Ref = useRef(null);
    const paragraph9Ref = useRef(null);
    const paragraph10Ref = useRef(null);
    const paragraph11Ref = useRef(null);
    const paragraph12Ref = useRef(null);



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


    function increaseFontSize(setFontSize, fontSize) {
        setFontSize(prevSize => Math.min(prevSize + maxFontSizeChange, fontSize + maxFontSizeChange));
    }
    function decreaseFontSize(setFontSize, fontSize) {
        setFontSize(prevSize => Math.max(prevSize - maxFontSizeChange, fontSize - maxFontSizeChange));
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


    const titleStorage = localStorage.getItem('Title');
    const nameStorage = localStorage.getItem('Name');
    const functionStorage = localStorage.getItem('Function');
    const unitStorage = localStorage.getItem('Unit');
    const departmentStorage = localStorage.getItem('Department');
    const address1Storage = localStorage.getItem('Address1');
    const address2Storage = localStorage.getItem('Address2');
    const phoneStorage = localStorage.getItem('Phone');
    const mobileStorage = localStorage.getItem('Mobile');
    const emailStorage = localStorage.getItem('Email');
    const wwwStorage = localStorage.getItem('WWW');
    const logoStorage = localStorage.getItem('Logo');
    const reverseStorage = localStorage.getItem('Reverse');

    let logoImage;
    switch(cardData.logo){
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
    switch(cardData.reverse){
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
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize1, 13.5)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize1, 13.5)}>-</span>
                            </>
                        )}
                        {cardData.title}
                    </p>

                    <p className="text2 imie-nazwisko" id="content2" contentEditable="true"
                       style={{fontSize: `${fontSize2}px`}}
                       ref={paragraph2Ref}
                       onClick={() => handleClick_(paragraph2Ref)}>
                        {showControls === "content2" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize2, 12.5)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize2, 12.5)}>-</span>
                            </>
                        )}
                        {/*{nameStorage}*/}
                        {cardData.name}
                    </p>

                    <p className="text3 stanowisko" id="content3" contentEditable="true"
                       style={{fontSize: `${fontSize3}px`}}
                       ref={paragraph3Ref}
                       onClick={() => handleClick_(paragraph3Ref)}>
                        {showControls === "content3" && (
                            <>
                                <span className="plus-minus"
                                      onClick={() => increaseFontSize(setFontSize3, 7.5)}>+</span>
                                <span className="plus-minus"
                                      onClick={() => decreaseFontSize(setFontSize3, 7.5)}>-</span>
                            </>
                        )}
                        {cardData.function}
                    </p>

                    <p className="text4 jednostka" id="content4" contentEditable="true"
                       style={{fontSize: `${fontSize4}px`}}
                       ref={paragraph4Ref}
                       onClick={() => handleClick_(paragraph4Ref)}>
                        {showControls === "content4" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize4, 8)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize4, 8)}>-</span>
                            </>
                        )}
                        {cardData.unit}
                    </p>

                    <p className="text9 katedra" id="content5" contentEditable="true"
                       style={{fontSize: `${fontSize5}px`}}
                       ref={paragraph5Ref}
                       onClick={() => handleClick_(paragraph5Ref)}>
                        {showControls === "content5" && (
                            <>
                                <span className="plus-minus"
                                      onClick={() => increaseFontSize(setFontSize5, 7.8)}>+</span>
                                <span className="plus-minus"
                                      onClick={() => decreaseFontSize(setFontSize5, 7.8)}>-</span>
                            </>
                        )}
                        {cardData.department1}
                    </p>
                    <p className="text12 katedra2" id="content12" contentEditable="true"
                       style={{fontSize: `${fontSize12}px`}}
                       ref={paragraph12Ref}
                       onClick={() => handleClick_(paragraph12Ref)}>
                        {showControls === "content12" && (
                            <>
                                <span className="plus-minus"
                                      onClick={() => increaseFontSize(setFontSize12, 7.8)}>+</span>
                                <span className="plus-minus"
                                      onClick={() => decreaseFontSize(setFontSize12, 7.8)}>-</span>
                            </>
                        )}
                        {cardData.department2}
                    </p>
                </div>
                <div className="div2">
                    <p className="text5 wydzial" id="content6" contentEditable="true"
                       style={{fontSize: `${fontSize6}px`}}
                       ref={paragraph6Ref}
                       onClick={() => handleClick_(paragraph6Ref)}>
                        {cardData.address1}
                        {showControls === "content6" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize6, 9)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize6, 9)}>-</span>
                            </>
                        )}
                    </p>

                    <p className="text6 adres" id="content7" contentEditable="true"
                       style={{fontSize: `${fontSize7}px`}}
                       ref={paragraph7Ref}
                       onClick={() => handleClick_(paragraph7Ref)}>
                        {cardData.address2}
                        {showControls === "content7" && (
                            <>
                                <span className="plus-minus"
                                      onClick={() => increaseFontSize(setFontSize7, 9)}>+</span>
                                <span className="plus-minus"
                                      onClick={() => decreaseFontSize(setFontSize7, 9)}>-</span>
                            </>
                        )}
                    </p>

                    <p className="text7 telefon" id="content8" contentEditable="true"
                       style={{fontSize: `${fontSize8}px`}}
                       ref={paragraph8Ref}
                       onClick={() => handleClick_(paragraph8Ref)}>
                        {cardData.mobile}
                        {showControls === "content8" && (
                            <>
                                <span className="plus-minus" onClick={() => increaseFontSize(setFontSize8, 9)}>+</span>
                                <span className="plus-minus" onClick={() => decreaseFontSize(setFontSize8, 9)}>-</span>
                            </>
                        )}
                    </p>

                    <p className="text8 email" id="content9" contentEditable="true"
                       style={{fontSize: `${fontSize9}px`}}
                       ref={paragraph9Ref}
                       onClick={() => handleClick_(paragraph9Ref)}>
                        {cardData.email}
                        {showControls === "content9" && (
                            <>
                                <span className="plus-minus"
                                      onClick={() => increaseFontSize(setFontSize9, 8.5)}>+</span>
                                <span className="plus-minus"
                                      onClick={() => decreaseFontSize(setFontSize9, 8.5)}>-</span>
                            </>
                        )}
                    </p>
                    <p className="text10 www" id="content10" contentEditable="true"
                       style={{fontSize: `${fontSize10}px`}}
                       ref={paragraph10Ref}
                       onClick={() => handleClick_(paragraph10Ref)}>
                        {cardData.www}
                        {showControls === "content10" && (
                            <>
                                <span className="plus-minus"
                                      onClick={() => increaseFontSize(setFontSize10, 8.5)}>+</span>
                                <span className="plus-minus"
                                      onClick={() => decreaseFontSize(setFontSize10, 8.5)}>-</span>
                            </>
                        )}
                    </p>
                    <p className="text11 phone" id="content11" contentEditable="true"
                       style={{fontSize: `${fontSize11}px`}}
                       ref={paragraph11Ref}
                       onClick={() => handleClick_(paragraph11Ref)}>
                        {cardData.phone}
                        {showControls === "content11" && (
                            <>
                                <span className="plus-minus"
                                      onClick={() => increaseFontSize(setFontSize11, 8.5)}>+</span>
                                <span className="plus-minus"
                                      onClick={() => decreaseFontSize(setFontSize11, 8.5)}>-</span>
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
        <button className="link2"><Link to="/">Wstecz</Link></button>
        </body>
    )
}


export default Page2;
