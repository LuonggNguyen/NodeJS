const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/NodeJS_luong_dev');
        console.log('Connect successfully !!');
    } catch (error) {
        console.log('Connect fail !!');
    }

}
module.exports = { connect };