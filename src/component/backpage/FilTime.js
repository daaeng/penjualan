import React, {useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { BiTime } from "react-icons/bi";
import axios from "../config/api/axios";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const baseURL = '/API/Dashboard/getSalesRetur?'

const FilTime =({onChange}) => {

    const [open, setOpen] =  useState();
    const [tgl, setTgl] = useState({
        startDate: new Date().setHours(-168),
        endDate: new Date()
    });

    const handleTglChange = (newTgl) => {
        console.log("newValue:", newTgl);
        setTgl(newTgl);
    }

    const UbahTgl = () => {
        // dtlDrDown()
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
                branch : '',
                onlyDiva :'',
            }
        }).then(response => {
            console.log(response.data.data);
        })
    }

    const [drDown, setDrDown] = useState([])
    const optChange =(value) => {
        console.log("newValue:", value);
        setDrDown(value);
        // let dataDr = value.value
    }

    const options = [
        { value: 'LD', label: 'Last Day', },
        { value: 'LW', label: 'Last Week' },
        { value: 'LM', label: 'Last Month' },
        { value: 'LQ', label: 'Last Quarter' },
        { value: 'LY', label: 'Last Year' },
    ];
    
    const defaultOption = options[null];
    
    const [brDown, setBrDown] = useState([])
    const [showDd, setShowDd] = useState([])
    
    const BranchDt = (value) => {
        console.log('Branch : ',value);
        setBrDown(value)

        let userDt = sessionStorage.getItem('userData')
        // console.log('user', userDt);

        let str = JSON.parse(userDt).userCategID
        let str2 = JSON.parse(userDt).userJabID
        console.log('userCategID:', str, ',userJabID:', str2 );
        
        if(userDt){
            setShowDd(
                {
                    dtDrDn : [
                        { value: 'all retail', label: 'All Retail', },
                        { value: 'retail', label: 'Retail', },
                    ]
                }
                // {
                    // dtDrDn : [
                        // { value: 'all retail', label: 'All Retail', },
                        // { value: 'retail', label: 'Retail', },
                    // ]
                // }
            )
            
        } else{
            // setShowDd(
            //     {
            //         dtDrDn: [
            //             { value: 'grosir', label: 'All Retail', },
            //             { value: 'all grosir', label: 'Retail', },
            //             { value: 'onlyDiva', label: 'Only Diva', },
            //         ]
            //     }
            // )
            console.log('gagal');
        }
    }

    return(
        <>
            <div className = {`flex justify-end h-fit py-2 pt-10 duration-300  ${open ? 'w-48' : ' sm:w-10 md:w-16 '} `}>
                <div className=' -ml-5 text-white' onClick={()=> setOpen(!open)}>
                    <div className="bg-redd p-1 flex justify-end w-fit rounded-lg items-center">
                        Filter
                        <BiTime size={'28'} className={`cursor-pointer hover:text-darkgolden ml-3`} />
                        
                    </div>
                </div>
                <div className={`duration-50 fixed mt-5 ${!open && 'hidden'}`}>
                    <div className='items-center rounded-xl bg-redd p-2 w-135'>
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
                                        <Dropdown options={showDd}  
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
                        <div onClick={() => UbahTgl(onChange(tgl.startDate, tgl.endDate, drDown.value))}
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
