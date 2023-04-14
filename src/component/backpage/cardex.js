import React from 'react'
import Labeldt from './label';
import { SiShopee } from 'react-icons/si';

export default function Cardex (props) {
    const title = () => {
        return ("Grafik Transaksi")
    }
    
    return (
        <>
            <div className='mb-1'>
                <Labeldt title = {title}/>
            </div>

            <div className='bg-white w-full p-1 rounded-md '>
                {/* <div className='flex flex-row items-center pt-8 '>
                    <img src={Logo} alt='sakir' className='w-9 h-9 '/>
                    <div>Shoping</div>
                </div> */}

                <SiShopee/>
                <h6>
                    tes tes tes{/* {props.title()} */}
                </h6> 
            </div>
        </>
      );
}