const missionsController = require('./missionController')



async function creatNewMission(data) {

    try {

        const res = await missionsController.create(data)
    } catch (error) {
        console.log(error);
    }



}
async function getAllMissions() {
    let res = await missionsController.readAll({ isActive: true })

    return res
}
async function deleteMission(missionId) {
    return await missionsController.deleteById(missionId, { isActive: false })
}
async function updateMissionStatus(missionId) {
    const missionToUpdate = await missionsController.read(missionId)
    console.log(missionToUpdate);
    if (!missionToUpdate.isDone) {
        await missionsController.update(missionId, { isDone: true })
    } else {

        await missionsController.update(missionId, { isDone: false })
    }
}


async function toUpdateAllMissionIsDone() {
    return await missionsController.doneAllMissions()
}








module.exports = { toUpdateAllMissionIsDone, getAllMissions, updateMissionStatus, creatNewMission, deleteMission }