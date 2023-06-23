import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export default function Tabled(props) {

  return (  
    <>
      <div className=''>
        ~ Judul Label ~
        <div className='bg-white sm:h-96 md:h-128= lg:h-128 rounded-lg' style={{ width: '100%' }}>
          <DataGrid
            
            rows={props.data}
            columns={props.columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection={false}

            slots={{
              toolbar: GridToolbar, 
            }}

          />
        </div>
      </div>
    </>
  );
}