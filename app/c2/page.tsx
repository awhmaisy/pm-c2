import React from 'react';
import Nav from '../components/Nav';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'C:/PM-C2/DESIGN',
    description: 'DESIGN',
    icons: {
        icon: {
            url: '/favicon.ico',
            sizes: 'any',
        },
    }
};

export default function C2() {
    return (
        <div>
            <Nav />
            <h1>C² -- CREATIVITY AND CULTIVATION</h1>
            <br />
            <p>OUR LAB DIVISION is a fashion-house in productive servitude of the American country and its future as a dominating force in aerospace, weaponry and technology. we are inspired by the loyalty and bravery of the U.S. and often produce collections in honor of those values.</p>
            <br />
            <p>OUR DESIGN DIVISION serves both startup and corporate brands in their formation of community faith and devotion. we evaluate the motive of a company and produce a manifesto and design system in accordance to those initiatives. we work on an client-basis and do not accept applications or offer consultations.</p>
        </div>
    );
}