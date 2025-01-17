import React from 'react';
import Nav from '../components/Nav';
import Head from 'next/head';

export default function Dispatch() {
    return (
        <div>
            <Head>
                <title>PM/C2/DISPATCH</title>
            </Head>
            <Nav />
            <div>        
                <p>TO FORWARD A TRANSMISSION, please heed warning. you are not currently permitted to commune with our laboratory. please return to your home and await further instructions.</p>
            </div>
        </div>
    );
}