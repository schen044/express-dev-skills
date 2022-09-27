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
    getOne
};

// functions
function getAll () {
    return skills;
};

function getOne(id) {
    // using arry.find to find object
    return skills.find(skills => skills.skillName === id);
}