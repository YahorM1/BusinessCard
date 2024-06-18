import '../styles/app.css';
import React, {useState} from "react";
import {Link} from 'react-router-dom';


function Page1() {
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [function_, setFunction] = useState('');
    const [unit, setUnit] = useState('');
    const [department, setDepartment] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [www, setWWW] = useState('');
    const [reverse, setReverse] = useState('');
    const [logo, setLogo] = useState('');
    function handleTitleChange(event){
        setTitle(event.target.value);
    }
    function handleNameChange(event) {
        setName(event.target.value);
    }
    function handleFunctionChange(event) {
        setFunction(event.target.value);
    }
    function handleUnitChange(event) {
        setUnit(event.target.value);
    }
    function handleDepartmentChange(event) {
        setDepartment(event.target.value);
    }
    function handleAddressChange(event) {
        setAddress(event.target.value);
    }
    function handlePhoneChange(event) {
        setPhone(event.target.value);
    }
    function handleMobileChange(event) {
        setMobile(event.target.value);
    }
    function handleEmailChange(event) {
        setEmail(event.target.value);
    }
    function handleWWWChange(event) {
        setWWW(event.target.value);
    }
    function handleLogoChange(event) {
        setLogo(event.target.value);
    }
    function handleReverseChange(event) {
        setReverse(event.target.value);
    }
    const dataToPass = {
        [title] : title,
        [name]: name,
        [function_] : function_,
        [unit] : unit,
        [department] : department,
        [address] : address,
        [phone] : phone,
        [mobile] : mobile,
        [email] : email,
        [www] : www
    };


    const collect = () => {
        sessionStorage.setItem('Title', title);
        sessionStorage.setItem('Name', name);
        sessionStorage.setItem('Function', function_);
        sessionStorage.setItem('Unit', unit);
        sessionStorage.setItem('Department', department);
        sessionStorage.setItem('Address', address);
        sessionStorage.setItem('Phone', phone);
        sessionStorage.setItem('Mobile', mobile);
        sessionStorage.setItem('Email', email);
        sessionStorage.setItem('WWW', www);
        sessionStorage.setItem('Logo', logo);
        sessionStorage.setItem('Reverse', reverse);
    };


    return (
        <>
            <h1 className="header">Edycja wyzitowki</h1>
            <p> Dane do wizytowki w wersji polskiej</p>

            <div className="container">
                <span>Stopien naukowy/tytul</span>
                <input className="textIn" type="text" id="tytul" value={title} onChange={handleTitleChange}/>
            </div>
            <div className="container">
                <span>Imie, nazwisko </span>
                <input className="textIn" type="text" id="imie" value={name} onChange={handleNameChange}/>
            </div>
            <div className="container">
                <span>Funkcja/Stanowisko </span>
                <input className="textIn" type="text" id="funkcja" value={function_} onChange={handleFunctionChange}/>
            </div>
            <div className="container">
                <span>Jednostka</span>
                <select className="textIn" id="jednostka" value={unit} onChange={handleUnitChange}>
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
                <span></span><input className="textIn" type="text" id="katedra" placeholder="Katedra"
                                    value={department} onChange={handleDepartmentChange}/><br/>
                <span></span><input className="textIn" type="text"/><br/>
            </div>
            <div className="container">
                <span>Adres </span><input className="textIn" type="text" id="adres_wydzialu"
                                    value={unit} onChange={handleUnitChange}/><br/>
                <span></span><input className="textIn" type="text" id="adres" placeholder="adres"
                                    value={address} onChange={handleAddressChange}/><br/>
            </div>
            <div className="container">
                <span>Telefon/fax </span>
                <input className="textIn" type="text" id="telefon" value={phone} onChange={handlePhoneChange}/>
            </div>
            <div className="container">
                <span>Telefon komorkowy </span>
                <input className="textIn" type="text" id="telefon_kom" value={mobile} onChange={handleMobileChange}/>
            </div>
            <div className="container">
                <span>E-mail </span>
                <input className="textIn" type="text" id="email" value={email} onChange={handleEmailChange}/>
            </div>
            <div className="container">
                <span>www </span>
                <input className="textIn" type="text" id="www" value={www} onChange={handleWWWChange}/>
            </div>
            <div className="container">
                <span>Logo </span>
                <select className="textIn" value={logo} onChange={handleLogoChange}>
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
                    <input type="radio" value="bez_rewersu" checked={reverse === "bez_rewersu"}
                           onChange={handleReverseChange}/>bez rewersu<br/>
                    <input type="radio" value="rewers_nr_1" checked={reverse === "rewers_nr_1"}
                           onChange={handleReverseChange}/>rewers nr 1<br/>
                    <input type="radio" value="rewers_nr_2" checked={reverse === "rewers_nr_2"}
                           onChange={handleReverseChange}/>rewers nr 2<br/>
                    <input type="radio" value="rewers_nr_3" checked={reverse === "rewers_nr_3"}
                           onChange={handleReverseChange}/>rewers nr 3<br/>
                    <input type="radio" value="rewers_nr_4" checked={reverse === "rewers_nr_4"}
                           onChange={handleReverseChange}/>rewers nr 4<br/>
                </label>
            </div>

            <button className="link"><Link to="/page2" onClick={collect}>Podgląd wizytowki</Link></button>
        </>
    )
}

export default Page1;