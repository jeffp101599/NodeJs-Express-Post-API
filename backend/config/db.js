const mongoose = require('mongoose')

const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected ${conn.connection.host}`)
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = connection