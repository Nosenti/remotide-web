import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
function AppLayout() {
  return (
    <div className="h-screen text-default">
      <Header />
      <section className="main p-[4rem,4.8rem,6.4rem]">
        <div className="max-w-[120rem] mx-auto flex flex-col gap-[3.2rem]">
          <Outlet />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AppLayout;
