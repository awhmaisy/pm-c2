import React from 'react';
import Nav from '../components/Nav';
import Head from 'next/head';
import Image from 'next/image';

export default function Design() {
    return (
        <div>
            <Head>
                <title>PM/C2/DIST</title>
            </Head>
            <Nav />
            <p>
                OUR DISTRIBUTION DEPARTMENT supplies various engineering parts and cohesion services to industry, with particular focus on alumninum, stainless steel, titanium and other high-performance materials.
            </p>
            <br />
            <p>
                OUR MANUFACTURING HOUSES are located in nevada and ohio, with final assembly facilities and offices in california.
            </p>  
            <br />  
            <p>
                OUR PLACEMENT HOUSE is currently awaiting its completion.
            </p>  
        </div>
    );
}