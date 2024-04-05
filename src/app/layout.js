"use client";
// import { Inter } from "next/font/google";
import {Navbar, Footer} from "@/components";
import "./globals.css";
import axios from "axios";
import { useEffect } from "react";
// const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      //  className={inter.className}
      >
        <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
