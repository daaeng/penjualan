import React from "react";
import { SiAudiomack } from "react-icons/si";
import FilterTime from "../../backpage/filterTime";
import { VscDebugStepBack } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

const DdPiutang = () => {

    const navigate = useNavigate()

    const Backto =() => {
        navigate('/detpiutang')
        console.log('Mundur');
    }

    return(
        <>
            <div className=' sm:ml-8 md:ml-8 lg:ml-14 mr-3'>
                <div className='mt-1'>
                    <div className='grid grid-cols-2'>  
                        <h2 className='col-span-1 font-mono text-black items-center flex'>
                            <SiAudiomack className='mr-1' size={'20'}/>Dashboard
                        </h2>

                        <div className='col-span-1 flex justify-end items-center font-mono text-black '>
                            <FilterTime />
                        </div>
                    </div>
                    <div className='border ' />

                    <div className="flex p-1">
                        <div className="cursor-pointer p-1 text-lg" onClick={Backto}>
                            <VscDebugStepBack />
                        </div>

                            Dashboard, Piutang

                        <div className="underline ml-1">
                            Detail Customer Piutang
                        </div>

                    </div>
                    
                </div>                

            </div>
        </>
    )
}

export default DdPiutang