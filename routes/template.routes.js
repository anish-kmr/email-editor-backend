const express = require("express");
const router = express.Router();
const templateController = require("../controllers/template.controller");
const { routes } = require("./routes.json");
const { template } = routes;

router.get(template.getTemplates,templateController.getTemplates)

router.post(template.createTemplate,templateController.createTemplate)

router.put(template.updateTemplate,templateController.updateTemplate)

router.delete(template.deleteTemplate,templateController.deleteTemplate)


module.exports = router