import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { NavItems } from "./NavItems"

export const AppLayout = () => {
    const navItems = {
        Introduction: '#',
        About: '#',
        Services: '#',
        Contact: '#'
    }
    return(
        <>
        <header className="header">
            <Header phone={"xxxxxxxxx"} email={"email@email.com"} />
        </header>
        <nav className="navBarBox">
            <NavItems navItems={navItems} />
        </nav>
        <Outlet />
        <Footer />
        </>
    )
}