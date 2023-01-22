import React from 'react';
import {useStateContext} from "@/context/StateContext";

const LanguageMenu = () => {
    const languageList = ["EN", "ES"]
    const {setLanguageSelection, showLanguageMenu, setShowLanguageMenu} = useStateContext();

    const handleClick = (lang: String) => {
        setLanguageSelection(lang)
        setShowLanguageMenu(!showLanguageMenu)
    }

    return (
        <div className="absolute h-fit fit bottom-[8vh] right-[-1vw] right-0 flex flex-col">
            {languageList.map((lang, index) => (
                <button onClick={() => handleClick(lang)} className="uppercase tracking-wider text-lg hover:font-bold px-[1vw] py-[1vh]" key={index}>{lang}</button>
            ))}
        </div>
    );
};

export default LanguageMenu;