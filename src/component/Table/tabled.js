import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const Tabled = (props) => {

  // const handleChange = () => {

  // }

  return (  
    <>
      <div className=''>
        <div className='bg-white sm:h-96 md:h-128= lg:h-128 rounded-lg' style={{ width: '100%' }}>
          <DataGrid
            
            rows={props.data}
            columns={props.columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onRowSelectionModelChange={props.dtSelection}
            checkboxSelection

            slots={{
              toolbar: GridToolbar, 
            }}

          />
        </div>
      </div>
    </>
  );
}

export default Tabled