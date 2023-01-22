import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {StateContext} from "@/context/StateContext";
import {SessionProvider} from "next-auth/react";

export default function App({Component, pageProps}: AppProps) {
    return (
        <SessionProvider>
            <StateContext>
                <Component {...pageProps} />
            </StateContext>
        </SessionProvider>
    );
}
