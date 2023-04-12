import React from 'react'

function Box2() {
    return(
        <>
            <div className='flex'>
                <div className='bg-white shadow-md p-2 rounded-md w-full h-44'>
                    <div className='bg-red-300 w-32 p-1 rounded-md -mt-5'>
                        <h6>
                            Produk Terlaris
                        </h6> 
                    </div>
                    <div className='bg-slate-200 p-1 rounded-md mt-2 h-32'>
                        isi konten, barang paling laris di atas
                    </div>
                </div>
            </div>
        </>
    )
}

export default Box2