/*eslint-env jquery*/

// Step 1: Initialize game. Landing age loads and asks user their name. Name is stored in a variable
// and referenced throughout the game (and used in the player's score)
// Intro: addresses the player by their name and explains the rules in an alert. Users must click 'ok' to start the game.
// let intro = alert(`Hello ${name}! Here are the game rules: the object of the game is to catch as many goldfish as possible.
// Fish are hiding in bubbles--be careful--there are pirnahas in the pond as well. Are you ready to play?`);
// Step 2: Game play//gameboard and 'pawn' generation. Once a player clicks 'ok' the game start function initializes.
// Bubbles are generated and begin moving within the pond div.
// Step 3: Eventlisteners. Click events are added to each bubble. If a user clicks on a bubble, the bubble reveals
// either a goldfish or a pirnaha.
// Step 4: Scoring. If the user clicks on a goldfish, they get +1 point. If they click on a pirnaha, they get -1 point.
// Step 5: Win scenario. Once a player reaches 10 points they win. Upon player win, they receive an alert indicating that they win.
// Step 6: Reset button. Enable reset button that allows player to restart game.

$(document).ready(() => {
  if (window.location !== 'index.html') {
    const playerName = [];

    function landing() {
      $('#nameForm').submit((event) => {
        // event.preventDefault();
        const name = $('#nameForm :input').val();
        playerName.push(name);
        localStorage.setItem('playerName', name);
        loadIndex();
        function loadIndex() {
          window.location.href = 'index.html';
        }
      });
    }
  }
  landing();

  const playerName = localStorage.getItem('playerName');

  function pageSetup() {
    const titleDiv = $('.title');
    const title = $('<h1></h1>').text('Fish Pond');
    const score = $('<h2></h2>')
      .text(`${playerName}'s Score: 0`)
      .addClass('score');
    const counter = $('<h3></h3>').addClass('timer');
    titleDiv.append(title).append(score).append(counter);
    setTime();
  }
  pageSetup();

  const fish = [];

  function createBubbles() {
    for (let i = 0; i < 30; i++) {
      const pond = $('.pond');
      const bubble = $('<div>').addClass('bubble');
      pond.append(bubble);
      bubble.attr('id', 'fish' + i);
      fish.push(bubble);
      bubble.one('click', reveal);
      if (i % 4 === 0) {
        bubble.addClass('pirnaha');
      } else {
        bubble.addClass('goldfish');
      }

      setInterval(() => {
        for (let i = 0; i <= fish.length; i++) {
          $(fish[i]).css('top', Math.random() * window.innerHeight);
          $(fish[i]).css('left', Math.random() * window.innerWidth);
        }
      }, 1000);
    }
  }
  createBubbles();

  const bubble = $('.bubble');
  const gameOver = $('.gameover');
  const restart = $('#restart');
  let playerScore = 0;

  function reveal(event) {
    $(event.target).css('animation', 'none').css('border', 'none');
    $(event.target).fadeOut().delay(7000);
    $(event.target).fadeIn('fast');
    if ($(event.target).hasClass('goldfish')) {
      $(event.target).addClass('clicked');
      playerScore += 1;
      $('h2').text(`${playerName}'s Score: ${playerScore}`);
    } else {
      $(event.target).addClass('clicked');
      playerScore -= 1;
      $('h2').text(`${playerName}'s Score: ${playerScore}`);
    }
  }

  function setTime() {
    let counter = 20;
    timer();
    const time = setInterval(timer, 1000);

    function timer() {
      $('h3').html(`${timeString(counter)}`);
      counter--;

      if (counter === 0) {
        $('h3').html(`${timeString(counter)}`);
        clearInterval(time);
        const gameText = $('<h4></h4>').html(`Game over, ${playerName}.
        <br /> Your score: ${playerScore}`);
        bubble.unbind('click');
        gameOver.css('display', 'grid');
        gameOver.prepend(gameText);
      }
    }

    function timeString(seconds) {
      const minutesString = Math.floor(seconds / 60);
      const secondsString = seconds % 60;
      let resultString = 0;
      if (secondsString < 10) {
        resultString = `Time Remaining: ${minutesString}:0${secondsString}`;
      } else {
        resultString = `Time Remaining: ${minutesString}:${secondsString}`;
      }
      return resultString;
    }
  }

  function restartGame() {
    restart.click(() => {
      gameOver.css('display', 'none');
      location.reload();
    });
  }
  restartGame();

// Source: https://git.generalassemb.ly/wdi-nyc-rover/jquery-duck-hunt-lab
// Source: https://stackoverflow.com/questions/26253787/jquery-countdown-timer-for-games
// Step 5: Win scenario. Once a player reaches 10 points they win. Upon player win, they receive an alert indicating that they win.
// Step 6: Reset button. Enable reset button that allows player to restart game.

});
