import {Button, Form} from 'react-bootstrap';
import React,{useEffect, useState} from 'react'
import { Row, Col, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router'
import { getAllProducts } from '../actions/product';
import { getShopById } from '../actions/shop';
import '../css/shopscreen.css'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddProduct from '../components/AddProduct';
import { Link } from 'react-router-dom';
import Product from '../components/Product';
import { createEmployee, deleteEmployee, getEmployees } from '../actions/employee';


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

const ShopScreen = () => {

    const [open, setOpen] = React.useState(false);

    const [name,setName]=useState('')
    const [age,setAge]=useState(0)

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const params = useParams();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const shopState = useSelector(state => state.shop)
    const productState = useSelector(state => state.product)
    const employeeState = useSelector(state => state.employee)

    const submitHandler = (e) => {
      e.preventDefault();
      console.log(auth.token,params.shopId, name, age)
      dispatch(createEmployee(auth.token,params.shopId, name, age))
    }
    const deleteHandler = (id) => {
      dispatch(deleteEmployee(auth.token,id, params.shopId))
    }

    useEffect(() => {
       dispatch(getAllProducts(auth.token,params.shopId)) 
       dispatch(getShopById(auth.token, params.shopId))
       dispatch(getEmployees(auth.token, params.shopId))
    }, [dispatch, auth.token, params.shopId])
    return (
        <div className="shopscreen">
            <Link to={"/shops/"+params.shopId+"/generateinvoice"}><Button >New Transaction</Button></Link>
            <Button onClick={handleOpen}>Add Product</Button>
            <Link to={"/"+params.shopId+"/transactions"}><Button>Shop Transactions</Button></Link>
            <h1>{shopState && shopState.shop && shopState.shop.name}</h1>
                  
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <AddProduct params={params}/>
        </Box>
      </Modal>
            <Row>
                <Col xs={8}>
                    <div className="product-div">
                    
                      {productState && productState.products && productState.products.map(prod => {
                        return(
                          <Product product={prod}/>
                        )
                      })}
                      
                    </div>
                </Col>
                <Col xs={4}>
                   <div className='employee-div'>
                   <Table striped bordered hover>
                   <thead>
                    <tr>
                     
                      <th>Name</th>
                      <th>Age</th>
                      <th></th>

                    </tr>
                    {employeeState && employeeState.employees && employeeState.employees.map(emp => {
                      return(
                        <tr>
                          <td className='td'>{emp.name}</td>
                          <td className='td'>{emp.age}</td>
                          <td className='td'><Button variant="danger" onClick={(e)=>{e.preventDefault();deleteHandler(emp._id)}}>Delete</Button></td>
                            
                        </tr>
                      )
                    })}
                  </thead>
                  </Table>
                   </div>
                   <Form onSubmit={submitHandler}>
                  <input type={'text'} placeholder={'Name'} value={name} 
                  onChange={(e) => setName(e.target.value)}/>
                  <input type={'text'} placeholder={'Age'} value={age}
                  onChange={(e) => setAge(e.target.value)}/>
                  <Button type={'submit'}>Add Employee</Button> 
                </Form>
                </Col>
                
            </Row>
        </div>
    )
}

export default ShopScreen
