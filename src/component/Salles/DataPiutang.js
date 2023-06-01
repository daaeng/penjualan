import React from "react";
import CobaChart from "../chart/coba";
import GabCard2nd from "../backpage/GabCard/GabCard2nd";

const DataPiutang = () => {
    return(
        <>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:gap-1 md:gap-2 lg:gap-4">
                    
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="p-3 mt-3 bg-marron">
                            <CobaChart/>
                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <GabCard2nd/>
                    </div>
                </div>
            </div>
        </>
    )
}
 export default DataPiutang
