import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SiAudiomack } from "react-icons/si";
import { VscDebugStepBack } from "react-icons/vsc";
import axios from "../../config/api/axios";

const baseURL = '/products?'

const DetSale =() => {

    const navigate = useNavigate()
    const location = useLocation();


    const BackBack =() => {
        navigate('/sales')
        console.log('Mundur ke Dash Sales');
    }

    const BackBack2 =() => {
        navigate('/detpiutang')
        console.log('Mundur ke Dash Sales');
    }

    const dtGetSend =() => {
        let show = location.state.rid
        console.log(show);
        axios.get(baseURL, {
            params: {
                baseURL: show
            }
        }).then((resp) => {
            console.log(resp.data);
        })
    }

    useEffect(() => {
        dtGetSend()
    })

    return(
        <>
            <div className=' sm:ml-8 md:ml-8 lg:ml-14 mr-3'>
                <div className=' mt-1'>
                    <div className='grid grid-cols-2'>  
                        <h2 className='col-span-1 font-mono text-white items-center flex'>
                            <SiAudiomack className='mr-1' size={'20'}/>Sales Detail
                        </h2>
                    </div>
                    
                    <div className='border ' />

                    <div className="flex p-1 text-white">
                        <div className="cursor-pointer font-bold p-1 text-lg flex items-center -mt-2" onClick={BackBack}>
                            <VscDebugStepBack />
                            Dashboard,  
                        </div>

                        <div className="cursor-pointer font-bold p-1 text-lg flex items-center -mt-2 " onClick={BackBack2}>
                            Penjualan,
                        </div>

                        <div className="underline ml-1 " >
                            Detail Salesman,  
                        </div>


                    </div>
                </div>

                <div className='ml-2 mt-3 text-white'>
                    <h3>
                        Detail Salesman
                    </h3>
                    {/* <div className='border ml-52 -mt-5 mb-2'/> */}

                </div>

                <div className="p-1 mt-3">

                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
                        <div className="col-span-1 p-2 bg-marron text-white">
                            {/* <SalesDetSalesman/> */}
                            sudah dapat id data tinggal masukan params API, ini ID nya : _
                            {location.state.rid}
                        </div>

                        <div className="col-span-1 p-2 bg-marron">
                            tes tes data halaman det sales
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default DetSale

