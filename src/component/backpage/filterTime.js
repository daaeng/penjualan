import React, {useState } from 'react'
import {BiTimeFive } from 'react-icons/bi'
import Labeldt from './label';
import DateTimeR from '../dateRange/dateTimeR';
// import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function FilterTime () {

    const [bka, setBka] =  useState(false);

    const menuFlt = [
        {name:'This Week', path:''},
        {name:'This Month', path:''},
        {name:'This Year', path:''},
        {name:'Last Weeks ', path:''},
        {name:'Last Months ', path:''},
        {name:'Last Years ', path:''},
        
    ] 

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
    

    return (
        <>
            <div>
                <div className='bg-red-900 text-white w-fit rounded-lg p-1 items-center'>
                    <h6 className='flex items-center mb-0 justify-end'>
                        Time '1 Hour' 
                        <div className='bg-marron text-white cursor-pointer rounded-md p-1'>
                            <BiTimeFive onClick={() => setBka(!bka)}/>
                        </div>
                    </h6>

                </div>

                <div className='flex justify-end'>
                    <div className={` bg-marron rounded-tl-xl rounded-bl-xl rounded-br-xl w-fit fixed mt-4 ${bka ? 'mr-0' : 'show'}`}>
                        
                        <ul className={`-ml-7 mr-1 ${!bka  && 'hidden' }`}>
                            <div className='-mb-2'>
                                <Labeldt title = {title} />
                            </div>

                            <div className='grid grid-cols-3 w-147 p-1'>
                                <div className='row-span-2 flex'>
                                    <div className='flex-row p-2 text-white w-32'>
                                        
                                        {menuFlt.map((val, index) => {
                                            return(                 
                                                <button
                                                    key = {index} 
                                                    to={val.path}
                                                    
                                                    className={`cursor-pointer no-underline flex flex-row duration-300 
                                                            text-gray-100 overflow-y-visible hover:bg-light-white hover:rounded-md 
                                                            hover:text-black w-28 `} >

                                                    <li className='flex items-center'>
                                                        <div className={`mr-1 mt-0.5 `}>{val.icon}</div>
                                                        <div className={`text-1xl duration-50`} >{val.name}</div> 
                                                    </li>
                                                </button>                           
                                            );
                                        })}
                                
                                    </div>
                                    <div className='p-2 text-white flex-row '>
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
                                
                                <div className='flex col-span-2'>
                                    <div className='flex gap-1 mt-1 bg-blue-100 -ml-5'>
                                        <DateTimeR/>
                                    </div>

                                </div>

                            </div>
                            
                            <div className='flex justify-end mt-1 mr-3'>
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