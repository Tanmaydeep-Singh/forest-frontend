import React, { useState } from "react";
import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";
import Image from "next/image";
import { Web3Button } from "@web3modal/react";
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
          <a className="btn btn-ghost normal-case text-xl absolute top-[0%]">
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
                nav ? "hidden" : "bg-[#CEE963]  rounded-b-md absolute flex flex-col justify-evenly z-20 w-[100vw] h-[80vh]   left-0 top-[60px] pl-10 font-semibold text-[20px] "
              }
            >
              <li >
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
                  <button className="w-[150px]  h-[50px] rounded-md border border-black bg-[#DEF7E3] color-black  " onClick={() => open()}>
                    {address?.slice(0, 4)}{" "}
                  </button>
                ) : (
                  <button className="w-[150px]  h-[50px] rounded-md border border-black bg-[#DEF7E3] color-black" onClick={() => open()}>
                    Connect{" "}
                  </button>
                )}
              </li>
          </ul>


          <ul className="menu  md:flex hidden menu-horizontal px-1 ">
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
                <button className=" bg-[#DEF7E3] " onClick={() => open()}>
                  {address?.slice(0, 4)}{" "}
                </button>
              ) : (
                <button className="  bg-[#DEF7E3]" onClick={() => open()}>
                  Connect{" "}
                </button>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
