// skills array
const skills = [
    {skillName: 'HTML', project: 'Minesweeper'},
    {skillName: 'CSS', project: 'Minesweeper'},
    {skillName: 'Javascript', project: 'Minesweeper'},
    {skillName: 'Express', project: 'Express Lab'}
];

// exports
module.exports = {
    getAll,
    getOne,
    create
};

// functions
function getAll () {
    return skills;
};

function getOne(id) {
    // using arry.find to find object
    return skills.find(skill => skill.skillName === id);
}

function create(skill) {
    // set project
    skill.project = 'N/A'
    skills.push(skill);
}