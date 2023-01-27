import Head from 'next/head'
import Header from "@/components/Layout/Header";
import React from "react";
import Footer from "@/components/Layout/Footer";
import Banner from "@/components/Banner";
import Content from "@/components/Content";

export default function Home() {

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