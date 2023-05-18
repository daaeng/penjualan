import React from "react"

const ModCard = () => {
    return(
        <>
            {/* Card Model default = RED */}
            <div className="flex justify-start">
                <div className='bg-redd sm:w-28 md:w-34 lg:w-72 rounded-tr-full relative sm:h-28 md:h-28 -mb-28 '>
                </div>
            </div>

            {/* Card Model sisi balik default = Green */}
            <div className="flex justify-end">
                <div className='bg-green-600 sm:w-28 md:w-34 lg:w-72 rounded-bl-full relative sm:h-28 md:h-34 -mb-36'>
                </div>
            </div>

            {/* Card Model Hadap atas = Yellow */}
            <div className="flex justify-start">
                <div className='bg-yellow-500 sm:w-28 md:w-34 lg:w-72 rounded-br-full relative sm:h-28 md:h-34 -mb-36'>
                </div>
            </div>

            {/* Card Model Hadap atas = Blue */}
            <div className="flex justify-end">
                <div className='bg-blue-600 sm:w-28 md:w-34 lg:w-72 rounded-tl-full relative sm:h-28 md:h-34 -mb-36'>
                </div>
            </div>

        </>
    )
}

export default ModCard

