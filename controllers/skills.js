// requires
const Skills = require('../models/skill');

// exports
module.exports = {
    index,
    show,
    new: newSkill
}

// functions
function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll(),
        title: 'Skills List'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skills: Skills.getOne(req.params.id),
        title: 'Individual Skills List'
    });
}

// display new view
function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add A Skill'
    });
}