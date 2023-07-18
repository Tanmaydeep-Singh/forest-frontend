import React, { useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import Image from "next/image";
import lg from "../../public/assets/Logo.png";
interface Props {
  icon?: "show" | "hide";
  label?: string;
  balance?: "show" | "hide";
}

function Navbar() {
  const { open, close } = useWeb3Modal();
  const { address, isConnected, isConnecting, isDisconnected } = useAccount();
  const [nav, setNav] = useState(true);

  return (
    <div>
      <div className=" navbar z-40 bg-[#CEE963] flex justify-between">
        <div className="">
          <a className="btn btn-ghost normal-case text-xl absolute top-[0%]" href="/">
            <Image src={lg} alt="" height={40} />
          </a>
        </div>
        <div className="flex-none">
          <section className="flex lg:hidden absolute top-[3%] right-[10%] z-40">
            <div
              onClick={() => {
                setNav(!nav);
                console.log(nav);
              }}
              className="space-y-2"
            >
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            </div>
          </section>
          <ul
            className={
              nav
                ? "hidden"
                : "bg-[#CEE963]  rounded-b-md absolute flex flex-col justify-evenly z-20 w-[100vw] h-[80vh]   left-0 top-[60px] pl-10 font-semibold text-[24px] "
            }
          >
            <li>
              <a>About</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
            <li>
              <a>NFT</a>
            </li>

            <li>
              {isConnected ? (
                <button
                  className="w-[150px]  h-[50px] rounded-md border border-black bg-[#DEF7E3] color-black  "
                  onClick={() => open()}
                >
                  {address?.slice(0, 4)}{" "}
                </button>
              ) : (
                <button
                  className="w-[150px]  h-[50px] rounded-md border border-black bg-[#DEF7E3] color-black"
                  onClick={() => open()}
                >
                  Connect{" "}
                </button>
              )}
            </li>
            <li>
              <a href="/Profile" className=" p-0 m-0">
                  <Image
									className=" text-xs bg-white w-10 h-10 m-auto mx-5 rounded-[50%]  flex text-center justify-center items-center rounded-[50%]"
									src="https://api.multiavatar.com/Riverr.svg"
									alt="Rank Avatar"
									width="48"
									height="48"
								/>
              </a>
            </li>
          </ul>

          <ul className="menu  md:flex hidden menu-horizontal px-1 ">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a>NFT</a>
            </li>

            <li>
              {isConnected ? (
                <button className=" bg-[#DEF7E3] " onClick={() => open()}>
                  {address?.slice(0, 4)}{" "}
                </button>
              ) : (
                <button className="  bg-[#DEF7E3]" onClick={() => open()}>
                  Connect{" "}
                </button>
              )}
            </li>
            <li>
              <a href="/Profile" className=" p-0 m-0">
                  <Image
									className=" text-xs bg-white w-10 h-10 m-auto mx-5 rounded-[50%]  flex text-center justify-center items-center rounded-[50%]"
									src="https://api.multiavatar.com/Riverr.svg"
									alt="Rank Avatar"
									width="48"
									height="48"
								/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
