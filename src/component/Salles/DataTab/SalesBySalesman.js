import React, {useEffect, useState } from "react";
import Tabled from "../../Table/tabled";
import axios from "../../config/api/axios";
import Labeldt from "../../backpage/label";
import { GridActionsCellItem } from "@mui/x-data-grid";
import { BiStreetView } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const baseURL = '/rptReact/Dashboard/getSalesBySalesman'


const SalesBySalesman =() => {   
    const navigate = useNavigate()
    const columns = [
        {
            field: 'actions',
            type: 'actions',
            headerName: 'View',
            width: 55,
            cellClassName: 'actions',
            getActions: (id) => {
              // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        
              return [
                <GridActionsCellItem
                    
                    icon={<BiStreetView size={'20'}/>}
                    label="Edit"
                    className="textPrimary"
                    onClick={()=> amblDt(id)}
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

    // const [select, setSelect] = useState([])

    const amblDt =(id) => {
        let sell = (id.row?.code)
        // setSelect(sell)
        console.log('datanya select',sell);
        navigate('/detdtsalesman', sell)
    }

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
        
    const [start, setStart] = useState([])
    const [end, setEnd] = useState([])
    setStart(firstDate)
    setEnd(tgl)
    
    const minuteTO = 600000
    // // 10-menit refersh hitungan ~ MS ~
    useEffect(() =>{
        axios.get(baseURL, {
            params : {
                startDate : start,
                endDate : end,
            }
        })
        .then((response) => {
        setData(response.data.data)
        }, minuteTO)
    },[start, end])

    return(
        <>
            <div className="mb-1">
                <Labeldt title = {title} />
            </div>

            <Tabled data={data} columns={columns} />
        </>
    )
}

export default SalesBySalesman