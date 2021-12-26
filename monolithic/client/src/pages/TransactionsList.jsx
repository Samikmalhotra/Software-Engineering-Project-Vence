import React from 'react'
import { useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTransactions } from '../actions/transaction'
import Moment from 'react-moment'
const TransactionsList = () => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const transaction = useSelector(state => state.transaction)
    const params = useParams()

    useEffect(() => {
        dispatch(getTransactions(auth.token, params.shopId))
    }, [dispatch, auth.token, params.shopId])
    return (
        <div>
            <center>
            <Table striped bordered hover>
                <tr>
                    <thead>
                        <th>Transaction ID</th>
                        <th>Payment Method</th>

                        <th>Tax Price</th>
                        <th>Total Price</th>
                        <th>Created At</th>
                        <th>Transaction Items</th>

                    </thead>
                    {transaction && transaction.transactions.map(transaction => {
                        return(
                            <tr>
                                <td>{transaction._id}</td>
                                <td>{transaction.paymentMethod}</td>
                                <td>${transaction.taxPrice}</td>
                                <td>${transaction.totalPrice}</td>
                                <td><Moment>{transaction.createdAt}</Moment></td>
                                <td>{transaction.transactionItems.map(item=>{
                                    return(
                                        <div>
                                            <span>{item.qty}x {item.name}</span>
                                        </div>
                                    )
                                })}</td>
                            </tr>
                        )
                    })}
                </tr>
                
            </Table>
            </center>
        </div>
    )
}

export default TransactionsList
