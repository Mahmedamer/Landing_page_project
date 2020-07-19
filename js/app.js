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
const sections = document.querySelectorAll("section");
const nav_menu_list = document.getElementById('navbar__list');
let currentactivesection = document.querySelector("section");
const to_top_button = document.getElementById("ToTheTop");
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


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to section on link click
for (let index = 0;index < sections.length ;index ++){
    const id = sections.item(index).id;
    const headername = sections.item(index).getAttribute('data-nav');
    const nav_menu_item = document.createElement('li');
    const nav_menu_item_link = document.createElement('a');
    nav_menu_item_link.setAttribute('href' , '#' + id);
    nav_menu_item_link.setAttribute('id', 'nav_bar_for_' + id)
    nav_menu_item_link.innerText = headername;
    nav_menu_item_link.classList.add("menu__link");
    nav_menu_item.appendChild(nav_menu_item_link);
    nav_menu_list.appendChild(nav_menu_item);
}
document.getElementById('nav_bar_for_' + currentactivesection.id).classList.toggle("your-active-class");
window.onscroll =function(){
    //Hide fixed navigation bar while not scrolling
        nav_menu_list.style.display = "block" ;
    //set active class to section
    for (let index = 0;index < sections.length ;index ++){
        const top = sections[index].getBoundingClientRect().top;
        if(top < 500 && top > -50 ){
            currentactivesection.classList.toggle("your-active-class");
            document.getElementById('nav_bar_for_' + currentactivesection.id).classList.toggle("your-active-class");
            sections[index].classList.toggle("your-active-class");
            currentactivesection = sections[index];
            document.getElementById('nav_bar_for_' + currentactivesection.id).classList.toggle("your-active-class");
            break;
        }
    }
    if(pageYOffset > 250)
    {
        to_top_button.style.display = 'block';
    }
    else{
        to_top_button.style.display = 'none';
    }   
    setTimeout(function(){
        nav_menu_list.style.display = "none" ; 
    }, 3000);
}



