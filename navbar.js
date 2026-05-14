const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");
    menuBtn.classList.toggle("active");

});




const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

  reveals.forEach((el) => {

    const windowHeight = window.innerHeight;
    const top = el.getBoundingClientRect().top;

    if(top < windowHeight - 100){
      el.classList.add("active");
    }

  });

});

