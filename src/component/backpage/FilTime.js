import React, {useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { BiTime } from "react-icons/bi";
import axios from "../config/api/axios";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const baseURL = '/rptReact/Dashboard/getSalesRetur?'
const BranchURL = '/rptReact/getBranch?'

const FilTime =({onChange}) => {

    const [codeDrop, setCodeDrop] = useState([])
    const [drDown, setDrDown] = useState([])

    const [open, setOpen] =  useState();

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

    const [tgl, setTgl] = useState({
        startDate: new Date().setHours(-144),
        endDate: new Date()
    });

    const handleTglChange = (newTgl) => {
        console.log("Range Date:", newTgl);
        setTgl(newTgl);
    }

    const UbahTgl = () => {
        
        let data1 = tgl.startDate
        let data2 = tgl.endDate
        let data = drDown.value
        let dataBr = brDown.value

        console.log('filter', data);
        console.log('Filter', dataBr);
        console.log('filter', data1);
        console.log('filter', data2);

        axios.get(baseURL, {
            params: {
                startDate : data1,
                endDate : data2,
                comparioson : drDown,
            }
        }).then(response => {
            console.log(response.data.data);
        })
    }
    
    const optChange =(value) => {
        console.log("Compare:", value);
        setDrDown(value);
    }
    
    const optionsAll = codeDrop.map(d => ({
        'value' : d.code,
        'label' : d.description
    }))

    const options = [
        { value: 'LD', label: 'Last Day', },
        { value: 'LW', label: 'Last Week' },
        { value: 'LM', label: 'Last Month' },
        { value: 'LQ', label: 'Last Quarter' },
        { value: 'LY', label: 'Last Year' },
    ];
    
    const defaultOption = options[null];

    // const showDropDown = () => {
    //     let dt = sessionStorage.getItem('userData')
    //     let user = JSON.parse(dt).code
    //     axios.get(BranchURL,{
    //         params : {
    //             user : user,
    //         }
    //     }).then((resp) => {
    //         let data = (resp.data.data)
    //         // let dataVl = (resp.data.data.map((sdrop) => sdrop.code))
    //         setCodeDrop(data)
    //     }, minuteTO)
    // }

    const minuteTO = 600000
    // // 10-menit
    useEffect(()=> {
        let dt = sessionStorage.getItem('userData')
        let user = JSON.parse(dt).code
        axios.get(BranchURL,{
            params : {
                user : user,
            }
        }).then((resp) => {
            let data = (resp.data.data)
            // let dataVl = (resp.data.data.map((sdrop) => sdrop.code))
            setCodeDrop(data)
        }, minuteTO)
    },[])
    
    const [brDown, setBrDown] = useState([])
    const BranchDt =(value) => {
        console.log("Branch:", value);
        setBrDown(value);
    }

    return(
        <>
            <div className = {`flex justify-end h-fit py-2 pt-10 duration-300  ${open ? 'w-48' : ' sm:w-10 md:w-16 '} `}>
                <div className=' -ml-5 text-white' onClick={()=> handleClickOpen}>
                {/* setOpen(!open) */}
                    <div className="bg-redd p-1 flex justify-end w-fit rounded-lg cursor-default items-center">
                        <div className="flex justify-end items-center">
                            Filter
                            <BiTime size={'28'} className={`cursor-pointer hover:text-darkgolden ml-3`} />
                        </div>
                        
                    </div>
                </div>
                <div
                    onClose={handleClose} 
                    className={`duration-500 lg:-ml-135 md:-ml-96 sm:-ml-72 -mb-52 mt-5 `}
                    >
                    {/* ${!open && 'hidden'} */}
                    
                    <div className='items-center rounded-xl bg-redd p-2 lg:w-135 md:w-96 sm:w-72'>
                        <div className="w-68 flex justify-end">
                            <Datepicker
                                value={tgl}
                                onChange={handleTglChange}
                            />
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="p-1 w-full col-span-1">
                                <div className="text-white">
                                    Versus
                                </div>
                                <Dropdown options={options}  
                                    onChange={optChange} 
                                    value={defaultOption} 
                                    placeholder="Pilih Compare" 

                                    className="w-46 text-sm mt-1"/>
                            </div>

                            <div className="w-full p-1 col-span-2">                                
                                <div className="text-white">
                                    Branch
                                </div>

                                <div className="flex">
                                    <div>
                                        
                                    </div>
                                    <div className="flex">
                                        <Dropdown 
                                            options={optionsAll}  
                                            onChange={BranchDt} 
                                            value={defaultOption} 
                                            placeholder="Pilih Branch" 

                                            className="w-46 text-sm mt-1 "/>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-end">
                        <div
                            onClose={handleClose} 
                            onClick={() => UbahTgl(onChange(tgl.startDate, tgl.endDate, drDown, brDown))}
                            className="bg-blue-200 font-bold cursor-pointer hover:text-green-200 hover:bg-green-600 rounded-lg mt-2 mr-1 p-1 w-20 flex justify-center">
                            Apply
                        </div>
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default FilTime
