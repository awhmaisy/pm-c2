import React from 'react';
import Nav from '../components/Nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'PM/C2/DIST',
    description: 'PRECISION MACHINERY Distribution Department'
};

export default function Design() {
    return (
        <div>
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