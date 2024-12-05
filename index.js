
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHtml = this.innerHTML;     
        makeSound(buttonInnerHtml);  
        buttonAnimation(buttonInnerHtml);      
    });     
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            snare = new Audio("./sounds/snare.mp3");
            snare.play();
        break;

        case "k":
            crash = new Audio("./sounds/crash.mp3");
            crash.play();
        break;

        case "l":
            kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
        break;

        default: console.log(key);        
    }
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");
    
    function removeClass(){
        activeButton.classList.remove("pressed");
    }
    var timeout = setTimeout(removeClass, 100);
}





