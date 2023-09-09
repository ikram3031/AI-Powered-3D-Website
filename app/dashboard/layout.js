import NavBar from "@/components/Sections/NavBar";
import SideBar from "@/components/SideBar/SideBar";

export default function DashboardLayout({ children }) {
    return (
        <section className="flex flex-col">
            <NavBar/>
            <section>
                <SideBar />
                {children}
            </section>
        </section>
    )
  }