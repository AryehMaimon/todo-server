const missions = require ('./missionControler')



async function creatNewMission(data){
    // if (missions.readOne(data)){
    //  console.log("errrorrr");
    //  throw("err")
    // }else{
        console.log("service level: ", data);
     return await  (missions.createMission(data) )
    // }
 }
async function getAllMissions(){
    let res = await missions.readAllMissions({isActive:true})
    console.log("the result in services is: ", res);
    return res
}
async function toDeleteMission(missionId){
 return await missions.deleteMission(missionId,{isActive:false})
}
async function toUpdateMissionIsDone(missionId){
    return await missions.doneMission(missionId,{isDone:false})
   }
async function  toUpdateAllMissionIsDone(){
    return await missions.doneAllMissions()
   }


  

// async function activeItems(){
//     let res = await items.updateActiveAll()
//     return res
// }
// async function getOneItem(itemId){
//     return await items.readOne({_id:itemId})
// }
// async function getItemByName(letter){
//     let letterToSearch = new RegExp('^' + letter, 'i')
//     return await items.filterByLetter({name: letterToSearch })    
// }




module.exports ={toUpdateAllMissionIsDone, getAllMissions,toUpdateMissionIsDone,creatNewMission,toDeleteMission}