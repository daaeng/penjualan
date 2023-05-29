import React from "react";
import Sdbar from "../../component/Sidebar/sdbar";
import SalesPenjualanDet from "../../component/Salles/SalesPenjualanDet";


const SalesDetPenjualan = () => {
    return(
        <>
            <div>
                <div>

                    <Sdbar/>

                </div>

                <div>
                <section className={`-mt-1`}>
                    
                    <SalesPenjualanDet/>

                </section>

                </div>
            </div>
        </>
    )
}

export default SalesDetPenjualan