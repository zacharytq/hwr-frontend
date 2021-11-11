import TopBarIcon from "./TopBarIcon";
import { MdOutlineAddPhotoAlternate, MdOutlineHome } from "react-icons/md";

const TopBar = () => {
    return (
        <div className="fixed top-1 left-0 rounded-r-xl h-16 pr-2 flex bg-gray-800 text-white shadow-lg">
            <TopBarIcon icon={<MdOutlineHome size="38" />} classN="-mr-16" />
            <TopBarIcon icon={<MdOutlineAddPhotoAlternate size="38" />} /> 
        </div>
    )
}

export default TopBar;