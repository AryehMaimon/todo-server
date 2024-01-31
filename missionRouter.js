const express = require('express')
const router = express.Router()

const missionService = require('./missionService')


//=============================================
// Create new mission - Router 
router.post  ('/',async(req,res)=>{
   try{
  console.log("request:   ",  req.body);

      let newMission =  await missionService.creatNewMission (req.body )
      res.send(newMission)
   } catch(err){
      res.status(404).send(err || 'something went wrong')
     }
  })
//=============================================
// Get All missions - Router 
router.get('/', async (req, res) => {
    try {
       const result =  await missionService.getAllMissions()
     res.send(result)
  } catch (error) {
     res.status(404).send(error || 'something went wrong')
  }
 })
//=============================================
// Delete mission (isActive:false) - Router 
 router.delete('/:id',(req,res)=>{
     let mission = missionService.toDeleteMission(req.params.id)
        if(mission){       
           res.send("ok")
         }else{
     res.status(400).send("mission is not exist")}
 })
//=============================================
// Update mission (isDone:true) - Router 
router.put('/:id',(req,res)=>{
  let mission = missionService.toUpdateMissionIsDone(req.params.id)
     if(mission){       
        res.send("ok")
      }else{
  res.status(400).send("mission is not exist")}
})
//=============================================
// Update all missions (isDone:true) - Router 
router.put('/allDone',(req,res)=>{
  let missions = missionService.toUpdateAllMissionIsDone(req.params.id)
     if(missions){       
        res.send("ok")
      }else{
  res.status(400).send("mission is not exist")}
})



//  router.post('/active',(req,res)=>{
//    try {
//    itemService.activeItems()
//    res.send("ok")
//    }catch(error){
//      res.status(500).send(error || 'something went wrong')
//    }
//  })
//  router.get('/name/:letter',(req,res)=>{
//         itemService.getItemByName(req.params.letter).then((filterdList)=>{
//               if (filterdList){
//             res.send(filterdList)
//          }else{
//            res.status(400).send("items not exist")}
//          })
        
//        })
//  router.get('/:itemId',(req,res)=>{
//    itemService.getOneItem(req.params.itemId).then((itemData)=>{
//          if (itemData){
//       res.send(itemData)
//      }else{
//       res.status(400).send("item is not exist")}
//      })
//    })
 
//   router.post  ('/',async(req,res)=>{
//    console.log("request:   ",  req.body);
//      let newitem =  await itemService.addNewItem (req.body )
//      res.send(newitem)
//  })
 
 
 



module.exports = router