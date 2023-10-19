import React, { useState } from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";
import { Category, MenuItem } from "./types";

interface MenuProps {
  showCatMenu: boolean;
  setShowCatMenu: (show: boolean) => void;
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

const Menu: React.FC<MenuProps> = ({
  showCatMenu,
  setShowCatMenu,
  categories,
}) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item: MenuItem) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg">
                    {subMenuData.map((c: Category) => {
                      return (
                        <Link
                          key={c.id}
                          href={`/category/${c.name.toLowerCase()}`}
                          onClick={() => setShowCatMenu(false)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
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
              <li className="cursor-pointer">
                {item.url && <Link href={item.url}>{item.name}</Link>}
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
