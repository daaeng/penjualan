import React from 'react'

function Box2(props) {    

    return(
        <>
            <div className='flex'>

                    <div className='bg-slate-50 p-1 rounded-md mt-2 h-fit w-full'>

                        {props.isibox()}
                        
                    </div>
                </div>
            
        </>
    )
}

export default Box2