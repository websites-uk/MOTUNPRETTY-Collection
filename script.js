// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.onclick = () => {
  nav.classList.toggle("show");
};

// Product Filter
const buttons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

buttons.forEach(button => {

  button.addEventListener("click", () => {

    buttons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    cards.forEach(card => {

      const category = card.dataset.category;

      if(filter === "all" || category.includes(filter)){
        card.style.display = "block";
      }else{
        card.style.display = "none";
      }

    });

  });

});

// Header Shadow
window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>20){
header.style.boxShadow="0 5px 20px rgba(0,0,0,.08)";
}else{
header.style.boxShadow="none";
}

});
