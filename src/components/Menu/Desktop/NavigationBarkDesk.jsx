"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";

export default function NavigationBarDesk() {
  const path = usePathname();
  let pathArray = path.split("/");
  pathArray.shift();

  console.log(pathArray.includes("video"));

  const menu = ["video", "photography", "contact", "home"];

  const menuList = menu.map((menuItem, index) => {
    return (
      <li key={index} className="hover:text-white">
        <Link
          href={`/${menuItem}`}
          className={`${pathArray.includes("video") && menuItem == "video" ? "text-white" : ""}`}
        >
          {menuItem}
        </Link>
      </li>
    );
  });

  return (
    <div className="w-max hidden lg:block bg-red-800 p-1 rounded-lg ml-[-10px] px-4 font-jet-brains">
      <ul className="flex gap-5 ">{menuList}</ul>
    </div>
  );
}
