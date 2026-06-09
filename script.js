window.addEventListener("scroll",()=>{

const sections=document.querySelectorAll("section");

sections.forEach(section=>{

const top=window.scrollY;

const offset=section.offsetTop-400;

if(top>offset){

section.style.opacity="1";
section.style.transform="translateY(0px)";

}

});

});

document.querySelectorAll("section").forEach(sec=>{

sec.style.opacity="0";

sec.style.transform="translateY(50px)";

sec.style.transition="1s";

});

window.dispatchEvent(new Event("scroll"));

const btn=document.querySelector(".button");

btn.addEventListener("mouseover",()=>{

btn.style.boxShadow="0px 0px 20px rgba(202,164,77,.6)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.boxShadow="none";

});

console.log("Vibita ❤️ Kester Wedding Website Loaded");