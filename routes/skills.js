var express = require('express');
var router = express.Router();
// controller to export skills CRUD functions
const skillsCtrl = require('../controllers/skills');

// ALL ACTUAL PATHS START WITH "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

module.exports = router;
