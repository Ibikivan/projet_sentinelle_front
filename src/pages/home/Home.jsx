import { Outlet } from "react-router-dom"
import Footer from "../../components/layouts/Footer"
import Header from "../../components/layouts/Header"
import SideBar from "../../components/layouts/SideBar"
import { usePageTitle } from "../../hooks/usePageTitle"

export default function Home() {

    usePageTitle("Accueille")
    
    return <div className="w-screen min-h-screen flex flex-col justify-between">
        <div className="flex flex-col grow">
            <Header />

            <div className="flex h-full grow">
                <SideBar />
                
                <Outlet />
            </div>
        </div>

        <Footer />
    </div>

}
