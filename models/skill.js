// skills array
const skills = [
    {skillName: 'some name', project: 'some project'},
    {skillName: 'name', project: 'project'},
    {skillName: 'some', project: 'some'}
]

// exports
module.exports = {
    getAll
}

// functions
function getAll () {
    return skills;
}