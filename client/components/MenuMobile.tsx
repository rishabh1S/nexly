import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { Category, MenuItem } from "./types";

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
];

const subMenuData: Category[] = [
  { id: 1, name: "Men", doc_count: 11 },
  { id: 2, name: "Women", doc_count: 8 },
  { id: 3, name: "Accessories", doc_count: 64 },
  { id: 4, name: "Shoes", doc_count: 17 },
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
                    {subMenuData.map((c: Category) => {
                      return (
                        <Link
                          key={c.id}
                          href={`/category/${c.name.toLowerCase()}`}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {c.name}
                            <span className="opacity-50 text-sm">
                              {`(${c.doc_count})`}
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
                  <Link href={item.url} onClick={() => setMobileMenu(false)}>
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