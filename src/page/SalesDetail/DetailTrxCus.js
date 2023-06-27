import React from "react";
import Sdbar from "../../component/Sidebar/sdbar";
import DetTrxCus from "../../component/Salles/DetTrxCustomer/DetTrxCus";

const DetailTrxCus = () => {
    return(
        <>
            <div>
                <div>

                    <Sdbar/>

                </div>

                <div>
                <section className={`-mt-1`}>
                    
                    <DetTrxCus/>

                </section>

                </div>
            </div>
        </>
    )
}

export default DetailTrxCus