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
        let data = drDown.value
        let data1 = tgl.startDate
        let data2 = tgl.endDate
        console.log('filter', data);
        console.log('filter', data1);
        console.log('filter', data2);

        axios.get(baseURL, {
            params: {
                startDate : data1,
                endDate : data2,
                comparioson : drDown
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

    // const dtlDrDown =() => {
    //     let vaDr = drDown.value
    //     console.log('Filtime', vaDr);
    // }

    const options = [
        { value: 'LD', label: 'Last Day', },
        { value: 'LW', label: 'Last Week' },
        { value: 'LM', label: 'Last Month' },
        { value: 'LQ', label: 'Last Quarter' },
        { value: 'LY', label: 'Last Year' },
    ];
    const defaultOption = options[null];

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
                    <div className='items-center rounded-xl bg-redd p-2 w-135 '>
                        <div className="w-68 flex justify-end">
                            <Datepicker
                                value={tgl}
                                onChange={handleTglChange}
                            />
                        </div>

                        <Dropdown options={options}  
                                    onChange={optChange} 
                                    value={defaultOption} 
                                    placeholder="-" 
                                    className="w-46 text-sm mt-1"/>
                        {/* <div className="flex">
                            <div className="flex">
                                <div className='p-1 text-white'>
                                    
                                    <div className='ml-5'>  
                                        <form onSubmit={handleSubmit}>
                                            <FormControl error={error} variant="standard">
                                                <RadioGroup
                                                    aria-labelledby="demo-error-radios"
                                                    name="quiz"
                                                    value={value}
                                                    onChange={handleRadioChange}
                                                    >
                                                <FormControlLabel value="LM" control={<Radio />} label="Last Month" />
                                                <FormControlLabel value="LY" control={<Radio />} label="Last Year" />
                                                </RadioGroup>
                                            </FormControl>
                                        </form>
                                    </div>                                    
                                </div>

                            </div>
                                
                            <div className="flex p-1 text-marron mt-2">
                                |
                            </div>
                            <div className="flex p-1 text-white mt-2">
                                Branch
                            </div>

                            <div className="flex justify-end">
                            </div>
                        </div> */}

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
