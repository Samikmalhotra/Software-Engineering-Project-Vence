import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'
import Shop from '../models/shopModel.js'
import generateToken from '../utils/generateToken.js'

// @desc    Get all shops of a user
// @route   GET /api/shops
// @acess   Private
const getShops = asyncHandler(async (req,res) => {
    const shops = await Shop.find({user: req.user.id})
    res.status(200).json(shops)
})

// @desc    Get shop by id
// @route   GET /api/shops/:id
// @acess   Private
const getShopById = asyncHandler(async (req,res) => {
    const shop = await Shop.findById(req.params.id)
    res.status(200).json(shop)
})

// @desc    Create a new shop
// @route   POST /api/shops
// @acess   Private
const createShop = asyncHandler(async(req,res)=>{
    const {name, location} = req.body

    const shopExists = await Shop.findOne({name: name})

    if(shopExists){
        res.status(400)
        throw new Error('shop already exists')
    }

    const shop = new Shop({
        user: req.user.id,
        name: name,
        location: location
    })

    await shop.save()

    res.status(401).json(shop)

})

// @desc    Update shop
// @route   PUT /api/shops/:id
// @acess   Private/Admin
const updateShop = asyncHandler(async (req,res) => {
    const shop = await Shop.findById(req.params.id)

    if(shop ){
        shop.name = req.body.name || shop.name
        shop.location = req.body.location || shop.location
        const updatedShop = await user.save()

        res.json({
            _id: updatedShop._id,
            name: updatedShop.name,
            location: updatedShop.location,
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})



// @desc    Delete shop
// @route   DELETE /api/shops/:id
// @acess   Private/Admin
const deleteShop = asyncHandler(async (req,res) => {
    const shop = await Shop.findById(req.params.id)

    if(shop){
        await shop.remove()
        res.json({message: 'Shop deleted'})
    }else{
        res.status(404)
        throw new Error('Shop not found')
    }
    res.json(shop)
})
export {getShops,getShopById,updateShop,deleteShop, createShop}