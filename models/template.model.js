const mongoose = require('mongoose');

// schema

const TemplateSchema = new mongoose.Schema({
  title:{type: String, required: true, maxLength: 100},
  shop:{type:String, required:true},
  design_json:{type: String, required: true},

},{ timestamps: true });

module.exports = mongoose.model('Template',TemplateSchema);
