import React from "react";
import Sdbar from "../../component/Sidebar/sdbar";
import DdPiutang from "../../component/Salles/DetailDataPiutang/DdPiutang";

const DetailDatPiutang = () => {
    return(
        <>
            <div>
                <div>

                    <Sdbar/>

                </div>

                <div>
                <section className={`-mt-1`}>
                    
                    <DdPiutang/>

                </section>

                </div>
            </div>
        </>
    )
}

export default DetailDatPiutang