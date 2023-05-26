import React from "react";
import Sdbar from "../../component/Sidebar/sdbar";
import SalesPiutangDet from "../../component/Salles/SalesPiutangDet";

const SalesDetPiutang = () => {
    return(
        <>
            <div>
                <div>

                    <Sdbar/>

                </div>

                <div>
                <section className={`-mt-1`}>
                    
                    <SalesPiutangDet/>

                </section>

                </div>
            </div>
        </>
    )
}

export default SalesDetPiutang