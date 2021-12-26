import mongoose from 'mongoose'

const transactionSchema = mongoose.Schema(
    {
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
            countInStock:{
                type: Number,
                required: true
            }
        }
    ],
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0.0,
    },
    paymentMethod: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    }
)

const Transaction = mongoose.model('Transaction', transactionSchema)
export default Transaction