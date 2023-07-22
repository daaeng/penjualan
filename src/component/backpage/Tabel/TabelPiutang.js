import * as React from 'react';
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
    { field: 'brand', headerName: 'Brand', width: 100 },
    { field: 'stock', headerName: 'Stock', width: 65},
    { field: 'rating', headerName: 'Rating ★', width: 85},
  ];

  const [selRow, setSelRow] = useState()
  const [rid, setRid] = useState()

  const onRowClick = (clickedRow) => {
    setSelRow(clickedRow.row);
    setRid(clickedRow.row.id)  
  }
  
  const infoTab =() => {
    let dTab = selRow
    // console.log('V Table Data : ', dTab);
    if (dTab != null) {
      navigate(`/detdtsalesman/${rid}`, {state: {rid}})
    } 
    // else {
      // console.log('Mohon pilih data Table yang ingin di lihat');
    // }
  }

  const minuteTO = 960000
  // 16-menit refersh hitungan ~ MS ~~
  const [ data, setData] = useState([])
  useEffect(() =>{
    axios.get(baseURL)
    .then((response) => {
      setData(response.data.products);
    }, minuteTO)
  },[])
  
  useEffect(() => {
    infoTab()
  })

  return (
    
    <>
      <div className=''>
        
        <div className='bg-white sm:h-96 md:h-auto rounded-lg' style={{ width: '100%' }}>
          <Tabled 
            data={data} 
            columns={columns} 
            onRowClick={onRowClick} 
            
          />
        </div>

      </div>
    </>
  );
}