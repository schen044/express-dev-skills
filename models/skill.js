// skills array
const skills = [
    {skillName: 'HTML', project: 'Minesweeper'},
    {skillName: 'CSS', project: 'Minesweeper'},
    {skillName: 'Javascript', project: 'Minesweeper'},
    {skillName: 'Express', project: 'Express Lab'}
];

// exports
module.exports = {
    getAll
};

// functions
function getAll () {
    return skills;
};