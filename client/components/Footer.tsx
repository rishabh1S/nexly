import React from "react";
import Image from "next/image";
import { FaXTwitter, FaYoutube, FaInstagram, FaDiscord } from "react-icons/fa6";
import Wrapper from "./Wrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#FAFBFC] text-[#282C3F] pt-14 pb-3">
      <Wrapper className="flex justify-between flex-col md:flex-row gap-[50px] md:gap-0">
        <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] flex-col md:flex-row">
          <div className="flex flex-col gap-3 shrink-0">
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              Find a store
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              become a partner
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              sign up for email
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              send us feedback
            </div>
            <div className="font-oswald font-medium uppercase text-sm cursor-pointer">
              student discount
            </div>
          </div>
          <div className="flex gap-[50px] md:gap-[75px] lg:gap-[100px] shrink-0">
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                Get help
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#535766] cursor-pointer">
                Order Status
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#535766] cursor-pointer">
                Delivery
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#535766] cursor-pointer">
                Returns
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#535766] cursor-pointer">
                Payment Options
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#535766] cursor-pointer">
                Contact Us
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="font-oswald font-medium uppercase text-sm">
                About Us
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#535766] cursor-pointer">
                News
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#535766] cursor-pointer">
                Careers
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#535766] cursor-pointer">
                Investors
              </div>
              <div className="text-sm text-zinc-900 hover:text-[#5357669 cursor-pointer">
                Sustainability
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-center gap-4">
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              href="https://twitter.com/Rishabh1xs"
              target="_blank"
              className="w-10 h-10 rounded-full bg-black/[0.15] flex items-center justify-center text-gray-500 hover:bg-black/[0.25] cursor-pointer"
            >
              <FaXTwitter size={20} />
            </Link>
            <Link
              href="https://youtube.com/@rishabh1s"
              target="_blank"
              className="w-10 h-10 rounded-full bg-black/[0.15] flex items-center justify-center text-gray-500 hover:bg-black/[0.25] cursor-pointer"
            >
              <FaYoutube size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/rishabh1s/"
              target="_blank"
              className="w-10 h-10 rounded-full bg-black/[0.15] flex items-center justify-center text-gray-500 hover:bg-black/[0.25] cursor-pointer"
            >
              <FaInstagram size={20} />
            </Link>
            <div className="w-10 h-10 rounded-full bg-black/[0.15] flex items-center justify-center text-gray-500 hover:bg-black/[0.25] cursor-pointer">
              <FaDiscord size={20} />
            </div>
          </div>
          <div>
            <Image
              src="/payment.png"
              alt="payment methods"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Wrapper>
      <Wrapper className="flex justify-between mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-black/[0.8] hover:text-black cursor-pointer text-center md:text-left">
          &#64; Copyright {new Date().getFullYear()} Nexly, All Rights Reserved
        </div>
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-black/[0.8] hover:text-black cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-black/[0.8] hover:text-black cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-black/[0.8] hover:text-black cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-black/[0.8] hover:text-black cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
