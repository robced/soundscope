import React from 'react';
import {Player} from "@/interfaces/AppComponent.interface";
import {useStateContext} from "@/context/StateContext";

const Player = ({id, text, image, background, timeline, production}: Player) => {
    const {songName, songLength, songImageLink, songTimeLeft, artistName} = useStateContext()
    return (
        <div className="w-[430px] bg-gray-400 h-[100px] flex items-center justify-center">
            {image && <div className="bg-gray-200 h-[80px] w-[80px]">s</div>}
            <div
                className={`${text === "minimal" ? "flex-row gap-3" : "flex-col"} ${text === "background" ? "text-right" : "text-center"} h-fit w-fit flex items-center justify-center`}>
                <span className="">{songName}</span>
                {text === "minimal" && <span className="">-</span>}
                <span className="">{artistName}</span>
                {text === "timeline" && <div className="w-[300px] h-5 bg-gray-200">
                    <span className={`bg-black h-[5px] w-full`}></span>
                </div>}
            </div>
        </div>
    );
};

export default Player;