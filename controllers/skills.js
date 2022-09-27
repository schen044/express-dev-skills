// requires
const Skills = require('../models/skill');

// exports
module.exports = {
    index,
}

// function
function index(req, res) {
    res.render('skills/index', {
        skills: Skills.getAll()
    });
}