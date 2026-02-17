import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Outlet } from "react-router-dom";

export const  Layout = () => {
    return (
        <>
        <Header />
        <div className="flex-1 pt-16">
            <Outlet />
        </div>
        <Footer />
        </>
    )
}