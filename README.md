# Project 1: Fish Game

## Project Description

Fish Pond: Is a game that uses collision detection and event handlers to determine if the player has clicked on a goldfish or a piranha. 
If the player clicks on a goldfish, they get +1 point. If they click on a piranha, they get -1 point. Player wins when they reach 10 points.


## Wireframes

![Landing Page Wireframe] (https://imgur.com/a/1RsyS)

![Whiteboard MVP](https://imgur.com/a/cY1wF)

![Wireframe.cc MVP] (https://imgur.com/a/glF6z)

![Sketch of PostMVP](https://imgur.com/jIfk51R)

## Priority Matrix

![Paper and pencil priority matrix](https://imgur.com/v3oSGLy)
![Wireframe.cc priority matrix](https://imgur.com/a/lMgwt)


## MVP

* Gameboard (pond)
* Fish (goldfish + piranhas)
* Enter and capture player name
* Initialize game
* Game play:
  * Player clicks on bubbles that reveal either goldfish or piranhas
  * Playerscore updates +1 for goldfish and -1 for piranhas
  * Game contains keep fish within the gameboard (the pond)
  * Randomize movement paths of bubbles//fish
  * Game ends//player wins game once they reach 10 points


## POST MVP

* Enable two player mode
* Implementation of canvas


## Game Components

Fish pond (game circle)
Fish (goldfish and pirnahas)
Game (scoring) logic
Winning logic/win condition (10 points)
Player score
Restart



### Landing Page

Gameboard (pond) image is overlayed with a prompt asking for the player's name and an 'ok' button if the player is ready
to start the game.


### Game Initialization
The gameboard (pond circle) is initialized with 10 bubbles (with fish beneath them).

### Playing The Game

Player clicks on bubbles, (which fade to reveal fish of either type goldfish or type piranha). Player score is calculated
according to how many goldfish and/or piranhas are clicked.

### Winning The Game
Player has 20 seconds to catch as many fish as possible; when the timer reaches 0, gameboard will freeze
and player has the option to reset the game with the push of a button.

### Game Reset

A button will be implemented enabling the player to refresh the page//restart the game.

## Functional Components

Winning logic function (checking for conditionals)
Score tracking function


| Component           | Priority | Estimated Time | Actual Time |
| ---                 | :---:    |  :---:         | :---:       |
| Gameboard Creation  | H        | 5 hrs          | 8 hrs       | 
| Game Logic          | H        | 3 hrs          | 10+ hrs     | 
| Winning Logic       | H        | 8 hrs          | 10 hrs      | 
| Page Layout/Design  | M        | 3 hrs          | 8 hrs       |  
| CSS Animations      | M        | 7 hrs          | 5 hrs       |
| Landing Page        | M        | 2 hrs          | 3 hrs       | 
| Win Scenario        | M        | 2 hrs          | 4 hrs       | 
| Restart Button      | H        | 1.5 hrs        | 5 hrs       | 
| Total               |          | 31.5 hrs       | 53 hrs      | 

##Slides

![Slides](https://docs.google.com/presentation/d/1kpp7JoRG9ng2pXuST6UEEdIYjML_9TmXEqXXCuj4SWk/edit?usp=sharing)
