import mongoose, { mongo } from 'mongoose'

const transactionSchema = {
    shop: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Shop'
    },
    transactionItems: [
        {
            name: {
                type: String,
                required: true
            },
            qty: {
                type: Number,
                required: true
            },
            image: {
                type: String, 
                required: true
            },
            price: { type: Number, required: true },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',
            },

        }
    ]




}