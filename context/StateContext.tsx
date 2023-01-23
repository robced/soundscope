import {createContext, useContext, useEffect, useState} from "react";
import {AppContext, ContextProps} from "@/interfaces/AppContext.interface";
import EnglishData from "@/assets/languages/en.json";
import SpanishData from "@/assets/languages/es.json"

const Context = createContext({} as AppContext);

export const StateContext = ({children}: ContextProps) => {
    const [languageSelection, setLanguageSelection] = useState<String>("EN");
    const [showLanguageMenu, setShowLanguageMenu] = useState<Boolean>(false)
    const [appData, setAppData] = useState(EnglishData)

    const [songName, setSongName] = useState<String>("Your Love - (Déjà Vu)");
    const [artistName, setArtistName] = useState<String>("Glass Animals");
    const [songImageLink, setSongImageLink] = useState<String>("");
    const [songLength, setSongLength] = useState<String>("");
    const [songTimeLeft, setSongTimeLeft] = useState<String>("")


    useEffect(() => {
        switch (languageSelection) {
            case "EN":
                setAppData(EnglishData)
                break;
            case "ES":
                setAppData(SpanishData)
                break;
        }
    }, [languageSelection, setLanguageSelection, appData, setAppData]);


    return (
        <Context.Provider value={{
            languageSelection,
            setLanguageSelection,
            appData,
            setAppData,
            showLanguageMenu,
            setShowLanguageMenu,
            songName, setSongName,
            songImageLink, setSongImageLink,
            artistName, setArtistName,
            songLength, setSongLength,
            songTimeLeft, setSongTimeLeft
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);