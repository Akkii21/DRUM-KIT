
// var numbersOfDrumButtons= document.querySelectorAll(".drum").length;
// // This will tell you how many buttons with the same class you've got
 
// //Then you decide to create a loop that would a apply a function that will add a listener to each button
// for(var i= 0; i<numbersOfDrumButtons; i++){

//     document.querySelectorAll(".drum")[i].addEventListener("click",  function () {
      
//       var buttonInnerHTML = this.innerHTML;
// });
// } 
    

//detecting Button Press
var numbersOfDrumButtons= document.querySelectorAll(".drum").length;

for(var i= 0; i<numbersOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click",  function () {
      
      var buttonInnerHTML = this.innerHTML;

      makeSound(buttonInnerHTML)

      buttonAnimation(buttonInnerHTML);
       
    });
}  

//detecting keyboard press

document.addEventListener("keypress", function(event){
    
    makeSound(event.key);

    buttonAnimation(event.key);

})

function makeSound(key){
    switch (key) {
        case "w":
            var tom1 = new Audio(`sounds/tom-1.mp3`);
            tom1.play();
            break;
        
         case "a":
            var tom2 = new Audio(`sounds/tom-2.mp3`);
            tom2.play();
            break;
        
        
         case "s":
                var tom3 = new Audio(`sounds/tom-3.mp3`);
                tom3.play();
                break;
                
                
         case "d":
            var tom4 = new Audio(`sounds/tom-4.mp3`);
            tom4.play();
            break;

        
         case "j":
                var snare = new Audio(`sounds/snare.mp3`);
                snare.play();
                break;
                
                
         case "k":
            var crash = new Audio(`sounds/crash.mp3`);
            crash.play();
            break;

            
         case "l":
            var kick = new Audio(`sounds/kick-bass.mp3`);
            kick.play();
            break;
          
 
        default: console.log(buttonInnerHTML)
}
}

function buttonAnimation(currentKey){
 
var activeButton = document.querySelector("." + currentKey);

activeButton.classList.add("pressed")//adding css 

setTimeout(function() {
    activeButton.classList.remove("pressed");
}, 100)

}