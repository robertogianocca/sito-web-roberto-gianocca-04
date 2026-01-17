import HamburgerButton from "@/components/Menu/Mobile/HamburgerButton";
import NavigationButton from "@/components/Menu/Mobile/NavigationButton";
import { GoHomeFill } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa6";

export default function NavigationBar() {
  return (
    <div className="md:hidden fixed bottom-0 h-navigation-bar w-full z-100 flex flex-row items-center bg-black/30 backdrop-blur-sm justify-between px-8">
      <NavigationButton link={"/video"}>
        <FaArrowLeft size="22" />
      </NavigationButton>
      <NavigationButton link={"/"}>
        <GoHomeFill size="22" />
      </NavigationButton>
      <HamburgerButton />
    </div>
  );
}
