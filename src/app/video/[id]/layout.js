import NavigationBar from "@/components/Menu/Mobile/NavigationBar";

export default function VideoIdLayout({ children }) {
  return (
    <>
      <NavigationBar />
      <main>{children}</main>
    </>
  );
}
