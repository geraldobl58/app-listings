const mongoose = require('mongoose')
mongoose.Promise = global.Prommise

const modelSchema = new mongoose.Schema({
  name: String
})

const modelName = 'State'

if (mongoose.connection && mongoose.connection.models[modelName]) {
  module.exports = mongoose.connection.models[modelName]
} else {
  module.exports = mongoose.model(modelName, modelSchema)
}