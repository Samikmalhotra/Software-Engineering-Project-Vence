import asyncHandler from 'express-async-handler'
import Transaction from '../models/transactionModel.js'

// @desc    Create new transaction
// @route   POST /api/transactions
// @access  Private
const addTransactionItems = asyncHandler(async (req, res) => {
    const {
      transactionItems, 
      paymentMethod,
      itemsPrice,
      taxPrice,
      totalPrice,
      shopId
    } = req.body
  
    if (transactionItems && transactionItems.length === 0) {
      res.status(400)
      throw new Error('No order items')
      
    } else {
      const transaction = new Transaction({
        transactionItems,
        shop: shopId,
        paymentMethod,
        itemsPrice,
        taxPrice,
        totalPrice,
      })
  
      const createdTransaction = await transaction.save()
  
      res.status(201).json(createdTransaction)
    }
  })

// @desc    Get transaction by id
// @route   GET /api/transactions/:id
// @access  Private
const getTransactionById = asyncHandler(async (req, res) => {
  const transaction = await Transaction.findById(req.params.id).populate('shop', 'name')

  if(transaction){
    res.json(transaction)
  }else{
    res.status(404)
    throw new Error('Transaction not found')
  }
})
// @desc    Get all transactions by shop id
// @route   GET /api/transactions/shop/:id
// @access  Private/Admin
const getTransactionsByShopId = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({shop: req.params.id}).populate('shop', 'name')

  if(transactions){
    res.json(transactions)
  }else{
    res.status(404)
    throw new Error('Transactions not found')
  }
})


// @desc    Get all transactions
// @route   GET /api/transactions
// @access  Private/Admin
const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({}).populate('shop', 'name')

  res.json(transactions)
})
export {addTransactionItems, getTransactionById, getTransactions}