import React from "react"
import Tabled from "../Table/tabled"
import GabCard4th from "../backpage/GabCard/GabCard4th"
import DataGrafGAB from "../chart/dataGrafGAB"
import PelangganChart from "../chart/pelanggan"

const DataPenjual = () => {

    return(
        <>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-marron">
                            <DataGrafGAB/>
                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="mt-3">
                            <Tabled/>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:gap-1 md:gap-2 lg:gap-4">
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 bg-marron p-3 h-fit mt-3">
                        <PelangganChart/>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 ">
                        <GabCard4th/>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default DataPenjual