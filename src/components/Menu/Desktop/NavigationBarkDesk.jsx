"use client";

import { usePathname } from "next/navigation";
import { TiHome } from "react-icons/ti";

import Link from "next/link";

export default function NavigationBarDesk() {
  const path = usePathname();
  let pathArray = path.split("/");
  let pathArrayFirst = pathArray.slice(1, 2);

  console.log(path);
  console.log(pathArray);
  console.log(pathArrayFirst);

  const menu = ["video", "photography", "contact"];

  const menuList = menu.map((menuItem, index) => {
    return (
      <li key={index} className="hover:text-custom-text-menu-hover">
        <Link
          href={`/${menuItem}`}
          className={menuItem == pathArrayFirst ? "text-custom-white-base" : ""}
        >
          {menuItem}
        </Link>
      </li>
    );
  });

  return (
    <nav className="fixed top-0 left-0 w-full h-[35px] bg-slate-800 px-wrapper font-jet-brains flex items-center ">
      <ul className="flex gap-5 items-center">
        <button className="p-2 text-custom-text-base hover:text-custom-text-menu-hover">
          <Link href="/">
            <TiHome size={25} />
          </Link>
        </button>
        {menuList}
      </ul>
    </nav>
  );
}
