document.querySelector('.mobile-menu').addEventListener("click", MobileNavBar);

const navList = document.querySelector('.nav-list');
const manuList = document.querySelector('.mobile-menu');
const navLinks= document.querySelectorAll('.nav-link');

console.log(manuList);
const arrayNavLinks = [...navLinks];

function MobileNavBar() {
  navList.classList.toggle('active'); 
  manuList.classList.toggle('active'); 
  arrayNavLinks.forEach((link, index)=>{
    link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
  })
}