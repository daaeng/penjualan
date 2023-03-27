<<<<<<< HEAD
import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

const DateTimeR = () => { 

  const [value, setValue] = useState({ 

    startDate: new Date(), 
    endDate: new Date().setMonth(11) 

  }); 

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 

  } 

  return (
    <div className="rounded w-60 px-1 py-1 bg-gray-100">
      <Datepicker 
        
        value={value} 
        onChange={handleValueChange} 
        showShortcuts={true} 
        /> 
    
    </div>

  );
}; 
export default DateTimeR;
=======
import React from "react"

// import {DateRangePickerComponent} from '@syncfusion/ej2-react-calendars'

const DateTimeR = () => {
  return(
    <>
      {/* <DateRangePickerComponent></DateRangePickerComponent> */}
    </>
  )
}

export default DateTimeR
>>>>>>> 7c244e564ca1e5d6052bfab11f0b4ac401e5f066
