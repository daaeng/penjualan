import React from "react";
import Sdbar from "../../../component/Sidebar/sdbar";
import SalesDetSalesman from "../../../component/Salles/DataTab/SalesDetSalesman";

const DetSalesman = () => {
    return(
        <>
            <div>
                <div>
                    <Sdbar/>
                </div>

                <div>
                <section className={`-mt-1`}>
                    
                    <SalesDetSalesman/>

                </section>

                </div>
            </div>
        </>
    )
}

export default DetSalesman