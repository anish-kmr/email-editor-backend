const Template = require('../models/template.model');


exports.getTemplates = async (req,res) => {
    let shop = req.params.shop;
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
    let { title, description, design_json, shop } = req.body
    let response = {}
    try{
        let template = new Template({title,description,shop,design_json});
        await template.save()
        response = {created:true, template}
    }
    catch(err){
        console.log("Err",err)
        response={created:false,error:err}
    }
    return res.status(200).json(response)
}

exports.updateTemplate = async (req,res) => {
    let templateId = req.params.id;
    let {title, design_json} = req.body
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

