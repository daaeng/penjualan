import CardSingleRed from '../backpage/cardSingleRed'
import CardSingleGree from '../backpage/cardSinglegree'
import CardSingleYell from '../backpage/cardSingleYell'
import CardSingleBlu from '../backpage/cardSingleBlu'
import { FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsBoxSeamFill } from "react-icons/bs";
import { MdPayments, MdPointOfSale } from 'react-icons/md'

const TempCG = () => {

    //-------------------------------------------------------------------------------------------------------------------------------------------
    //Card mrh >---------------------------------------------------------------------------------------------------------------------------------  
    const atas = () => {
        return (
        <>
            Piutang
        </>
        )
    }
    
    const kanan = () => {
        return (
        <>
            <FaRegMoneyBillAlt className="sm:w-0 md:w-fit text-red-400 -rotate-45 sm:-mt-5 md:mb-2 lg:-mb-7" size={'70'}/>
        </>
        )
    }
 
    const bwh = () => {
        return (
        <>
            841.110
        </>
        )
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------
    //Card Ijo >---------------------------------------------------------------------------------------------------------------------------------
    const atasIjo = () => {
        return (
        <>
            Pembayaran
        </>
        )
    }

    const kananIjo = () => {
        return (
        <>
            <MdPayments className="sm:w-0 md:w-fit text-green-600 -rotate-45 sm:-mt-5 md:mb-2 lg:-mb-7" size={'70'}/>
        </>
        )
    }

    const bwhIjo = () => {
        return (
        <>
            724.859
        </>
        )
    }

    //-------------------------------------------------------------------------------------------------------------------------------------------
    //Card Kng >---------------------------------------------------------------------------------------------------------------------------------
    const atasKng = () => {
        return (
        <>
            Item Terjual
        </>
        )
    }

    const kananKng = () => {
        return (
        <>
            <BsBoxSeamFill className="sm:w-0 md:w-fit text-yellow-400 -rotate-45 sm:-mt-5 md:mb-2 lg:-mb-7" size={'70'}/>
        </>
        )
    }

    const bwhKng = () => {
        return (
        <>
            1.257.924
        </>
        )
    }
    
    //-------------------------------------------------------------------------------------------------------------------------------------------
    //Card Bru >---------------------------------------------------------------------------------------------------------------------------------
    const atasBru = () => {
        return (
        <>
            Penjualan
        </>
        )
    }

    const kananBru = () => {
        return (
        <>
            <MdPointOfSale className="sm:w-0 md:w-fit text-blue-600 -rotate-45 sm:-mt-5 md:mb-2 lg:-mb-7" size={'70'}/>
        </>
        )
    }

    const bwhBru = () => {
        return (
        <>
            736.142
        </>
        )
    }

    return(
        <>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-1 p-2 rounded-lg  w-full
                            md:text-lg sm:text-sm '>

                <CardSingleRed atas = {atas} kanan = {kanan} bwh = {bwh} className='grid lg:col-span-1 md:col-span-2'/>
                <CardSingleGree atasIjo = {atasIjo} kananIjo = {kananIjo} bwhIjo = {bwhIjo} className='grid lg:col-span-1 md:col-span-2'/>
                <CardSingleYell atasKng = {atasKng} kananKng = {kananKng} bwhKng = {bwhKng} className='grid lg:col-span-1 md:col-span-2'/>
                <CardSingleBlu atasBru = {atasBru} kananBru = {kananBru} bwhBru = {bwhBru} className='grid lg:col-span-1 md:col-span-2'/>

            </div>
        </>
    )
}

export default TempCG