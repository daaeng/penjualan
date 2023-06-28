import React, { useEffect, useState } from "react"
import axios from "../../config/api/axios";
import Labeldt from "../../backpage/label";
import Tabled from "../../Table/tabled";

const baseURL ='/rptReact/Dashboard/getTop10SalesBySubCat3'

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'code', headerName: 'Code', width: 120 },
    { field: 'description', headerName: 'Name', width: 150 },
    { field: 'amSI', headerName: 'amSI', type: 'number', width: 120,},
    { field: 'percSI', headerName: 'SI %', type: 'number', width: 80,},
    { field: 'amSR', headerName: 'amSR', type: 'number', width: 120},
    { field: 'percSR', headerName: 'SR %', type: 'number', width: 80},
    { field: 'amNett', headerName: 'amNett', type: 'number', width: 120},
    { field: 'percNett', headerName: 'Nett %', width: 80},
];

const TopSalesSubCat3 =() => {   

    const [data, setData] = useState([])

    const title = () => {
        return ("Tabel Top Sales Sub Cat 3")
    }
    
    function tkStDate(year, month) {
        return new Date(year, month, 1);
      }
    
    const tgl = new Date()
    const firstDate = tkStDate(
    tgl.getFullYear(),
    tgl.getMonth()
    )
    
    const dataTab = () => {

        let data1 = tgl
        let data2 = firstDate
        
        axios.get(baseURL, {
            params : {
                startDate : data2,
                endDate : data1
            }
        })
        .then((response) => {
        setData(response.data.data)
        })
    }

    useEffect(() =>{
        dataTab()
    })

    return(
        <>
            <div className="mb-1">
                <Labeldt title = {title} />
            </div>

            <Tabled data={data} columns={columns}/>
        </>
    )
}

export default TopSalesSubCat3