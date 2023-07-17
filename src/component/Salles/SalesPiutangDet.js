import React from "react";
import { SiAudiomack } from "react-icons/si";
import { VscDebugStepBack } from "react-icons/vsc";
import TablePiutang from "../backpage/Tabel/TabelPiutang";
import { useNavigate } from "react-router-dom";
import CobaChart from "../chart/coba";

const SalesPiutangDet =(props) => {

    const navigate = useNavigate()

    const BackBack =() => {
        navigate('/sales')
        console.log('Mundur ke Dash Sales');
    }

    return (
        <>
            <div className=' sm:ml-8 md:ml-8 lg:ml-14 mr-3'>
                <div className=' mt-1'>
                    <div className='grid grid-cols-2'>  
                        <h2 className='col-span-1 font-mono text-black items-center flex'>
                            <SiAudiomack className='mr-1' size={'20'}/>Sales
                        </h2>
                    </div>
                    <div className='border ' />

                    <div className="flex p-1">
                        <div className="cursor-pointer font-bold p-1 text-lg flex items-center -mt-2" onClick={BackBack}>
                            <VscDebugStepBack />

                            Dashboard,  
                        </div>

                        <div className="underline ml-1">
                            Piutang
                        </div>

                    </div>
                </div>

                <div className='ml-2 mt-3 '>
                    <h3>
                        Sales ! (DUMMY)
                    </h3>
                    <div className='border ml-56 -mt-5 mb-2'/>

                </div>

                <div className="p-1 mt-3">

                    <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-2">
                        <div className="col-span-1 p-2 bg-marron">
                            <CobaChart/>
                        </div>

                        <div className="col-span-1 p-2 bg-marron">
                            <TablePiutang />
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default SalesPiutangDet