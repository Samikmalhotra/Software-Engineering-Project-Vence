import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    shop:{
        type: mongoose.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
  })

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;