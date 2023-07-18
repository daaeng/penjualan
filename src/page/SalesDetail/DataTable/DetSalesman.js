import React from "react";
import Sdbar from "../../../component/Sidebar/sdbar";
import DetSale from "../../../component/Salles/ViewDetail/DetSale";

const DetSalesman = () => {
    return(
        <>
            <div className='App-bgpage'>
                <div>
                    <Sdbar/>
                </div>

                <div>
                <section className={`-mt-1`}>
                    
                    <DetSale/>

                </section>

                </div>
            </div>
        </>
    )
}

export default DetSalesman