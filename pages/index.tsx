import Head from 'next/head'
import Header from "@/components/Layout/Header";
import React from "react";
import Footer from "@/components/Layout/Footer";
import Banner from "@/components/Banner";
import Content from "@/components/Content";
import NextAuth from "next-auth";
import getCurrentlyPlaying from "@/pages/api/spotify";
import {getSession, useSession} from "next-auth/react";


export default function Home() {
    const {data: session} = useSession()

    // if (session) {
    //     getCurrentlyPlaying((session.user as any).token.access_token).then((data) => console.log("Loaded: ", data))
    // }


    return (
        <div className="h-screen w-screen overflow-hidden px-[5vw] font-cabin">
            <Head>
                <title>SoundScope</title>
                <meta name="description" content="Show what you are currently listening to."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <header className="h-[10vh] w-full">
                <Header/>
            </header>
            <main className="h-[80vh] w-full flex flex-col justify-between">
                <Banner/>
                <Content/>
            </main>
            <footer className="h-[10vh] w-full">
                <Footer/>
            </footer>
        </div>
    )
}