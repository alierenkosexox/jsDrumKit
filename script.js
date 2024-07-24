var numberOfButtons = document.querySelectorAll(".button").length; 
  
for (var j = 0; j < numberOfButtons; j++) { 
  
  document.querySelectorAll(".button")[j] 
    .addEventListener("click", function() { 
      var buttonStyle = this.innerHTML; 
      sound(buttonStyle); 
      animation(buttonStyle); 
  }); 
} 

document.addEventListener("keypress", function(event) { 
    sound(event.key); 
    animation(event.key); 
  }); 

  function sound(key) { 
    switch (key) { 
      
      case "a": 
        var sound1 = new Audio("sounds/boom.wav"); 
        sound1.play(); 
        break; 
    
      case "s": 
        var sound2 = new Audio('.sounds/clap.wav'); 
        sound2.play(); 
        break; 
    
      case "d": 
        var sound3 = new Audio('.sounds/hihat.wav'); 
        sound3.play(); 
        break; 

        case "f": 
        var sound4 = new Audio('.sounds/kick.wav'); 
        sound4.play(); 
        break; 

        case "g": 
        var sound5 = new Audio('.sounds/opanhat.wav'); 
        sound5.play(); 
        break; 

        case "h": 
        var sound6 = new Audio('.sounds/ride.wav'); 
        sound6.play(); 
        break; 
    
      case "j": 
        var sound7 = new Audio('.sounds/snare.wav'); 
        sound7.play(); 
        break; 
    
      case "k": 
        var sound8 = new Audio('.sounds/tink.wav'); 
        sound8.play(); 
        break; 
    
      case "l": 
        var sound9 = new Audio('.sounds/tom.wav'); 
        sound9.play(); 
        break; 
    
      default: console.log(key); 
    } 
  } 