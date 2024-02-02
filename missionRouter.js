const express = require('express')
const router = express.Router()

const missionService = require('./missionService')


//=============================================
// Create new mission - Router 
router.post('/', async (req, res) => {
   try {


      let newMission = await missionService.creatNewMission(req.body)
      res.send(newMission)
   } catch (err) {
      res.status(404).send(err || 'something went wrong')
   }
})
//=============================================
// Get All missions - Router 
router.get('/', async (req, res) => {
   try {
      const result = await missionService.getAllMissions()
      res.send(result)
   } catch (error) {
      res.status(404).send(error || 'something went wrong')
   }
})


//=============================================
// Delete mission (isActive:false) - Router 

router.delete('/:id', async (req, res) => {
   let mission = missionService.deleteMission(req.params.id)
   if (mission) {
      let updatedMissions = await missionService.getAllMissions()
      res.send(updatedMissions)
   } else {
      res.status(400).send("mission is not exist")
   }
})


//=============================================
// Update mission (isDone:true) - Router 


router.put('/:id', (req, res) => {
   let mission = missionService.updateMissionStatus(req.params.id)
   if (mission) {
      res.send("ok")
   } else {
      res.status(400).send("mission does not exist")
   }
})

//=============================================
// Update all missions (isDone:true) - Router 

router.put('/allDone', (req, res) => {
   let missions = missionService.toUpdateAllMissionIsDone(req.params.id)
   if (missions) {
      res.send("ok")
   } else {
      res.status(400).send("mission is not exist")
   }
})



module.exports = router