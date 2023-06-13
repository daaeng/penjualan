import React, {useState } from "react";
// import { DateRangePicker } from "react-date-range";
// import { addDays } from 'date-fns';
import Datepicker from "react-tailwindcss-datepicker";
import { BiTime } from "react-icons/bi";
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
import axios from "../config/api/axios";

const baseURL = '/API/Dashboard/getSalesRetur?'

const FilTime =() => {

    const [open, setOpen] =  useState();
    const [tgl, setTgl] = useState({
        startDate: new Date().setHours(-168),
        endDate: new Date()
    });

    // const PickDate = () => (
    //     {
    //         startDate: new Date(),
    //         endDate: new Date()
    //     }
    // )

    const handleTglChange = (newTgl) => {
        console.log("newValue:", newTgl);
        setTgl(newTgl);
    }

    const UbahTgl = () => {
        let data1 = tgl.startDate
        let data2 = tgl.endDate
        console.log(data1);
        console.log(data2);

        axios.get(`${baseURL}startDate=` + data1 + '&endDate=' + data2).then((response) => {
            console.log(response);
        })
    }

    // useEffect(() => {
    //     axios.get(baseURL, {
    //         withCompare : '',
    //         comparison : '',
    //         withDetail: '',
    //     }).then ((response) => {
    //         console.log(response.data);
    //     })

    // })

    // const [checked, setChecked] = useState(false)
    // const handleChange = () => {
    //     if( setChecked(!checked)) {
                
    //     }
    // }

    // const [value, setValue] = React.useState('');
    // const [error, setError] = React.useState(false);
    // const [setHelperText] = React.useState('Choose wisely');

    // const handleRadioChange = (event) => {
    //     setValue(event.target.value);
    //     setHelperText(' ');
    //     setError(false);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    //     if (value === 'best') {
    //     setHelperText('You got it!');
    //     setError(false);
    //     } else if (value === 'worst') {
    //     setHelperText('Sorry, wrong answer!');
    //     setError(true);
    //     } else {
    //     setHelperText('Please select an option.');
    //     setError(true);
    //     }
    // };

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
                    <div className='items-center rounded-xl bg-redd p-2 w-146 '>
                        <div className="w-64 flex justify-end">
                            <Datepicker
                                value={tgl}
                                onChange={handleTglChange}
                            />
                        </div>
                        {/* <div className="">
                            <div className="">
                                <div className='p-1 text-white'>
                                    <input type='checkbox' checked={checked} onChange={handleChange} className='mr-1'/>
                                    Versus 
                                    
                                    <div className='ml-5'>  
                                        <form onSubmit={handleSubmit}>
                                            <FormControl error={error} variant="standard">
                                                <RadioGroup
                                                    aria-labelledby="demo-error-radios"
                                                    name="quiz"
                                                    value={value}
                                                    onChange={handleRadioChange}
                                                    >
                                                <FormControlLabel value="best" control={<Radio />} label="Last Month" />
                                                <FormControlLabel value="worst" control={<Radio />} label="Last Year" />
                                                </RadioGroup>
                                            </FormControl>
                                        </form>
                                    </div>                                    
                                </div>

                                <div>
                                    Branch
                                </div>
                            </div>
                            <div className="flex justify-end">
                            </div>
                        </div> */}
                    </div>
                    
                    <div onClick={UbahTgl} 
                        className="bg-blue-50 font-bold cursor-pointer hover:text-green-200 hover:bg-green-600 rounded-lg mt-2 mr-1 p-1 w-20 flex justify-center">
                        Apply
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default FilTime
