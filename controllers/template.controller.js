const Template = require('../models/template.model');


exports.getTemplates = async (req,res) => {
    let shop = req.params.shop;
    if (!shop) {
        return res.status(422).json({
          error: "Shop field is required in URL params ",
        });
    }
    let response={};
    try{
        let templates = await Template.find({shop});
        console.log("get templates",templates);
        response = {success:true,templates}
    }
    catch(err){
        response={success:false,error:err}
    }
    return res.status(200).json(response);
}

exports.createTemplate = async (req,res) => {
    let { title, design_json, shop } = req.body
    if (!title || !design_json || !shop) {
        return res.status(422).json({
          error: "Mandatory fields in request body unprocessable",
        });
    }
    let response = {}
    try{
        let template = new Template({title,shop,design_json});
        await template.save()
        response = {created:true, template}
    }
    catch(err){
        console.log("Error Creating Template : ",err)
        response={created:false,error:err}
    }
    return res.status(200).json(response)
}

exports.updateTemplate = async (req,res) => {
    let templateId = req.params.id;
    let {title, design_json} = req.body
    if (!templateId ) {
        return res.status(422).json({
          error: "Template Id is required in URL param",
        });
    }
    if (!design_json ) {
        return res.status(422).json({
          error: "Mandatory fields in request body unprocessable : design_json*",
        });
    }

    let response = {updated:null};
    try{
        let updateData = {design_json};
        if(title) updateData.title=title;
        await Template.findOneAndUpdate({
            _id:templateId
        },updateData)
        response.updated=true
    }
    catch(err){
        console.log('err',err);
        response.updated = false;
    }
    return res.status(200).json(response)
}

exports.deleteTemplate = async (req,res) => {
    let templateId = req.params.id;
    if (!templateId) {
        return res.status(422).json({
          error: "Template Id required in URL param",
        });
    }
    let response = {deleted:null};
    try{
        await Template.findOneAndDelete({
            _id:templateId
        })
        response.deleted=true
    }
    catch(err){
        console.log('err',err);
        response.deleted = false;
    }
    return res.status(200).json(response)
}

