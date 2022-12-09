
const nButton = document.querySelector(".next");
const pButton = document.querySelector(".previous");

let selectedIndex = 0;

//DOMContentLoaded funcion que se ejecuta cuando la pag carga por 1era vez
document.addEventListener("DOMContentLoaded", () => {
    const conts = document.querySelectorAll(".slide");
    const bullets = document.querySelectorAll(".bullet");
    conts[selectedIndex].classList.remove("hidden");
    bullets[selectedIndex].classList.add("selected");
})

//Event delegation: 
document.body.addEventListener("click", (e) => {

    //e.target = elemento al cual se ha hecho click;
    if(e.target.classList.contains("bullet")){
        const parent = e.target.parentElement;
        selectedIndex = Array.prototype.indexOf.call(parent.children, e.target);

        toggleBullet();

    }

})








nButton.addEventListener("click", (e) => {


    if(selectedIndex == 6){
        selectedIndex = 0;
    }else
        selectedIndex++;

    toggleBullet();

})

pButton.addEventListener("click", (e) => {


    if(selectedIndex == 0){
        selectedIndex = 6;
    }else
        selectedIndex--;

    toggleBullet();

})


function toggleBullet(){
    
    const conts = document.querySelectorAll(".slide");
    const bullets = document.querySelectorAll(".bullet");

    conts.forEach(e => {
        e.classList.add("hidden");
    })   

    bullets.forEach(e => {
        e.classList.remove("selected");
    })   
    
conts[selectedIndex].classList.remove("hidden");
bullets[selectedIndex].classList.add("selected");

}






