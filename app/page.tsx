import React from 'react';
import Nav from "./components/Nav";
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'C:/PM-C2/HOME',
    description: 'MAIN',
    icons: {
        icon: {
            url: '/favicon.ico',
            sizes: 'any',
        },
    }
};

export default function Home() {
  return (
      <div>
        <Nav />
        <p>
          PRECISION MACHINERY is a two-division company. we practice the creation and cultivation of personal and professional brands through legacy-driven apparel, design services and metalworks.
        </p>
        <div className="flex justify-center pt-12">
          <div className="w-1/2">
            <p>(CTV)</p>
            <br />
              <p>GARMENT LABORATORY</p>
              <p>METALLURGY STUDIO</p>
              <p>PRIVATE DIST. NEWSLETTER</p>
              <p>HARDWARE, PARTS MFG.</p>
          </div>
          <div className="w-1/2">
            <p>(CLT)</p>
            <br />
              <p>INTERVIEW OF INTENT</p>
              <p>DESIGN SYSTEMS (PRINT, WEB)</p>
              <p>NARRATIVE COMMAND</p>
              <p>BLACK BOX PLANNING</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/INV-GENESIS319 1.png"
            alt="Home Page Image"
            width={300}
            height={300}
            className="mb-4"
          />
        </div>
      </div>
  );
}