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
}

export interface ContextProps extends PropsWithChildren {

}