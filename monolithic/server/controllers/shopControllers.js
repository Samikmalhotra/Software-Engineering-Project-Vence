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

// @desc    Get shops by id
// @route   GET /api/shops/:id
// @acess   Private
const getShopById = asyncHandler(async (req,res) => {
    const shop = await Shop.findById(req.params.id)
    res.status(200).json(shop)
})

// @desc    get user profile
// @route   GET /api/users/profile
// @acess   Private
const getUserProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id)

    if(user ){
        res.json({
            _id: user._id,
            name: user.email,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    Update user profile
// @route   PUT /api/users/profile
// @acess   Private
const updateUserProfile = asyncHandler(async (req,res) => {
    const user = await User.findById(req.user._id)

    if(user ){
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password){
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateToken(updatedUser._id)
        })
    }else{
        res.status(404)
        throw new Error('User not found')
    }
})

// @desc    get all users
// @route   GET /api/users
// @acess   Private/Admin
const getUsers = asyncHandler(async (req,res) => {
    const users = await User.find({})
    res.json(users)
})

// @desc    get user by id
// @route   GET /api/users/:id
// @acess   Private/Admin
const getUserById = asyncHandler(async (req,res) => {
    const user = await User.findById(req.params.id).select('-password')
    res.json(user)
})

// @desc    Update shop
// @route   PUT /api/shops/:id
// @acess   Private/Admin
const updateUser = asyncHandler(async (req,res) => {
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
export {authUser,registerUser, getUserProfile, updateUserProfile, getUsers, deleteUser, getUserById, updateUser}