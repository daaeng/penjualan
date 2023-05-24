import React from "react"
import CobaChart from "../chart/coba"
import Tabled from "../Table/tabled"
import GabCard3rd from "../backpage/GabCard/GabCard3rd"

const DataPenjual = (props) => {

    return(
        <>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="p-3 mt-3 bg-marron">
                            <CobaChart/>

                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="mt-3">
                            <Tabled/>
                        </div>
                    </div>
                    
                    
                </div>

                <div className="">
                    <GabCard3rd/>    
                </div>
            </div>

            

        </>
    )
}

export default DataPenjual