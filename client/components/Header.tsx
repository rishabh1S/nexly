/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import React, { useState, useEffect } from "react";
import { Menu, MenuMobile, Wrapper } from ".";
import Link from "next/link";
import Image from "next/image";
import { Category, MenuItem } from "../utils/types";
import { handleSignOut } from "@/utils/supabase";
import supabase from "../utils/supabase";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";
import { fetchDataFromApi } from "@/utils/api";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [full_name, setFullName] = useState("");
  const [avatar_url, setAvatarUrl] = useState("");
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const { wishlistItems } = useSelector((state: RootState) => state.wishlist);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    getProfile();
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await fetchDataFromApi("/api/categories?populate=*");
    setCategories(data);
  };

  const getProfile = async () => {
    try {
      const response = await supabase.auth.getUser();
      const user = response.data?.user;
      if (user) {
        const { data, error, status } = await supabase
          .from("profiles")
          .select(`full_name, avatar_url`)
          .eq("id", user.id)
          .single();

        if (data) {
          setFullName(data.full_name);
          setAvatarUrl(data.avatar_url);
        }
      }
    } catch (error) {
      console.log("Something went wrong: ", error);
    }
  };

  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link
          href="/"
          className="font-bold text-2xl flex justify-center items-center gap-2"
        >
          <div>
            <Image width={25} height={25} src="/carts.png" alt="logo" />
          </div>
          <div>BuyNext</div>
        </Link>
        <Menu
          showCatMenu={showCatMenu}
          setShowCatMenu={setShowCatMenu}
          categories={categories}
        />

        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
            categories={categories}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          <Link href="/wishlist">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
              {wishlistItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {wishlistItems.length}
                </div>
              )}
            </div>
          </Link>

          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart className="text-[15px] md:text-[20px]" />
              {cartItems.length > 0 && (
                <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                  {cartItems.length}
                </div>
              )}
            </div>
          </Link>

          <div
            className="w-8 md:w-12 h-8 md:h-12 rounded-full hidden md:flex justify-center items-center cursor-pointer relative"
            onMouseEnter={() => setUserMenuOpen(true)}
            onMouseLeave={() => setUserMenuOpen(false)}
          >
            {avatar_url ? (
              <img
                src={avatar_url}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <AiOutlineUser className="text-[19px] md:text-[24px]" />
            )}
            {userMenuOpen && (
              <div className="bg-white absolute top-11 right-0 min-w-[160px] px-1 py-1 text-black shadow-lg">
                <div className="block px-4 py-2 hover:bg-black/[0.03] rounded-md">
                  {full_name || "Profile"}
                </div>
                <Link
                  href="/contact"
                  className="block px-4 py-2 hover:bg-black/[0.03] rounded-md"
                  onClick={() => {
                    setUserMenuOpen(false);
                  }}
                >
                  Contact
                </Link>
                <Link
                  href="/login"
                  className="block px-4 py-2 hover:bg-black/[0.03] rounded-md"
                  onClick={() => {
                    handleSignOut();
                    setUserMenuOpen(false);
                  }}
                >
                  Sign Out
                </Link>
              </div>
            )}
          </div>

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
