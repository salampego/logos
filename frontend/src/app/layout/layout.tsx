import { Header } from "widgets/header/header";
import { Outlet } from "react-router-dom";
import { Footer } from "widgets/footer/footer";

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
