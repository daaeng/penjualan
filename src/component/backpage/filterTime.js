import React, {useState } from 'react'
import {BiTimeFive } from 'react-icons/bi'
import Labeldt from './label';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { addDays } from 'date-fns';
import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
// import axios from '../config/api/axios';
// import Datepicker from "react-tailwindcss-datepicker"; 
// const baseURL = '/API/Dashboard/GetSalesByRangeDate?'

// const baseURL = '/API/Dashboard/getSalesGrossByDate'
// https://192.168.21.70:13541/API/Dashboard/getSalesGrossByDate
// withCompare=true&comparison=lm&withDetail=true

export default function FilterTime () {

    const [bka, setBka] =  useState(false);

    // useEffect(() => {
    //     axios.get(baseURL, {
    //         withCompare : '',
    //         comparison : '',
    //         withDetail: '',
    //     }).then ((response) => {
    //         console.log(response.data);
    //     })

    // })

    const title = () => {
        return ("Filter Waktu")
    }

    const [checked, setChecked] = useState(false)
    
    const handleChange = () => {
       if( setChecked(!checked)) {
            
       }
    }

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState(false);
    const [setHelperText] = React.useState('Choose wisely');

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (value === 'best') {
        setHelperText('You got it!');
        setError(false);
        } else if (value === 'worst') {
        setHelperText('Sorry, wrong answer!');
        setError(true);
        } else {
        setHelperText('Please select an option.');
        setError(true);
        }
    };

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), -7),
          key: 'selection'
        }
    ]);

    // const [vDate, setVDate] = useState({ 
    //     startDate: new Date().setHours(-168) , 
    //     endDate: new Date()   
    //   });   
    //   const handleValueChange = (newvDate) => {
    //     console.log("newValue:", newvDate); 
    //     setVDate(newvDate); 
    //   } 

    return (
        <>
            <div className='relative'>
                <div className='w-full flex justify-end -mb-14 ' onClick={() => setBka(!bka)}>
                    <div className='bg-red-900 text-white w-fit rounded-lg p-1 items-center'>
                        <h6 className='flex items-center mb-0 justify-end sm:text-xs md:text-xs lg:text-base'>
                            Time '1 Hour' 
                            <div className='bg-marron text-white cursor-pointer rounded-md p-1'>
                                <BiTimeFive />
                            </div>
                        </h6>
                    </div>

                </div>

                <div className='flex justify-end'>
                    <div className={` bg-marron rounded-tl-xl rounded-bl-xl rounded-br-xl w-fit mt-16 ${bka ? 'mr-0' : 'show'}`}>                      
                        <ul className={`-ml-7 mr-1 ${!bka  && 'hidden' }`}>
                            <div className='-mb-2 ml-1'>
                                <Labeldt title = {title} />
                            </div>

                            <div className='flex mt-2 ml-7 w-full'>
                                <div className='flex mt-1 p-1 -ml-7'>
                                    
                                    <div className="rounded w-full p-2 bg-blue-400 text-black">
                                        {/* <Datepicker 
                                        value={vDate} 
                                        onChange={handleValueChange} 
                                        showShortcuts={true} 
                                        />  */} 
                                        <DateRangePicker
                                            onChange={item => setState([item.selection])}
                                            showSelectionPreview={true}
                                            moveRangeOnFirstSelection={false}
                                            months={2}
                                            ranges={state}
                                            direction="horizontal"
                                            preventSnapRefocus={true}
                                            calendarFocus="backwards"
                                        />                             
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-rowlg:w-147 md:w-96 p-1 '>
                                <div className='flex'>
                                    
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
                                </div>
                            </div>
                            
                            <div className='flex justify-end -mt-12 mr-3'>
                                <button className='px-1 py-1 w-28 bg-blue-100 rounded-lg'>
                                    Apply
                                </button>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </>
      );
}


// <div className='flex-row p-2 text-white w-32'>                                      
// {menuFlt.map((val, index) => {
//     return(                 
//         <button
//             key = {index} 
//             to={val.path}          
//             className={`cursor-pointer no-underline flex flex-row duration-300 
//                     text-gray-100 overflow-y-visible hover:bg-light-white hover:rounded-md 
//                     hover:text-black w-28 `} >
//             <li className='flex items-center'>
//                 <div className={`mr-1 mt-0.5 `}>{val.icon}</div>
//                 <div className={`text-1xl duration-50`} >{val.name}</div> 
//             </li>
//         </button>                           
//     );
// })}
// </div>