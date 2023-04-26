import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Labeldt from '../backpage/label';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 100 },
  { field: 'lastName', headerName: 'Last name', width: 100 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 50,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  { field: 'lastransaksi', headerName: 'Last Transaction', width: 125},
  { field: 'ttransaksi', headerName: 'Total Transaction', width: 125},
];

const data = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, lastransaksi: '01/01/2023', ttransaksi: 25 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, lastransaksi: '02/01/2023', ttransaksi: 38 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, lastransaksi: '10/01/2023', ttransaksi: 17 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 19, lastransaksi: '03/01/2023', ttransaksi: 3 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, lastransaksi: '08/01/2023', ttransaksi: 10 },
  { id: 6, lastName: null, firstName: 'Melisandre', age: 29, lastransaksi: '09/01/2023', ttransaksi: 60 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, lastransaksi: '06/01/2023', ttransaksi: 10 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, lastransaksi: '05/01/2023', ttransaksi: 46 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 18, lastransaksi: '07/01/2023', ttransaksi: 2 },
  { id: 10, lastName: 'Zahro', firstName: 'Aulia', age: 24, lastransaksi: '04/01/2023', ttransaksi: 53 },
  
  
];

const title = () => {
  return ("Data Pelanggan")
}

export default function Tabled() {
  return (
    
    <>
      <div className=''>
        <div className=''>
          <div className='mb-1'>
            <Labeldt title = {title}/>
          </div>
        </div>
        <div className='bg-white sm:h-96 md:h-96 lg:h-256 rounded-lg' style={{ width: '100%' }}>
          
          <DataGrid
            
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}