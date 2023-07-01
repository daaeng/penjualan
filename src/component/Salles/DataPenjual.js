import React from "react"
// import Tabled from "../Table/tabled"
// import DataGrafGAB from "../chart/dataGrafGAB"
import Labeldt from "../backpage/label"
import ChartKNN from "../chart/ChartKNN"
import GabCard4th from "../backpage/GabCard/GabCard4th"
import TopSalesman from "./DataTab/TopSalesman"
import TopCustomer from "./DataTab/TopCustomer"
import TopItemCateg from "./DataTab/TopItemCateg"
import TopSalesBrand from "./DataTab/TopSalesBrand"
import SalesBySalesman from "./DataTab/SalesBySalesman"
import SalesByCustomer from "./DataTab/SalesByCustomer"
import TopSalesSubCat1 from "./DataTab/TopSalesSubCat1"
import TopSalesSubCat2 from "./DataTab/TopSalesSubCat2"
import TopSalesSubCat3 from "./DataTab/TopSalesSubCat3"

const DataPenjual = () => {

    const title = () => {
        return ("Chart Sales Branch")
    }

    return(
        <>
            <div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 sm:gap-1 md:gap-2 lg:gap-4">
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 bg-marron p-2 h-fit mt-3">
                        <div className="mb-1">
                            <Labeldt title = {title} />
                        </div>

                        <div className="p-1">
                            <ChartKNN/>
                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-1 ">
                        <GabCard4th/>    
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-3">
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <SalesBySalesman/>
                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <SalesByCustomer/>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <TopSalesman/>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <TopCustomer/>
                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <TopSalesBrand/>
                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <TopItemCateg/>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <TopSalesSubCat1/>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <TopSalesSubCat2/>
                        </div>
                    </div>

                    <div className="lg:col-span-1 md:col-span-1 sm:col-span-2">
                        <div className="lg:p-3 md:p-2 sm:p-1 mt-3 bg-blue-200">
                            <TopSalesSubCat3/>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default DataPenjual