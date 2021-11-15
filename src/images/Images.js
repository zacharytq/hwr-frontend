import { Outlet } from "react-router-dom";

const Images = () => {
    return (
        <div className="absolute flex top-0 left-0 right-0 bottom-0 h-screen justify-center items-center z-10">
            <Outlet />
        </div>
    )
}

export default Images;