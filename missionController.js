const missionsModel = require('./missionModel')

async function create(data) {
  return await missionsModel.create(data)
}

async function readAll(filter) {
  return await missionsModel.find(filter)
}

async function read(id) {
  return await missionsModel.findById(id)
}

function deleteById(id) {
  return missionsModel.findByIdAndDelete(id)
}

function update(id, status) {
  return missionsModel.findByIdAndUpdate(id, status)
}

function updateAll() {
  return missionsModel.updateMany({ isDone: false }, { isDone: true })
}



module.exports = { read, readAll, update, updateAll, create, deleteById }
