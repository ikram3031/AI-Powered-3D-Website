import NavBar from "@/components/navBar";
import SideBar from "@/components/SideBar/SideBar";

export default function DashboardLayout({ children }) {
    return (
        <section className="flex flex-row">
            <NavBar/>
            <section>
                <SideBar />
                {children}
            </section>
        </section>
    )
  }