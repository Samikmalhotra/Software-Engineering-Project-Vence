import mongoose from 'mongoose';

const shopSchema = new mongoose.Schema({
    user:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    }
  })

const Shop = mongoose.model('Shop', shopSchema);
export default Shop;