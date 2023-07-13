import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';

export default function TablePiutang() {

  // const navigate = useNavigate()

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
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
    { field: 'detail', headerName: 'Detail', width: 125},
  ];

  const data = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, lastransaksi: '01/01/2023', ttransaksi: 25, },
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

  const [selRow, setSelRow] = useState()
  const [rid, setRid] = useState()
  const [stNm, setStNm] = useState()
  const [trx, setTrx] = useState()
  const [ttrx, setTTrx] = useState()

  const onRowClick = (clickedRow) => {
    setSelRow(clickedRow);
    setRid(clickedRow.row.id)  
    setStNm(clickedRow.row.firstName)  
    setTrx(clickedRow.row.lastransaksi)  
    setTTrx(clickedRow.row.ttransaksi)  
  }

  const infoTab =() => {
    let dTab = selRow
    console.log('V Data : ', dTab);
  }
 
  useEffect(() => {
    infoTab()
  })

  return (
    
    <>
      <div className=''>
        
        <div className='bg-white sm:h-96 md:h-128= lg:h-135 rounded-lg' style={{ width: '100%' }}>
          <DataGrid
            
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            onRowClick={onRowClick}
            slots={{
              toolbar: GridToolbar, 
            }}

          />

          <div className='p-1'>
            <div className='p-2 bg-teal-400 rounded-lg'>
                <div>Data Active</div>
                
                <div className=''>
                  <div className=' mr-2'>
                    id : {rid}
                  </div>
                  <div className=' mr-2'>
                    firstName : {stNm}
                  </div>
                  <div className=' mr-2'>
                    lastransaksi : {trx}
                  </div>
                  <div className=' mr-2'>
                    ttransaksi : {ttrx}
                  </div>
                </div>

                <div className='justify-end'>
                  <div className='p-1 bg-teal-500 hover:bg-teal-600 text-center hover:text-white'>
                      Send
                  </div>
                </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}