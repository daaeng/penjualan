import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Loadeer = () => {
    return(
        <>
            <svg className="items-center animate-spin h-10 w-10 -mt-1 mr-3 " viewBox="0 0 24 24">
                <BiLoaderCircle/>
            </svg>
            <div className="animate-pulse">
                Loading...
            </div>
        </>
    )
}
export default Loadeer