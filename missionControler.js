const missions= require('./missionModel')

async function createMission(data){
  return await missions.create(data)
}
async function readAllMissions(filter){
  console.log("the filter is:",filter);
  return  await missions.find(filter)
}

 function deleteMission(id,obj){
  return missions.findByIdAndUpdate(id,{isActive:false})
}

function doneMission(id,obj){
  return missions.findByIdAndUpdate(id,{isDone:true})
}

function doneAllMissions(){
  return missions.updateMany({isDone:false},{isDone:true})
}



module.exports = {readAllMissions,doneMission,doneAllMissions,createMission,deleteMission,}
