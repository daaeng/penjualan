import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 

function DateTimeR () { 

  const [value, setValue] = useState({ 

    startDate: new Date().setHours(-168) , 
    endDate: new Date()

  }); 

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue); 
    setValue(newValue); 

  } 

  return (
    <>
      <div className="rounded w-72 px-1 py-1 bg-marron text-white">
       
        <Datepicker 
          datepicker-autohide={false}
          value={value} 
          onChange={handleValueChange} 
          showShortcuts={true} 
        /> 
        
          
      </div>
    </>

  );
}; 
export default DateTimeR;

// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------



// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';

// export default function DateTimeR() {
//   const [value, setValue] = React.useState([
//     dayjs('2022-04-17'),
//     dayjs('2022-04-21'),
//   ]);

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer components={['DateRangeCalendar', 'DateRangeCalendar']}>

//           <DateRangeCalendar
//             value={value}
//             onChange={(newValue) => setValue(newValue)}
//           />
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }
