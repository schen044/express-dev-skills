// requires
const Skill = require('../models/skill');

// exports
module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

// functions
function index(req, res) {
    res.render('skills/index', {
        skills: Skill.getAll(),
        title: 'Skills List'
    });
}

function show(req, res) {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        title: 'Individual Skills List'
    });
}

// display new view
function newSkill(req, res) {
    res.render('skills/new', {
        title: 'Add A Skill'
    });
}

// create new post
function create(req, res) {
    // pass input
    Skill.create(req.body);
    // redirect back to index view
    res.redirect('/skills');
}

// delete post
function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    // redirect to index
    res.redirect('/skills');
}

// render edit page
function edit(req, res) {
    res.render('skills/edit', {
        skill: Skill.getOne(req.params.id),
        title: 'Editing Skill'
    });
}

// edit skill
function update(req, res) {
    Skill.updateOne(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}