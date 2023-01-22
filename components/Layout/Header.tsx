import React from 'react';
import Button from "@/components/Reusables/Button";
import {useStateContext} from "@/context/StateContext";

const Header = () => {
    const {appData} = useStateContext();
    const {"header": {menuLabel, shareLabel}} = appData;
    return (
        <div className="w-full h-full flex items-center justify-between uppercase">
            <Button location="header" text={menuLabel}/>
            <h3 className="text-2xl font-medium">Sound<b className="font-extrabold">Scope</b></h3>
            <Button location="header" text={shareLabel}/>
        </div>
    );
};

export default Header;