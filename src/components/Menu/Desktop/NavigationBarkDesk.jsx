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
    <nav className="fixed top-0 left-0 w-full h-[35px] bg-slate-800 px-wrapper font-jet-brains flex items-center ">
      <ul className="flex gap-5 items-center">{menuList}</ul>
    </nav>
  );
}
