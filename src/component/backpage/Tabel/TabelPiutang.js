import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
// import EditIcon from '@mui/icons-material/Edit';
// import { useNavigate } from 'react-router-dom';
// import { BiStreetView } from 'react-icons/bi';
// import MaterialTable from "material-table";

export default function TablePiutang() {

  // const navigate = useNavigate()

  const columns = [
    // { no: 'no', headerName: 'No', width:30},
    // {
    //   field: 'actions',
    //   type: 'actions',
    //   headerName: 'View',
    //   width: 55,
    //   cellClassName: 'actions',
    //   getActions: ({ id }) => {
    //     // const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

    //     return [
    //       <GridActionsCellItem
    //         icon={<BiStreetView size={'20'}/>}
    //         label="Edit"
    //         className="textPrimary"
    //         onClick={()=> amblDt(id)}
    //         color="inherit"
    //       />,
    //     ];
    //   },
    // },
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

  // const amblDt =(id) => {
  //   let sell = (id)
  //   let detail = JSON.parse(sell)
  //   // setSelect(sell)
  //   console.log('datanya select : ', sell);
  //   console.log('View All : ', detail);
  //   // navigate('/detdtsalesman', sell)
  // }

  const [selRow, setSelRow] = useState()

  // const onSelectionChange = (selRow) => {
  //   console.log(selRow);
  // }

  const onRowClick = (e, clickedRow) => {
    setSelRow(clickedRow);
    console.log(selRow);
  }
 
  return (
    
    <>
      <div className=''>
        
        <div className='bg-white sm:h-96 md:h-128= lg:h-135 rounded-lg' style={{ width: '100%' }}>
          <DataGrid
            
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            onRowClick={onRowClick}

            slots={{
              toolbar: GridToolbar, 
            }}
            // options={
              
            // }
            // onSelectionChange={onSelectionChange}

          />

          {/* <MaterialTable
            data={data}
            columns={columns}
            // pageSize={5}
            // rowsPerPageOptions={[5]}
            // checkboxSelection
            onRowClick={onRowClick}

            // slots={{
            //   toolbar: GridToolbar, 
            // }}
            // options={
              
            // }
            onSelectionChange={onSelectionChange}
          />

          {selRow} */}
          {/* {selRow && <h3>select : {selRow} </h3>} */}
        </div>
      </div>
    </>
  );
}