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
const LOGOut_URL = '/api/Auth/LogOff'

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

  // const sToastLogOutFail =() =>{
  //     toast.warning('Log Out Batal !', {
  //         position: toast.POSITION.TOP_CENTER
  //     })
  //     console.log('proses');
  // }

  const LogOut = () => {

      axios.put(LOGOut_URL, {
        params : {
          token : ''
        }
      }).then((response) => {
        console.log(response.data?.errors);
        sToastLogOut()
        navigate('/')
      }).catch((error) => {
        console.error(error.data?.errors);
        // sToastLogOutFail()
        // console.log('Log Out Problem');
      })

    // try{
    //     axios.put(LOGOut_URL, {
    //         params : 
    //         {
    //             token : '33558a4f-613b-426c-a27c-3a613124a4f1'
    //         }
    //     })
    //     .then((response) => {
    //         console.log(response.data);
    //         console.log(response.data?.success);
    //         console.log(response.data?.errors);
    //         localStorage.removeItem("userData")
    //         sessionStorage.removeItem("userData")
    //         localStorage.clear()
    //         sToastLogOut()
    //     })
    //     .catch((error) => {
    //       console.error(error.data?.errors);
    //       sToastLogOutFail()
    //     })
    // }
    // catch {
    //     console.log('Gagal');
    //     sToastLogOutFail()
    // }

    //````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
    // axios.put(LOGOut_URL, {
    //     params: {
    //         token : "a26da23c-103b-4ad4-8e24-a752c8dfb3b8"       
    //     }
    // })
    // .then((response) => {
    //     console.log(response.data);
    //     console.log(response.data?.success);
    //     console.log(response.data?.errors);
    //     sToastLogOut()
    // }).catch(errors => {
    //     console.log(errors);
    // })
    
    // `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
    // localStorage.removeItem("userData")
    // sessionStorage.removeItem("userData")
    // localStorage.clear()
    // console.log('Sudah Log Out');
    // navigate('/')
    // sToastLogOut()
}

  return (
    <div>
      {/* <FiLogOut  variant="outlined" onClick={handleClickOpen}/> */}
      <ToastContainer/>

      <div className='cursor-pointer'>
        <FiLogOut variant="outlined" size={20} onClick={handleClickOpen}/>
          {/* Open alert dialog
        </FiLogOut> */}
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
          <Button onClick={LogOut} autoFocus>
            Keluar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}