// DL:
//  file : connection to db
//  models - schema of "table/collection"
//  controllers  -  CRUD's function

// model == table/collection

// temp - זמני
// const db = require('./db')
// db.connect()

const mongoose = require('mongoose')
const missionSchema = new mongoose.Schema({
    // ownerUserId:{
    // //     type: mongoose.SchemaTypes.ObjectId,
    // //     ref: "user",{
    // //    }
    // },
    taskName :{
        type:String,
        required : true
    },
    deadLine: {
        type: Date,
        required : true
    },
    isDone: {
        type: Boolean,
        default: false
    },
    isActive : {
        type: Boolean,
        default: true
    }

})
const missionModel = mongoose.model('mission',missionSchema)

module.exports = missionModel


// async function create() {
//    const {items} = require('./item.data')
//    let newItem = await itemModel.create(items);
    
       
//     };
  
//   create();

// async function read(){
   
// let items= await itemModel.find({})
// items.forEach(i=>console.log(i.name,i.price))
// }

// // create()
// read()

