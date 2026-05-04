const mongoose = require('mongoose')
require('dotenv').config()

const { MONGO_USER, MONGO_PASS } = process.env

async function connect() {
    try {
        await mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASS}@127.0.0.1:27017/learn_nodejs_db?authSource=admin`)
        console.log('Connect successfully!!!');
    } catch (error) {
         console.log('Connect failure:', error.message);
    }
}

module.exports = { connect }
