// skills array
const skills = [
    {id: 111, skillName: 'HTML', project: 'Minesweeper'},
    {id: 222, skillName: 'CSS', project: 'Minesweeper'},
    {id: 333, skillName: 'Javascript', project: 'Minesweeper'},
    {id: 444, skillName: 'Express', project: 'Express Lab'}
]

// exports
module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne
}

// functions
function getAll () {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    // using array.find to find object
    return skills.find(skill => skill.id === id);
}

function create(skill) {
    // create id
    skill.id = Date.now() % 1000;
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id);
    // find index of skill object for deletion
    const idx = skills.findIndex(skill => skill.skillName === id);
    // remove at index
    skills.splice(idx, 1);
}

function updateOne(id, data) {
    // get that one todo
    skillToUpdate = getOne(id);
    // update todo property to incoming data
    skillToUpdate.skillName = data.skillName;
    skillToUpdate.project = data.project;
}