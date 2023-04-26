import React from 'react'
import Labeldt from '../backpage/label'

function Box2() {
    const title = () => {
        return ("Produk Terlaris")
      }
    return(
        <>
            <div className='flex'>
                <div className='bg-blue-100 shadow-md p-2 rounded-md w-full h-52'>
                    <Labeldt title = {title} />

                    <div className='bg-slate-50 p-1 rounded-md mt-2 h-40'>
                        isi konten, barang paling laris di atas
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box2