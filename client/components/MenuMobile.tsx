import React from "react";
import Link from "next/link";
import { CategoryMenu } from "../utils/types";

interface MenuMobileProps {
  setMobileMenu: (show: boolean) => void;
  categories: CategoryMenu[];
}

const MenuMobile: React.FC<MenuMobileProps> = ({
  setMobileMenu,
  categories,
}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 h-[calc(100vh)] w-full bg-white border-t text-black overflow-hidden">
      <ul className="-mx-5 mt-4 -mb-4">
        {categories?.map((c, id) => {
          return (
            <Link
              key={id}
              href={`/category/${c.attributes.slug}`}
              onClick={() => {
                setMobileMenu(false);
              }}
            >
              <li className="py-4 px-8 border-t flex justify-between">
                {c.attributes.name}
                <span className="opacity-50 text-sm">
                  {`(${Object.keys(c.attributes.products.data).length})`}
                </span>
              </li>
            </Link>
          );
        })}
        <li className="py-4 px-8 border-t flex justify-between">
          <Link
            href="/login"
            onClick={() => {
              setMobileMenu(false);
            }}
          >
            Sign Out
          </Link>
        </li>
      </ul>
    </ul>
  );
};

export default MenuMobile;
