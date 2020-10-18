/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let nav = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let Homelist = document.createElement("li");
Homelist.className="active";
let Homelink = document.createElement("a");
Homelink.textContent=("Home");
Homelink.href="#";
Homelink.className = "menu__link";
nav.appendChild(Homelist);
Homelist.appendChild(Homelink);

let Aboutlist = document.createElement("li");
let Aboutlink = document.createElement("a");
Aboutlink.textContent=("About");
Aboutlink.href="#";
Aboutlink.className = "menu__link";
nav.appendChild(Aboutlist);
Aboutlist.appendChild(Aboutlink);

let Serverlist = document.createElement("li");
let Serverlink = document.createElement("a");
Serverlink.textContent=("Server");
Serverlink.href="#";
Serverlink.className = "menu__link";
nav.appendChild(Serverlist);
Serverlist.appendChild(Serverlink);

let Otherlist = document.createElement("li");
let Otherlink = document.createElement("a");
Otherlink.textContent=("Other");
Otherlink.href="#";
Otherlink.className = "menu__link";
nav.appendChild(Otherlist);
Otherlist.appendChild(Otherlink);
// Add class 'active' to section when near top of viewport
let li = document.querySelectorAll("li");
li.forEach(el => {
    el.addEventListener('click',(e)=>{
        nav.querySelector(".active").classList.remove('active');
        el.classList.add("active");
    });
    
});

// Scroll to anchor ID using scrollTO event
let HomeSection = document.querySelector(".your-active-class");
let AboutSection = document.querySelector(".main__hero");
window.onscroll = function(){
let HomeoffsetTop = HomeSection.offsetTop;
let HomeoffsetHeight = HomeSection.offsetHeight;
let AboutoffsetTop = AboutSection.offsetTop;
let AboutoffsetHeight = AboutSection.offsetHeight;
 //window height
 var windowheight = this.innerHeight;
 //window scrollTop
 var windowscrollTop = this.pageYOffset;
 if(windowscrollTop > (HomeoffsetTop + HomeoffsetHeight - windowheight)){
    document.querySelector(".page__header").style.background="red";
}
else if(windowscrollTop > (AboutoffsetTop + AboutoffsetHeight - windowheight)){
    document.querySelector(".page__header").style.background="rgba(0,13,60,1)";
}
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
let link = document.querySelectorAll("nav li a");
link.forEach(a => {
    a.addEventListener('click',(e)=>{
        if(a.textContent==="About"){
           e.target.href="#section1";
       }else if(a.textContent==="Server"){
           e.target.href="#section2";
       }
       else if(a.textContent==="Other"){
           e.target.href="#section3";
    }
    });
});
// Set sections as active


