import React, {useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { BiTime } from "react-icons/bi";
import axios from "../config/api/axios";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const baseURL = '/rptReact/Dashboard/getSalesRetur?'

const FilTime =({onChange}) => {

    const [open, setOpen] =  useState();
    const [tgl, setTgl] = useState({
        startDate: new Date().setHours(-168),
        endDate: new Date()
    });

    const handleTglChange = (newTgl) => {
        console.log("Range Date:", newTgl);
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
                branch : brDown,
                onlyDiva :'',
            }
        }).then(response => {
            console.log(response.data.data);
        })
    }

    const [drDown, setDrDown] = useState([])
    const optChange =(value) => {
        console.log("Compare:", value);
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
    
    // const options2 = [
    //     { value: 'retail', label: 'Retail', },
    //     { value: 'all retail', label: 'All Retail', },
    // ];

    // const options3 = [
    //     { value: 'grosir', label: 'Grosir', },
    //     { value: 'all grosir', label: 'All Grosir', },
    //     { value: 'onlyDiva', label: 'Only Diva', },
    // ];
    
    const optionsAll = [
        { value: 'retail', label: 'Retail', },
        { value: 'all retail', label: 'All Retail', },
        { value: 'grosir', label: 'Grosir', },
        { value: 'all grosir', label: 'All Grosir', },
        { value: 'onlyDiva', label: 'Only Diva', },
    ];

    // const showDropDown =() => {
    //     let userDt = sessionStorage.getItem('userData')
    //     let categ = JSON.parse(userDt).userCategID
    //     let jabid = JSON.parse(userDt).userJabID
    //     console.log('userCategID:', categ, ',userJabID:', jabid );
    // }

    const defaultOption = options[null];
    
    const [brDown, setBrDown] = useState([])
    const BranchDt =(value) => {
        console.log("Branch:", value);
        setBrDown(value);
    }

    // const [showDd, setShowDd] = useState([])
    
    // const BranchDt = (value) => {
    //     console.log('Branch : ',value);
    //     setBrDown(value)
    //     let dataBr = brDown.value 
    //     console.log(dataBr);

    //     let userDt = sessionStorage.getItem('userData')
    //     // console.log('user', userDt);

    //     let str = JSON.parse(userDt).userCategID
    //     let str2 = JSON.parse(userDt).userJabID
    //     console.log('userCategID:', str, ',userJabID:', str2 );
        
    //     if(userDt){
    //         setBrDown(
    //             options2
    //             // {
    //             //     dtDrDn : [
    //             //         { value: 'all retail', label: 'All Retail', },
    //             //         { value: 'retail', label: 'Retail', },
    //             //     ]
    //             // }
    //         )
            
    //     } else{
    //         setBrDown(
    //             options3
    //             // {
    //             //     dtDrDn: [
    //             //         { value: 'grosir', label: 'All Retail', },
    //             //         { value: 'all grosir', label: 'Retail', },
    //             //         { value: 'onlyDiva', label: 'Only Diva', },
    //             //     ]
    //             // }
    //         )
    //         console.log('gagal');
    //     }
    // }

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
                                        <Dropdown 
                                            options={optionsAll}  
                                            onChange={BranchDt} 
                                            value={defaultOption} 
                                            placeholder="Pilih Branch" 

                                            className="w-46 text-sm mt-1 "/>

                                        {/* {options2.map((val, idx) => (
                                           val.value <= 15
                                            ? 
                                            (<Dropdown options={options2}  
                                                key={idx}
                                                onChange={BranchDt} 
                                                value={defaultOption} 
                                                placeholder="Pilih Branch"  />)
                                            : 
                                            (<Dropdown options={options3}  
                                                key={idx}
                                                onChange={BranchDt} 
                                                value={defaultOption} 
                                                placeholder="Pilih Branch"  />)
                                        ))} */}

                                        {/* {options2 !== null ? 
                                            (
                                                <>  
                                                    <Dropdown 
                                                    options={options2}  
                                                    onChange={BranchDt} 
                                                    value={defaultOption} 
                                                    placeholder="Pilih Branch" 

                                                    className="w-46 text-sm mt-1 "/>
                                                </>
                                            ): (
                                                <>
                                                    <Dropdown 
                                                    options={options3}  
                                                    onChange={BranchDt} 
                                                    value={defaultOption} 
                                                    placeholder="Pilih Branch" 

                                                    className="w-46 text-sm mt-1 "/>
                                                </>
                                            )
                                        
                                        } */}

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// import React, {useEffect, useState } from "react";
// import Datepicker from "react-tailwindcss-datepicker";
// import { BiTime } from "react-icons/bi";
// import axios from "../config/api/axios";
// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// const baseURL = '/rptReact/Dashboard/getSalesRetur?'
// const BranchURL = '/rptReact/getBranch'

// const FilTime =({onChange}) => {

//     const [open, setOpen] =  useState();
//     const [tgl, setTgl] = useState({
//         startDate: new Date().setHours(-168),
//         endDate: new Date()
//     });

//     const handleTglChange = (newTgl) => {
//         console.log("Range Date:", newTgl);
//         setTgl(newTgl);
//     }

//     const UbahTgl = () => {
//         let data1 = tgl.startDate
//         let data2 = tgl.endDate
//         let data = drDown.value
//         let dataBr = brDown.value

//         console.log('filter', data);
//         console.log('Filter', dataBr);
//         console.log('filter', data1);
//         console.log('filter', data2);

//         axios.get(baseURL, {
//             params: {
//                 startDate : data1,
//                 endDate : data2,
//                 comparioson : drDown,
//                 branch : brDown,
//                 onlyDiva :'',
//             }
//         }).then(response => {
//             console.log(response.data.data);
//         })
//     }

//     const [drDown, setDrDown] = useState([])
//     const optChange =(value) => {
//         console.log("Compare:", value);
//         setDrDown(value);
//         // let dataDr = value.value
//     }

//     const options = [
//         { value: 'LD', label: 'Last Day', },
//         { value: 'LW', label: 'Last Week' },
//         { value: 'LM', label: 'Last Month' },
//         { value: 'LQ', label: 'Last Quarter' },
//         { value: 'LY', label: 'Last Year' },
//     ];

//     const defaultOption = options[null];

//     const [brDown, setBrDown] = useState([])
//     const BranchDt =(value) => {
//         console.log("Branch:", value);
//         setBrDown(value);
//     }

//     const [mnDrop, setMnDrop] = useState([])

//     let dt = sessionStorage.getItem('userData')
//     let user = JSON.parse(dt).code
//     axios.get(BranchURL,{
//         params : {
//             user : user,
//         }
//     }).then((resp) => {
//         setMnDrop(resp.data.data.map((sdrop) => sdrop.description));
//         // setMnDrop({
//         //     value: resp.data.data.map((sdrop) => sdrop.code),
//         //     label: resp.data.data.map((sdrop) => sdrop.description)
//         // })
//     })
    

//     return(
//         <>
//             <div className = {`flex justify-end h-fit py-2 pt-10 duration-300  ${open ? 'w-48' : ' sm:w-10 md:w-16 '} `}>
//                 <div className=' -ml-5 text-white' onClick={()=> setOpen(!open)}>
//                     <div className="bg-redd p-1 flex justify-end w-fit rounded-lg items-center">
//                         Filter
//                         <BiTime size={'28'} className={`cursor-pointer hover:text-darkgolden ml-3`} />
                        
//                     </div>
//                 </div>
//                 <div className={`duration-50 fixed mt-5 ${!open && 'hidden'}`}>
//                     <div className='items-center rounded-xl bg-redd p-2 w-135'>
//                         <div className="w-68 flex justify-end">
//                             <Datepicker
//                                 value={tgl}
//                                 onChange={handleTglChange}
//                             />
//                         </div>

//                         <div className="grid grid-cols-3">
//                             <div className="p-1 w-full col-span-1">
//                                 <div className="text-white">
//                                     Versus
//                                 </div>
//                                 <Dropdown options={options}  
//                                     onChange={optChange} 
//                                     value={defaultOption} 
//                                     placeholder="Pilih Compare" 

//                                     className="w-46 text-sm mt-1"/>
//                             </div>

//                             <div className="w-full p-1 col-span-2">                                
//                                 <div className="text-white">
//                                     Branch
//                                 </div>

//                                 <div className="flex">
//                                     <div>
                                        
//                                     </div>
//                                     <div className="flex">
//                                         <Dropdown 
//                                             options={mnDrop}  
//                                             onChange={BranchDt} 
//                                             value={defaultOption} 
//                                             placeholder="Pilih Branch" 

//                                             className="w-46 text-sm mt-1 "/>

//                                     </div>

//                                 </div>
//                             </div>
//                         </div>

//                     </div>
                    
//                     <div className="flex justify-end">
//                         <div onClick={() => UbahTgl(onChange(tgl.startDate, tgl.endDate, drDown.value, brDown))}
//                             className="bg-blue-200 font-bold cursor-pointer hover:text-green-200 hover:bg-green-600 rounded-lg mt-2 mr-1 p-1 w-20 flex justify-center">
//                             Apply
//                         </div>

//                     </div>

//                 </div>
                
//             </div>
//         </>
//     )
// }

// export default FilTime
