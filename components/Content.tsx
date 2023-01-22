import React from 'react';
import {useStateContext} from "@/context/StateContext";
import PlayerList from "@/components/PlayerList";

const Content = () => {
    const {appData} = useStateContext();
    const {"content": {titleText, sloganText}} = appData;
    return (
        <div className="h-[65%] w-full flex flex-col">
            <h5 className="uppercase font-bold text-lg tracking-wide">{titleText}</h5>
            <h3 className="font-bold text-4xl tracking-wide">{sloganText}</h3>
            <div className="h-full w-full pt-5">
                <PlayerList/>
            </div>
        </div>
    );
};

export default Content;