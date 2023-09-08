'use client'

import Link from "next/link";
import { useSelector } from "react-redux";
// import Arrow from '../../../assets/menu-arrow.svg';
// import Arrow2 from '../../../assets/menu-arrow.svg';
// import './sideBar.scss';

const SideBarTab = (props) => {
    const { iconUrl, title , subMenu } = props;
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen)

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            {/* <Link to={`/${title.toLowerCase()}`} className="sideBarTab">
                    <img src={iconUrl}/>
                    {
                        isSideBarOpen ? (
                            <>
                                <div className="menu">
                                    <h3>{title}</h3>
                                    { isMenuOpen ? 
                                        <img onClick={handleMenu} src={Arrow2} alt='arrow'/> :
                                        <img onClick={handleMenu} src={Arrow} alt='arrow'/>
                                    }                                 
                                </div>                        
                            </>                        
                        ) : (
                            <></>
                        )
                    }

            </Link> */}
            {/* <div className={`subMenu ${isMenuOpen ? "" : "hide" }`}>
                { subMenu.map((item) => (
                    <Link to={item.url}>
                        <h4>{item.title}</h4>
                    </Link>
                ))}
            </div> */}
        </>
    )
}

export default SideBarTab

