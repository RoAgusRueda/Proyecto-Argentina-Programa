const collapseElementList = document.querySelectorAll('.collapse');
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl));

const hamburger = document.querySelector('#hamburger');
const sidebar = document.querySelector ('#sidebar');

// const openmenu = ()=>{
//     console.log('fuinciona');
// }

hamburger.addEventListener('click', console.log('fuinciona'));


