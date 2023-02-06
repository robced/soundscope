import React from 'react';
import {useStateContext} from "@/context/StateContext";
import {signIn, useSession} from "next-auth/react";

const Banner = () => {
    const {appData} = useStateContext();
    const {"banner": {mainText, sloganText, paragraph}} = appData;
    const {data: session} = useSession();

    return (
        <div className="h-2/4 w-full flex items-center gap-5 bg-[#EFF1EF] rounded-xl p-5 shadow-md">
            <div className="w-1/2 h-full flex flex-col gap-1 justify-evenly">
                <h1 className="text-5xl font-medium tracking-wide text-justify">{mainText}</h1>
                <h3 className="text-2xl font-bold">{sloganText}</h3>
                <p className="text-lg">{paragraph}</p>
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                {session && "Welcome back!"}
                {session
                    ? <button onClick={() => console.log("Load Songs")} className="h-10 w-fit px-10 bg-green-500">Load Songs</button>
                    : <button onClick={() => signIn("spotify")} className="h-10 w-fit px-10 bg-green-500">Log In</button>}
            </div>
        </div>
    );
};

export default Banner;