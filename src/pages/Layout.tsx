import Footer from "@/components/Footer/Footer";
import NavBar from "@/components/NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100">
      <NavBar />
      <main className="min-h-[calc(100vh-5rem)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
