const mongoose = require('mongoose')

const connectDB = async () =>{
    try{
        //! additional properties no longer needed after newer version added them
        const conn = await mongoose.connect(process.env.MONGO_URI)

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch (err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDB