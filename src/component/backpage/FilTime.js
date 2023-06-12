import React, {useState } from "react";
import { DateRangePicker } from "react-date-range";
import { BiTime } from "react-icons/bi";
import { addDays } from 'date-fns';
// import axios from "../config/api/axios";

// const baseURL = '/API/Dashboard/getSalesGrossByDate'

const FilTime =() => {

    const [open, setOpen] =  useState();

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), -7),
          key: 'selection'
        }
    ]);

    // useEffect(() => {
    //     axios.get(baseURL, {
    //         withCompare : '',
    //         comparison : '',
    //         withDetail: '',
    //     }).then ((response) => {
    //         console.log(response.data);
    //     })

    // })

    return(
        <>
            <div className = {`flex justify-end h-fit py-2 pt-10 duration-300  ${open ? 'w-48' : ' sm:w-10 md:w-16 '} `}>
                <div className=' -ml-5 text-white'>
                    <div className="bg-redd p-1 flex justify-end w-44 rounded-lg items-center">
                        'Last 1 Hour'
                        <BiTime size={'28'} className={`cursor-pointer hover:text-darkgolden ml-3`} onClick={()=> setOpen(!open)}/>
                        
                    </div>
                </div>
                <div className={`duration-50 fixed mt-5 ${!open && 'hidden'}`}>
                    <div className='items-center rounded-xl bg-redd p-2 w-146 '>
                        <div>
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
                            {/* <div className={`cursor-pointer no-underline flex flex-row duration-300 
                                   items-center text-gray-100 overflow-y-visible
                                    hover:bg-light-white hover:text-black rounded-lg px-2.5 py-4 -ml-2 -mr-2`}>
                                aaaa
                            </div> */}
                        </div>

                        {/* {menu.map((val, index) => {
                            return (
                                <NavLink
                                    key = {index} 
                                    to={val.path}               
                                    className={`cursor-pointer no-underline flex flex-row duration-300 
                                    ${!open && 'active' }items-center text-gray-100 overflow-y-visible
                                    hover:bg-light-white hover:text-black rounded-lg px-2.5 py-4 -ml-2 -mr-2`} >
                                            <div className={`ml-1 text-2xl `}>
                                                {val.icon}
                                            </div>
                                            <div className={`ml-2 duration-50 ${!open && 'hidden'}`} >{val.name}</div> 
                                </NavLink>
                            );
                        })} */}

                    </div>

                </div>
                
            </div>
        </>
    )
}

export default FilTime
