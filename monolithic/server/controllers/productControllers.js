import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

// @desc    Fetch all products
// @route   GET /api/products/:shopId
// @acess   Private
const getProducts = asyncHandler(async (req,res) =>    {

    
    const products = await Product.find({shop: req.params.shopId})
    res.json(products)
})

// @desc    Fetch a single product
// @route   GET /api/products/:id
// @acess   Private
const getProductById = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    res.json(products)
})

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @acess   Private/Admin
const deleteProduct = asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        await product.remove();
        res.json({message: 'Product Removed'})
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
    res.json(products)
})

// @desc    Create a product
// @route   POST /api/products
// @acess   Private/Admin
const createProduct = asyncHandler(async (req,res) => {
    const {shopId, name, price,description,category,brand,image, countInStock} = req.body
    const product = new Product({
        shop: shopId,
        name,
        price,
        image,
        brand,
        category,
        countInStock,
        description
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

// @desc    Update a product
// @route   PUT /api/products/:id  
// @acess   Private/Admin
const updateProduct = asyncHandler(async (req,res) => {
    const {name, price, description, image, brand, category, countInStock} = req.body


    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name,
        product.price = price,
        product.description = description,
        product.image = image,
        product.brand = brand,
        product.category = category,
        product.countInStock = countInStock

        const updatedProduct = await product.save();
        res.json(updatedProduct)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
})



export {getProductById, getProducts, updateProduct, deleteProduct, createProduct}