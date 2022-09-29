var express = require('express');
const skills = require('../controllers/skills');
var router = express.Router();
// controller to export skills CRUD functions
const skillsCtrl = require('../controllers/skills');

// ALL ACTUAL PATHS START WITH "/skills"

// GET /skills
router.get('/', skillsCtrl.index);
// GET /new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// POST /new
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// GET /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// PUT /skills/:id
router.put('/:id', skillsCtrl.update)

module.exports = router;
