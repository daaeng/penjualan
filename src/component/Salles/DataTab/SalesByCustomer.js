import React, {useEffect, useState } from "react";
import Tabled from "../../Table/tabled";
import axios from "../../config/api/axios";
import Labeldt from "../../backpage/label";

const baseURL = '/rptReact/Dashboard/getSalesByCustomer'

const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'code', headerName: 'Code', width: 120 },
    { field: 'description', headerName: 'Name', width: 150 },
    { field: 'amSI', headerName: 'amSI', type: 'number', width: 120,},
    { field: 'percSI', headerName: 'percSI', type: 'number', width: 80,},
    { field: 'amSR', headerName: 'amSR', type: 'number', width: 120},
    { field: 'percSR', headerName: 'percSR', type: 'number', width: 80},
    { field: 'amNett', headerName: 'amNett', type: 'number', width: 120},
    { field: 'percNett', headerName: 'percNett', width: 80},
];

const SalesByCustomer =() => {
    
    const [data, setData] = useState([])

    const title = () => {
        return ("Tabel Sales by Salesman")
    }
    
    const dataTab = () => {
        axios.get(baseURL)
        .then((response) => {
        setData(response.data.data)
        })
    }

    useEffect(() =>{
        dataTab()
    },[])
    return(
        <>
            <div>
                <Labeldt title = {title} />
            </div>

            <Tabled data={data} columns={columns}/>
        </>
    )
}

export default SalesByCustomer