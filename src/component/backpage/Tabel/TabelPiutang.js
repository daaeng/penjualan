import * as React from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import Tabled from '../../Table/tabled';
import axios from '../../config/api/axios';
import { useNavigate } from 'react-router-dom';

const baseURL = '/products'

export default function TablePiutang() {

  const navigate = useNavigate()

  const columns = [
    { field: 'id', headerName: 'ID', width: 30 },
    { field: 'title', headerName: 'title', width: 100 },
    { field: 'category', headerName: 'category', width: 150 },
    {
      field: 'price',
      headerName: 'price',
      type: 'number',
      width: 50,
    },
    { field: 'stock', headerName: 'stock', width: 65},
    // { field: 'thumbnail', headerName: 'thumbnail', width: 125},
    { field: 'rating', headerName: 'rating', width: 65},
  ];

  // const data = [
  //   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35, lastransaksi: '01/01/2023', ttransaksi: 25, },
  //   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42, lastransaksi: '02/01/2023', ttransaksi: 38 },
  //   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31, lastransaksi: '10/01/2023', ttransaksi: 17 },
  //   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 19, lastransaksi: '03/01/2023', ttransaksi: 3 },
  //   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null, lastransaksi: '08/01/2023', ttransaksi: 10 },
  //   { id: 6, lastName: null, firstName: 'Melisandre', age: 29, lastransaksi: '09/01/2023', ttransaksi: 60 },
  //   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, lastransaksi: '06/01/2023', ttransaksi: 10 },
  //   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36, lastransaksi: '05/01/2023', ttransaksi: 46 },
  //   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 18, lastransaksi: '07/01/2023', ttransaksi: 2 },
  //   { id: 10, lastName: 'Zahro', firstName: 'Aulia', age: 24, lastransaksi: '04/01/2023', ttransaksi: 53 },
      
  // ];

  const [selRow, setSelRow] = useState()
  const [rid, setRid] = useState()
  // const [stNm, setStNm] = useState()
  // const [trx, setTrx] = useState()
  // const [ttrx, setTTrx] = useState()

  const onRowClick = (clickedRow) => {
    setSelRow(clickedRow.row);
    setRid(clickedRow.row.id)  
    // setStNm(clickedRow.row.title)  
    // setTrx(clickedRow.row.category)  
    // setTTrx(clickedRow.row.price)  

    // navigate('/detdtsalesman')

  }
  
  const infoTab =() => {
    let dTab = selRow
    console.log('V Table Data : ', dTab);
    if (dTab != null) {
      navigate(`/detdtsalesman/${rid}`, {state: {rid}})
      
    } else {
      console.log('Mohon pilih data Table yang ingin di lihat');
    }
  }
  
  // const minuteTO = 960000
  // 16-menit refersh hitungan ~ MS ~~
  useEffect(() => {
    infoTab()
  })
  
  const [ data, setData] = useState([])
  useEffect(() =>{
    axios.get(baseURL)
    .then((response) => {
      setData(response.data.products);
    // setData(response)
    })
  },[])

  return (
    
    <>
      <div className=''>
        
        <div className='bg-white sm:h-96 md:h-128 rounded-lg' style={{ width: '100%' }}>
          <Tabled 
            data={data} 
            columns={columns} 
            onRowClick={onRowClick} 
            
          />
        </div>
        
        {/* <div className='p-1'>
          <div className='p-2 bg-teal-400 rounded-lg'>
              <div>Data Active</div>
              
              <div className=''>
                <div className=' mr-2'>
                  id : {rid}
                </div>
                <div className=' mr-2'>
                  title : {stNm}
                </div>
                <div className=' mr-2'>
                  category : {trx}
                </div>
                <div className=' mr-2'>
                  price : ${ttrx}
                </div>
              </div>

              <div className='justify-end'>
                <div 
                  className='p-1 bg-teal-500 w-full rounded-lg hover:bg-teal-600 text-center hover:text-white'>
                    Detail
                </div>
              </div>
          </div>
        </div> */}

      </div>
    </>
  );
}