import React from 'react';
import Nav from '../components/Nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'C:/PM-C2/DISPATCH',
    description: 'DISPATCH',
    icons: {
        icon: {
            url: '/favicon.ico',
            sizes: 'any',
        },
    }
};

export default function Dispatch() {
    return (
        <div>
            <Nav />
            <div>        
                <p>TO FORWARD A TRANSMISSION, please heed warning. you are not currently permitted to commune with our laboratory. please return to your home and await further instructions.</p>
            </div>
        </div>
    );
}