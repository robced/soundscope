import React from 'react';
import {Player} from "@/interfaces/AppComponent.interface";

const Player = ({id, text, image, background, timeline}: Player) => {
    return (
        <div className="w-[430px] bg-gray-400 h-[100px]">
            Player
        </div>
    );
};

export default Player;