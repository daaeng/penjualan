import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import axios from '../../config/api/axios';
import { ToastContainer, toast } from 'react-toastify'
import { FiLogOut } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

// const LOGOut_URL = '/api/Auth/LogOff?token=a26da23c-103b-4ad4-8e24-a752c8dfb3b8'
const LOGOut_URL = '/api/Auth/LogOff?token='

export default function AlertDialog() {

  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const sToastLogOut =() =>{
    toast.success('Log Out Berhasil !', {
        position: toast.POSITION.TOP_CENTER
    })
    console.log('Log Out Done');
  }

  const sToastLogOutFail =() =>{
      toast.warning('Log Out Batal !', {
          position: toast.POSITION.TOP_CENTER
      })
      console.log('Proses LogOut Gagal');
      // navigate('/sales')
  }

  React.useEffect(() => {
    let userData = sessionStorage.getItem('userData')
      if(!userData){
        navigate('/')
        console.log('~~~~~ Session not available ~~~~~');
      } 
  })
  
  const LogOut = () => {

    let userData = sessionStorage.getItem('userData')
    let str = JSON.parse(userData).refreshToken
    // console.log(str);

    try{
        axios.put(`${LOGOut_URL}` + str)
        .then((response) => {
            // console.log(response.data);
            console.log(response.data?.success);
            console.log(response.data?.errors);
            sessionStorage.removeItem("userData")
            localStorage.removeItem("userData")
            localStorage.clear()
            sToastLogOut()
            navigate('/')
        })
        .catch((error) => {
          console.error(error.data?.errors);
          sToastLogOutFail()
        })
    }
    catch {
        console.log('Gagal');
        sToastLogOutFail()
    }
    
    sessionStorage.removeItem("userData")
    localStorage.removeItem("userData")
    localStorage.clear()
    console.log('Sudah Log Out');
    navigate('/')

}

  return (
    <div>
      <ToastContainer/>
      <div className='cursor-pointer'>
        <FiLogOut variant="outlined" size={20} onClick={handleClickOpen}/>
      </div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Apakah anda yakin ingin keluar ?"}
        </DialogTitle>
    
        <DialogActions>
          <Button onClick={handleClose}>Batal</Button>
          <Button className='hover:text-red-400' onClick={LogOut} autoFocus>
            Keluar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}