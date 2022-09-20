import { ReactNode } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  const hideTogglemain = () => {
    document.querySelector("#navbarNav")?.classList.remove("show");
    console.log("bootstrap Navbar collapse hide!!");
  };
  return (
    <>
      <Navbar />
      <main onClick={hideTogglemain}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
