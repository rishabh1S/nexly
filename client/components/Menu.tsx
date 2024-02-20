import React from "react";
import Link from "next/link";
import { CategoryMenu } from "../utils/types";

interface MenuProps {
  categories: CategoryMenu[];
}

const Menu: React.FC<MenuProps> = ({ categories }) => {
  const categoryColors: { [key: string]: string } = {
    men: "border-red-500",
    women: "border-pink-400",
    kids: "border-orange-500",
    electronics: "border-violet-500",
    homeAndLiving: "border-green-500",
    beauty: "border-yellow-500",
  };

  return (
    <ul className="hidden md:flex items-center gap-3 font-medium text-black">
      {categories
        ?.filter((c) => c.attributes.name !== "Sale")
        .map((c, id) => {
          const categoryColorClass = categoryColors[c.attributes.slug];
          return (
            <Link key={id} href={`/category/${c.attributes.slug}`}>
              <li
                className={`h-12 font-semibold flex justify-between items-center px-3 hover:border-b-2 ${categoryColorClass}`}
              >
                {c.attributes.name.toUpperCase()}
              </li>
            </Link>
          );
        })}
    </ul>
  );
};

export default Menu;
