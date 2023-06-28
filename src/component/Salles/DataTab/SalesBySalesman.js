import React, {useEffect, useState } from "react";
import Tabled from "../../Table/tabled";
import axios from "../../config/api/axios";
import Labeldt from "../../backpage/label";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { BiStreetView } from "react-icons/bi";

const baseURL = '/rptReact/Dashboard/getSalesBySalesman'


const SalesBySalesman =() => {   
    const columns = [
        {
            field: 'actions',
            type: 'actions',
            headerName: 'View',
            width: 55,
            cellClassName: 'actions',
            getActions: ({ id }) => {
              // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        
              return [
                <GridActionsCellItem
                    
                    icon={<BiStreetView size={'20'}/>}
                    label="Edit"
                    className="textPrimary"
                    onClick={()=> alert (id)}
                    color="inherit"
                />,
              ];
            },
        },
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

    const [data, setData] = useState([])

    // let tabId = data.map((tabData) => tabData.id)
    // console.log(tabId);

    const title = () => {
        return ("Tabel Sales by Salesman")
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

export default SalesBySalesman