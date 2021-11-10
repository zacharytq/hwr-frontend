import TopBarIcon from "./TopBarIcon";
import { MdOutlineAddPhotoAlternate, MdOutlineHome } from "react-icons/md";

const TopBar = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-16 m-0 flex bg-gray-800 text-white shadow-lg">
            <TopBarIcon icon={<MdOutlineHome size="38" />} />
            <TopBarIcon icon={<MdOutlineAddPhotoAlternate size="38" />} /> 
        </div>
    )
}

export default TopBar;