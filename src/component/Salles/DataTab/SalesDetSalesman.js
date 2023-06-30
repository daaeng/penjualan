import React, { useEffect, useState } from "react";
import axios from "../../config/api/axios";
import SalesBySalesman from "./SalesBySalesman";

const baseURL = '/rptReact/Dashboard/getSalesTransactionBySalesman'

const SalesDetSalesman =() => {   

    function tkStDate(year, month) {
        return new Date(year, month, 1);
      }
    
    const tgl = new Date()
    const firstDate = tkStDate(
    tgl.getFullYear(),
    tgl.getMonth()
    )
    
    const controlCenter =() => { 
        let data1 = tgl
        let data2 = firstDate
        axios.get(baseURL,{
            params : {
                startDate : data2,
                endDate : data1, 
                salesman : code,
            }
        })

    }

    const [code, setCode] = useState([])
    const amblDt =(sell) => {
        let tf = sell
        setCode(tf)
        console.log(setCode);
    }

    useEffect(() => {
        controlCenter()
    })
    return(
        <>
            <div className="hidden">
                <SalesBySalesman onClick={amblDt}/>
            </div>
            masuk
        </>
    )
}

export default SalesDetSalesman