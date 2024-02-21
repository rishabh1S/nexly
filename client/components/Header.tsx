"use client";

import { RootState } from "@/store/store";
import { fetchDataFromApi } from "@/utils/api";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { VscChromeClose } from "react-icons/vsc";
import { useSelector } from "react-redux";
import { Menu, MenuMobile, Wrapper } from ".";
import { CategoryMenu } from "../utils/types";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState<CategoryMenu[]>([]);
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { wishlistItems } = useSelector((state: RootState) => state.wishlist);

  useEffect(() => {
    const controlNavbar = () => {
      const scrollY = window.scrollY;
      if (scrollY > 200) {
        setShow(
          scrollY > lastScrollY && !mobileMenu
            ? "-translate-y-[80px]"
            : "shadow-sm"
        );
      } else {
        setShow("translate-y-0 shadow-[0_4px_12px_rgb(0,0,0,0.05)]");
      }
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, mobileMenu]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await fetchDataFromApi("/api/categories?populate=*");
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <div
      className={`w-full h-12 md:h-20 bg-white flex items-center justify-between z-50 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-14 flex justify-between items-center">
        <Link href="/" className="flex justify-center items-center gap-2">
          <Image
            width={40}
            height={40}
            src="/logo.png"
            alt="nexly logo"
            className="sm:h-10 h-7 sm:w-10 w-8"
          />
        </Link>
        <Menu categories={categories} />

        {mobileMenu && (
          <MenuMobile setMobileMenu={setMobileMenu} categories={categories} />
        )}

        <div className="flex items-center gap-2 text-black">
          <Link href="/wishlist">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
              {wishlistItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-violet-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {wishlistItems.length}
                </div>
              )}
            </div>
          </Link>

          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-violet-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>

          <UserButton afterSignOutUrl="/" />

          <SignedOut>
            <SignInButton mode="modal" />
          </SignedOut>
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
