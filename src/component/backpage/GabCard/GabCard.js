import React from "react";
import CardSingleRed from "../cardSingleRed";
import CardSingleGree from "../cardSinglegree";
import CardSingleYell from "../cardSingleYell";
import CardSingleBlu from "../cardSingleBlu";

const GabCard =() => {
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
            Gambar
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
            Gambar
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
            Gambar
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
            Gambar
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
        <div className="p-2">

            <div className="grid lg:grid-cols-4 md:cols-2 gap-2">
            {/* sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1 */}
                {/* <div className='grid col-span-1 gap-3 p-2 rounded-lg  w-full
                                md:text-lg sm:text-sm '> */}

                    <CardSingleRed atas = {atas} kanan = {kanan} bwh = {bwh} className='grid lg:col-span-1 md:col-span-2'/>
                    <CardSingleGree atasIjo = {atasIjo} kananIjo = {kananIjo} bwhIjo = {bwhIjo} className='grid lg:col-span-1 md:col-span-2'/>
                    <CardSingleYell atasKng = {atasKng} kananKng = {kananKng} bwhKng = {bwhKng} className='grid lg:col-span-1 md:col-span-2'/>
                    <CardSingleBlu atasBru = {atasBru} kananBru = {kananBru} bwhBru = {bwhBru} className='grid lg:col-span-1 md:col-span-2'/>

                {/* </div> */}
            </div>
        </div>
        </>
    )
}

export default GabCard
