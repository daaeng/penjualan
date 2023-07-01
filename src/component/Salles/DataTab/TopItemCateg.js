import React, { useEffect, useState } from "react"
import axios from "../../config/api/axios";
import Labeldt from "../../backpage/label";
import Tabled from "../../Table/tabled";

const baseURL ='/rptReact/Dashboard/getTop10SalesByItemCateg'

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'code', headerName: 'Code', width: 120 },
    { field: 'description', headerName: 'Category', width: 150 },
    { field: 'amSI', headerName: 'amSI', type: 'number', width: 120,},
    { field: 'percSI', headerName: 'SI %', type: 'number', width: 80,},
    { field: 'amSR', headerName: 'amSR', type: 'number', width: 120},
    { field: 'percSR', headerName: 'SR %', type: 'number', width: 80},
    { field: 'amNett', headerName: 'amNett', type: 'number', width: 120},
    { field: 'percNett', headerName: 'Nett %', width: 80},
];

const TopItemCateg =() => {   

    const [data, setData] = useState([])

    const title = () => {
        return ("Tabel Top Item Category")
    }
    
    const minuteTO = 600000
    // 10-menit refersh hitungan ~ MS ~
    const dataTab = () => {
        axios.get(baseURL)
        .then((response) => {
        setData(response.data.data)
        }, minuteTO)
    }

    useEffect(() =>{
        dataTab()
    },[])

    return(
        <>
            <div className="mb-1">
                <Labeldt title = {title} />
            </div>

            <Tabled data={data} columns={columns}/>
        </>
    )
}

export default TopItemCateg