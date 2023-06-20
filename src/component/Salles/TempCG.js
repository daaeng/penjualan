import CardSingleRed from '../backpage/CardSingle/cardSingleRed';
import CardSingleGree from '../backpage/CardSingle/cardSinglegree';
import CardSingleYell from '../backpage/CardSingle/cardSingleYell';
import CardSingleBlu from '../backpage/CardSingle/cardSingleBlu';

const TempCG = () => {

    return(
        <>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-1 p-2 rounded-lg  w-full
                            md:text-lg sm:text-sm '>

                <CardSingleRed className='grid lg:col-span-1 md:col-span-2'/>
                <CardSingleGree className='grid lg:col-span-1 md:col-span-2'/>
                <CardSingleYell className='grid lg:col-span-1 md:col-span-2'/>
                <CardSingleBlu className='grid lg:col-span-1 md:col-span-2'/>

            </div>
        </>
    )
}

export default TempCG