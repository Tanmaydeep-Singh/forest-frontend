"use client"
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Web3Modal } from "@web3modal/react";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import { WagmiConfig } from "wagmi";
import { ethereumClient, projectId, wagmiConfig } from "../../wagmi.config";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
        <WagmiConfig config={wagmiConfig}>

          <Navbar />
          <div className="flex">{children}</div>
          <Footer />
          </WagmiConfig>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />

        </body>
    </html>
  );
}
