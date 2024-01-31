const mongoose = require ('mongoose')
// todo - updait URL
const MONGO_URL ='mongodb+srv://aryehmai:9TZ4s8fGGxqvN$i@cluster0.oz24jtn.mongodb.net/todoListServer'

function connect(){

try{
    mongoose.connect(MONGO_URL)
.then (()=>{console.log("DB - connection success");})
}
catch(err){
    console.log("mongoodb error",err);
}
}

module.exports = {connect}
