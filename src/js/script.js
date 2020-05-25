const ABOUT_ANIMATION_BUTTON = document.getElementById("aboutMeAnimation"); 
const ABOUT_ANIMATION_CONTAINER = document.getElementById("aboutContainer");
const HEADER_NAME = document.getElementById("header_name");
const HEADER_MENU = document.getElementById("header_menu");
const BODY_HERO = document.getElementById("hero_container");
const SECTION_ABOUTME = document.getElementById("section_aboutMe");

ABOUT_ANIMATION_CONTAINER.addEventListener('click',dissolve);

function dissolve(){
    ABOUT_ANIMATION_CONTAINER.classList.add("dissolve");
    HEADER_NAME.classList.add("dissolve");
    HEADER_MENU.classList.add("dissolve");

    ABOUT_ANIMATION_CONTAINER.addEventListener('animationend', hideElementnZoom);
    HEADER_NAME.addEventListener('animationend', hideElement);
    HEADER_MENU.addEventListener('animationend', hideElement);
}

function hideElement(){
   this.style.display = "none";
}

function hideElementnZoom(){
    this.style.display = "none";

    BODY_HERO.classList.add("zoom");
    BODY_HERO.addEventListener("animationend", hideElement);
    SECTION_ABOUTME.classList.remove("hide");
    SECTION_ABOUTME.classList.add("moveUp");
    SECTION_ABOUTME.addEventListener('animationend',() => {
            BODY_HERO.classList.remove("zoom");
            BODY_HERO.classList.add("hero_container-hidden");
          
            
        })
    }



function blink(){

    ABOUT_ANIMATION_BUTTON.style.borderColor = '#1bc8f7';
    setTimeout(() => {

        ABOUT_ANIMATION_BUTTON.style.borderColor = '#0086ac'; 
        setTimeout(() => { 

            ABOUT_ANIMATION_BUTTON.style.borderColor = '#1bc8f7'; 
            setTimeout(() => { 

                ABOUT_ANIMATION_BUTTON.style.borderColor = '#0086ac'; 
                setTimeout(() => {
                    blink();
                }, 2500);
            
            }, 150);

        }, 150);

    }, 200);

}

 setTimeout(() => {
     blink();
 }, 3500);