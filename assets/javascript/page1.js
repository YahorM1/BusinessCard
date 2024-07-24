import '../styles/app.css';
import React, {useContext, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import { dataContext } from "../app";



function Page1() {
    const { cardData, setCardData } = useContext(dataContext);
    const handleChange = (e) => {
        setCardData({...cardData, [e.target.name]: e.target.value });
    };


    return (
        <>
            <h1 className="header">Edycja wyzitowki</h1>
            <p> Dane do wizytowki w wersji polskiej</p>

            <div className="container">
                <span>Stopien naukowy/tytul</span>
                <input className="textIn" type="text" name="title" value={cardData.title} onChange={handleChange}/>
            </div>
            <div className="container">
                <span>Imie, nazwisko </span>
                <input className="textIn" type="text" name="name" value={cardData.name} onChange={handleChange}/>
            </div>
            <div className="container">
                <span>Funkcja/Stanowisko </span>
                <input className="textIn" type="text" name="function" value={cardData.function} onChange={handleChange}/>
            </div>
            <div className="container">
                <span>Jednostka</span>
                <select className="textIn" name="unit" value={cardData.unit} onChange={handleChange}>
                    <option>Wybierz wydzial</option>
                    <option>Wydział Chemii</option>
                    <option>Wydział Farmaceutyczny (Collegium Medicum w Bydgoszczy)</option>
                    <option>Wydział Filozofii i Nauk Społecznych</option>
                    <option>Wydział Fizyki, Astronomii i Informatyki Stosowanej</option>
                    <option>Wydział Humanistyczny</option>
                    <option>Wydział Lekarski (Collegium Medicum w Bydgoszczy)</option>
                    <option>Wydział Matematyki i Informatyki</option>
                    <option>Wydział Nauk Biologicznych i Weterynaryjnych</option>
                    <option>Wydział Nauk Ekonomicznych i Zarządzania</option>
                    <option>Wydział Nauk Historycznych</option>
                    <option>Wydział Nauk o Polityce i Bezpieczeństwie</option>
                    <option>Wydział Nauk o Zdrowiu (Collegium Medicum w Bydgoszczy)</option>
                    <option>Wydział Nauk o Ziemi i Gospodarki Przestrzennej</option>
                    <option>Wydział Prawa i Administracji</option>
                    <option>Wydział Sztuk Pięknych</option>
                    <option>Wydział Teologiczny</option>
                </select>
            </div>
            <div className="container">
                <span></span><input className="textIn" type="text" name="department1"
                                    value={cardData.department1} onChange={handleChange}/><br/>
                <span></span><input className="textIn" type="text" name="department2"
                                    value={cardData.department2} onChange={handleChange}/><br/>
            </div>
            <div className="container">
                <span>Adres </span><input className="textIn" type="text" name="address1" value={cardData.address1}
                                          onChange={handleChange}/><br/>
                <span></span><input className="textIn" type="text" name="address2" value={cardData.address2}
                                    onChange={handleChange}/><br/>
            </div>
            <div className="container">
                <span>Telefon/fax </span>
                <input className="textIn" type="text" name="phone" value={cardData.phone} onChange={handleChange}/>
            </div>
            <div className="container">
                <span>Telefon komorkowy </span>
                <input className="textIn" type="text" name="mobile" value={cardData.mobile} onChange={handleChange}/>
            </div>
            <div className="container">
                <span>E-mail </span>
                <input className="textIn" type="text" name="email" value={cardData.email} onChange={handleChange}/>
            </div>
            <div className="container">
                <span>www </span>
                <input className="textIn" type="text" name="www" value={cardData.www} onChange={handleChange}/>
            </div>
            <div className="container">
                <span>Logo </span>
                <select className="textIn" name="logo" value={cardData.logo} onChange={handleChange}>
                    <option defaultValue="UMK">Uniwersytet Mikolaja Kopernika</option>
                    <option value="UMK_WCh">Wydział Chemii</option>
                    <option value="UMK_WFarm">Wydział Farmaceutyczny (Collegium Medicum w Bydgoszczy)</option>
                    <option value="UMK_WFiNS">Wydział Filozofii i Nauk Społecznych</option>
                    <option value="UMK_WFAiIS">Wydział Fizyki, Astronomii i Informatyki Stosowanej</option>
                    <option value="UMK_WH">Wydział Humanistyczny</option>
                    <option value="UMK_WL">Wydział Lekarski (Collegium Medicum w Bydgoszczy)</option>
                    <option value="UMK_WMiI">Wydział Matematyki i Informatyki</option>
                    <option value="UMK_WNBiW">Wydział Nauk Biologicznych i Weterynaryjnych</option>
                    <option value="UMK_WNEiZ">Wydział Nauk Ekonomicznych i Zarządzania</option>
                    <option value="UMK_WNH">Wydział Nauk Historycznych</option>
                    <option value="UMK_WNoPiB">Wydział Nauk o Polityce i Bezpieczeństwie</option>
                    <option value="UMK_WNoZ">Wydział Nauk o Zdrowiu (Collegium Medicum w Bydgoszczy)</option>
                    <option value="UMK_WNoZiGP">Wydział Nauk o Ziemi i Gospodarki Przestrzennej</option>
                    <option value="UMK_WPiA">Wydział Prawa i Administracji</option>
                    <option value="UMK_WSzP">Wydział Sztuk Pięknych</option>
                    <option value="UMK_WT">Wydział Teologiczny</option>
                </select>
            </div>
            <div className="container">
                <span>Dodaj wizytowkę w wersji angielskiej </span>
                <input className="checkIn" type="checkbox"/>
            </div>
            <div className="container">
                <span>Wybierz rewers </span>
                <label className="radioClass">
                    <input type="radio" name="reverse" value="bez_rewersu"
                           onChange={handleChange}/>bez rewersu<br/>
                    <input type="radio" name="reverse" value="rewers_nr_1"
                           onChange={handleChange}/>rewers nr 1<br/>
                    <input type="radio" name="reverse" value="rewers_nr_2"
                           onChange={handleChange}/>rewers nr 2<br/>
                    <input type="radio" name="reverse" value="rewers_nr_3"
                           onChange={handleChange}/>rewers nr 3<br/>
                    <input type="radio" name="reverse" value="rewers_nr_4"
                           onChange={handleChange}/>rewers nr 4<br/>
                </label>
            </div>

            <button className="link1"><Link to="/page2">Podgląd wizytowki</Link></button>
        </>
    )
}

export default Page1;