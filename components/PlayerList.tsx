import React from 'react';
import Player from "@/components/Reusables/Player";

const PlayerList = () => {
    const playersArr = [
        {
            id: 0,
            name: "timeline",
            image: false,
            background: false,
            timeline: true,
        }, {
            id: 1,
            name: "minimal",
            image: false,
            background: false,
            timeline: false,
        }, {
            id: 2,
            name: "cover",
            image: true,
            background: false,
            timeline: false,
        }, {
            id: 3,
            name: "background",
            image: false,
            background: true,
            timeline: true,
        }
    ];

    return (
        <div className="w-full h-full grid grid-cols-3">
                {playersArr.map(({id, name, image, background, timeline
                }) => (
                    <Player key={id} text={name} image={image} background={background} timeline={timeline} />
                ))}
        </div>
    );
};

export default PlayerList;