    /*eslint-env jquery*/

// Step 1: Initialize game. Page loads and asks user their name. Name is stored in a variable
// and referenced throughout the game (and used in the player's score)
// Intro: addresses the player by their name and explains the rules in an alert. Users must click 'ok' to start the game.
$(document).ready(function(){

//   let name = prompt('Welcome to Fish Pond. What is your name?');

// let intro = alert(`Hello ${name}! Here are the game rules: the object of the game is to catch as many goldfish as possible.
// Fish are hiding in bubbles--be careful--there are pirnahas in the pond as well. Are you ready to play?`);

// Step 2: Game play//gameboard and 'pawn' generation. Once a player clicks 'ok' the game start function initializes.
// Bubbles are generated and begin moving within the pond div.

// Step 3: Eventlisteners. Click events are added to each bubble. If a user clicks on a bubble, the bubble reveals
// either a goldfish or a pirnaha.

let fish = [];

function createBubbles () {
  for (let i = 0; i <= 10; i++) {
    let pond = $('.pond');
    let bubble = $('<div>').addClass('bubble');
      pond.append(bubble);
    if (i % 2 === 0) {
      bubble.addClass('goldfish');
      bubble.attr('id', 'fish' + i);
      fish.push(bubble);
      bubble.on('click', reveal)
    } else {
      bubble.addClass('pirnaha');
      bubble.attr('id', 'fish' + i);
      fish.push(bubble);
  }

  setInterval(function() {
    for (let i = 0; i <= fish.length; i++) {
      $(fish[i]).css("top", Math.random() * window.innerHeight);
      $(fish[i]).css("left", Math.random() * window.innerWidth);
    }
  }, 1000)

  }
}

createBubbles();

function reveal(event) {
  if ($(this).hasClass('goldfish')) {

    $(this).css('background-image', 'url(images/goldfish.png)');
} else {
    $(this).css('background-image', 'url(images/piranha.png)');
  }
}

//Source: https://git.generalassemb.ly/wdi-nyc-rover/jquery-duck-hunt-lab

// //Step 4: Scoring. If the user clicks on a goldfish, they get +1 point. If they click on a pirnaha, they get -1 point.
// let playerScore = $();

// //Step 5: Win scenario. Once a player reaches 10 points they win. Upon player win, they receive an alert indicating that they win.

// //Step 6: Reset button. Enable reset button that allows player to restart game.

});
