import {Dispatch, PropsWithChildren, SetStateAction} from "react";
import EnglishData from "@/assets/languages/en.json";

type LanguageData = typeof EnglishData

export interface AppContext {
    languageSelection: String;
    setLanguageSelection: Dispatch<SetStateAction<String>>;
    appData: LanguageData;
    setAppData: Dispatch<SetStateAction<LanguageData>>;
    showLanguageMenu: Boolean;
    setShowLanguageMenu: Dispatch<SetStateAction<Boolean>>;
    songName: String;
    setSongName: Dispatch<SetStateAction<String>>
    songImageLink: String;
    setSongImageLink: Dispatch<SetStateAction<String>>
    artistName: String;
    setArtistName: Dispatch<SetStateAction<String>>
    songLength: String;
    setSongLength: Dispatch<SetStateAction<String>>
    songTimeLeft: String;
    setSongTimeLeft: Dispatch<SetStateAction<String>>
}

export interface ContextProps extends PropsWithChildren {

}