import NavBar from "@/components/Sections/NavBar";
import SideBar from "@/components/SideBar/SideBar";
import styles from '@/styles/layout.module.css';

export default function DashboardLayout({ children }) {
    return (
        <section className={styles.main}>
            <NavBar/>
            <section className={styles.body}>
                <SideBar />
                {children}
            </section>
        </section>
    )
  }