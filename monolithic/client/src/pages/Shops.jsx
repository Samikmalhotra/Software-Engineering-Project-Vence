import React, { useEffect } from 'react'
import Shop from '../components/Shop'
import {useSelector, useDispatch} from 'react-redux'
import { getAllShops } from '../actions/shop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CreateShop from '../components/CreateShop';
import { Link } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <CreateShop/>
        </Box>
      </Modal>
    </div>
  );
}

const Shops = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const shopState = useSelector(state => state.shop)
    const {shops,shop} = shopState
    useEffect(() => {
        dispatch(getAllShops(auth.token))
    }, [getAllShops, auth.token])
    return (
        <div className='shops-div'>
            
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <CreateShop/>
        </Box>
      </Modal>
            <h1>Hi {auth.name}, here is a list of your shops</h1>
            <Button onClick={handleOpen}>Add Shop</Button>
            
            {shops && shops.map(shop=>{
                return(
                    <Link to = {"/shops/"+shop._id}><Shop shop={shop}/></Link>
                )}
            )}
        </div>
    )
}

export default Shops
