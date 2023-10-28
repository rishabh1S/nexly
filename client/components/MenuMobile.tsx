import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { Category, MenuItem } from "../utils/types";
import { handleSignOut } from "@/utils/supabase";

interface MenuMobileProps {
  showCatMenu: boolean;
  setShowCatMenu: (show: boolean) => void;
  setMobileMenu: (show: boolean) => void;
  categories: Category[];
}

const data: MenuItem[] = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
  { id: 5, name: "Sign Out", url: "/login" },
];

const MenuMobile: React.FC<MenuMobileProps> = ({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
  categories,
}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item: MenuItem) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {categories.map((c, id) => {
                      return (
                        <Link
                          key={id}
                          href={`/category/${c.attributes.name}`}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {c.attributes.name}
                            <span className="opacity-50 text-sm">
                              {`(${
                                Object.keys(c.attributes.products.data).length
                              })`}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                {item.url && (
                  <Link
                    href={item.url}
                    onClick={() => {
                      if (item.name === "Sign Out") {
                        handleSignOut();
                      }
                      setMobileMenu(false);
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MenuMobile;
