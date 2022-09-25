// start javascript

let left = document.querySelector(".left");
let right = document.querySelector(".right");
let pic = document.getElementById("pic");
let titl =  document.getElementById("titl");
let spn =  document.getElementById("spn");


left.addEventListener("click" , ()=>{
    pic.src = "images/c (2).jpg";
    spn.innerHTML = "other styles"
    titl.innerHTML = "classic shirt"
});

right.addEventListener("click" , ()=>{
    pic.src = "images/c (8).jpg";
    spn.innerHTML = "more formal"
    titl.innerHTML = "simple shirt"
});


let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');


document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
  }
  
  document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
  }

