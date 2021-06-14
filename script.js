const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", ()=>{
hideSection();
toggleNavbar();
document.body.classList.toggle("hide-scrolling"); 
});
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}
document.addEventListener("click",(e) =>{
    if(e.target.classList.contains("link-item") && e.target.hash !== ""){
        navToggler.classList.add("hide")
        if(e.target.classList.contains("nav-item")){
           toggleNavbar();
       } 
       else{
           hideSection();
           document.body.classList.add("hide-scrolling");
       }
       setTimeout(() =>{
           document.querySelector("section.active").classList.remove("active","fade-out");
           document.querySelector(e.target.hash).classList.add("active");
           window.scrollTo(0,0);
           document.body.classList.remove("hide-scrolling");
           navToggler.classList.remove("hide")
       },500);

       
    }
});












const tabsContainer = document.querySelector(".about-tabs"),
aboutSelection = document.querySelector(".about-section");
tabsContainer.addEventListener("click",(e) =>{
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const targert = e.target.getAttribute("data-target");
        
        console.log(targert)
           aboutSelection.querySelector(".tab-content.active").classList.remove("active");
          aboutSelection.querySelector(targert).classList.add("active");  
    }
});
const modal=document.getElementById("project-popup");


document.addEventListener("click" , (e)=>{
    // modal.style.display = "block";
}
) 
function toggleprojectpopup(){
  document.querySelector("project-popup").classList.toggle("open")  
  document.body.classList.toggle("hide-scrolling")
  document.querySelector(".main").classList.toggle("fade-out");
};
