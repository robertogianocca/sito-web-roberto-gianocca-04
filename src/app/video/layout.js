/* ========== VIDEO PAGE LAYOUT PAGE========== */

import NavigationBar from "@/components/Menu/Mobile/NavigationBar";

export default function VideoLayoutPage({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}
