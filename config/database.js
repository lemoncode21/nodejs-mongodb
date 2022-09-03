const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({
    path: path.resolve(__dirname, `../${process.env.NODE_ENV.trim()}.env`)
})

const connectDB = async () => {
    try{
        const mongodb = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected: ${mongodb.connection.host}`)
    }catch(error){
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB