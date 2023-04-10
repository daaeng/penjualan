import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

function DateTimeR () { 

  const [value, setValue] = useState({ 

    startDate: new Date(), 
    endDate: new Date().setMonth(11) 

  }); 

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 

  } 

  return (
    <>
      <div className="rounded w-60 px-1 py-1 bg-marron text-white">
       
        <Datepicker 
          value={value} 
          onChange={handleValueChange} 
          showShortcuts={false} 
        /> 
        
          
      </div>
    </>

  );
}; 
export default DateTimeR;