/* ========== VIDEO PAGE LAYOUT PAGE========== */

import NavigationBarDesk from "@/components/Menu/Desktop/NavigationBarkDesk";
import Main from "@/components/Main/Main";

export default function VideoLayoutPage({ children }) {
  return (
    <>
      <NavigationBarDesk />
      <Main>{children}</Main>
    </>
  );
}
