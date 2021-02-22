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
 * Define Variables
 * 
*/
var a;
var li;
var text;

const fragment = document.createDocumentFragment();
const ul = document.querySelector('#navbar__list');
var sections=document.querySelectorAll('section');

/**
 * End Variables
 * Begin Main Functions
 * 
*/

// build the nav
sections.forEach(element => {
    li=document.createElement('li');
    a=document.createElement('a');
    text=document.createTextNode(element.getAttribute("data-nav"));
    a.appendChild(text);
    a.setAttribute("href","#"+element.getAttribute("id"));
    li.appendChild(a);
    fragment.appendChild(li);
});
ul.appendChild(fragment);


// Add class 'active' to section when near top of viewport
// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
// Set sections as active
const ulList = document.querySelectorAll('li');
const anchorList = document.querySelectorAll('a');
document.addEventListener('scroll',function(){
    sections.forEach(section => {
        const R = section.getBoundingClientRect(); 
        if(R.top>-30&&R.top<550){
            section.classList.add("active");
            anchorList.forEach(a => {
                if(section.getAttribute("data-nav")===a.textContent)
                    a.classList.add("active");
                else
                    a.classList.remove("active");
            });
        }
        else
            section.classList.remove("active");
    });
})

/**
 * End Main Functions
 * 
*/












