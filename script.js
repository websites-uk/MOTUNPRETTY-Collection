const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  setTimeout(() => loader.classList.add("hide"), 1000);
});

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.onclick = () => nav.classList.toggle("show");

const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(btn => {

btn.onclick = () => {

buttons.forEach(b => b.classList.remove("active"));
btn.classList.add("active");

const filter = btn.dataset.filter;

cards.forEach(card => {

const cat = card.dataset.category;

if(filter === "all" || cat.includes(filter)){
card.style.display = "block";
}else{
card.style.display = "none";
}

});

};

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

},{threshold:.15});

reveals.forEach(el=>observer.observe(el));

const header=document.getElementById("header");

window.addEventListener("scroll",()=>{

if(scrollY>50){
header.style.background="rgba(255,255,255,.92)";
header.style.boxShadow="0 10px 30px rgba(0,0,0,.08)";
}else{
header.style.background="rgba(255,255,255,.75)";
header.style.boxShadow="none";
}

});
