import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async () => {
  console.log(process.env.MONGO_URI)
  try {
    const conn = await mongoose.connect("mongodb+srv://user:user@cluster0.877ii.mongodb.net/project-zeus?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      // useCreateIndex: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB