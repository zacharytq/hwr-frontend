import TopBarIcon from "./TopBarIcon";
import { MdOutlineAddPhotoAlternate, MdOutlineHome } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const TopBar = () => {
    let location = useLocation()

    return (
        <div className="fixed top-1 left-0 rounded-r-xl h-16 pr-2 flex bg-gray-800 text-white shadow-lg">
            <Link to="/">
                <TopBarIcon icon={<MdOutlineHome size="38" />} text="Home" highlighted={location.pathname === "/" }/>
            </Link>
            <Link to="/images">
                <TopBarIcon icon={<MdOutlineAddPhotoAlternate size="38" />} text="Upload Image" highlighted={location.pathname === "/images"} />
            </Link> 
        </div>
    )
}

export default TopBar;