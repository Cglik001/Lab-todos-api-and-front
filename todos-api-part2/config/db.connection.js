import mongoose from "mongoose"
import dotenv from 'dotenv/config'

const MONGO_URI = process.env.MONGO_URI

const connectToDb = async () => {
  const connection = await mongoose.connect(MONGO_URI)
  console.log(`Connected to database: ${connection.connections[0].name}`)
}

export default connectToDb
