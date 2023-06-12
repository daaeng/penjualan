import React from "react";
import Sdbar from "../../component/Sidebar/sdbar";
import SalesPembayranDet from "../../component/Salles/SalesPembayranDet";

const SalesDetPembayaran = () => {
    return(
        <>
            <div>
                <div>

                    <Sdbar/>

                </div>

                <div>
                <section className={`-mt-1`}>
                    
                    <SalesPembayranDet/>

                </section>

                </div>
            </div>
        </>
    )
}

export default SalesDetPembayaran