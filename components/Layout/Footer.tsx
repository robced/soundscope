import React, {useState} from 'react';
import Button from "@/components/Reusables/Button";
import {useStateContext} from "@/context/StateContext";
import LanguageMenu from "@/components/LanguageMenu";

const Footer = () => {
    const {languageSelection, appData, showLanguageMenu, setShowLanguageMenu} = useStateContext();
    const {"footer": {mainText}} = appData;

    const handleClick = () => {
        setShowLanguageMenu(!showLanguageMenu);
    }

    return (
        <div className="w-full h-full flex items-center justify-between opacity-50 relative">
            <span className=""></span>
            <h5 className="">{mainText}</h5>
            <Button location="footer" text={languageSelection} onClick={() => handleClick()}/>
            {showLanguageMenu && <LanguageMenu />}
        </div>
    );
};

export default Footer;