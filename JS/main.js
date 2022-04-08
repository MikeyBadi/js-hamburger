const hamMenu = document.querySelector('.fa-bars');
const hamMenuClose = document.querySelector('.close');
const hamMenuPage = document.querySelector('.hamburger-menu');

console.log(hamMenu);
console.log(hamMenuClose);
console.log(hamMenuPage);


hamMenu.addEventListener('click', function(){
  hamMenuPage.classList.add ('active');
});
hamMenuClose.addEventListener('click', function(){
  hamMenuPage.classList.remove ('active');
});

