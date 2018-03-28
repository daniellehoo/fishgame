# Project 1: Fish Game

## Project Description

Fish Pond: Is a game that uses collision detection and event handlers to determine if the player has clicked on a goldfish or a piranha. 
If the player clicks on a goldfish, they get +1 point. If they click on a piranha, they get -1 point. Player wins when they reach 10 points.


## Wireframes

![MVP](https://imgur.com/a/cY1wF)

![PostMVP](https://imgur.com/jIfk51R)

## Priority Matrix

![priority matrix](https://imgur.com/v3oSGLy)


## MVP

* Gameboard (pond)
* Fish (goldfish + piranhas)
* Enter and capture player name
* Initialize game
* Game play:
  * Player clicks on bubbles that reveal either goldfish or piranhas
  * Playerscore updates +1 for goldfish and -1 for piranhas
  * Game uses collision detection to keep fish within the gameboard (the pond)
  * Game ends//player wins game once they reach 10 points


## POST MVP

* Randomize generation and movement paths of bubbles//fish
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
Once a player reaches a score of 10 points, an alert pops up telling the player that they have won; gameboard will freeze
and player has the option to reset the game with the push of a button.

### Game Reset

A button will be implemented enabling the player to refresh the page//restart the game.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  
Does your logic indicate that code could be encapsulated for the purpose of reusability.  
Once a function has been defined it can then be incorporated into a class as a method.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evaluate game possibilities based on time needed and the actual time you have before game must be submitted.

| Component           | Priority | Estimated Time | Actual Time |
| ---                 | :---:    |  :---:         | :---:       |
| Gameboard Creation  | H        | 5 hrs          | TBD         | 
| Game Logic          | H        | 3 hrs          | TBD         | 
| Winning Logic       | H        | 8 hrs          | TBD         | 
| Page Layout/Design  | M        | 3 hrs          | TBD         |  
| CSS Animations      | M        | 7 hrs          | TBD         |
| Landing Page        | M        | 2 hrs          | TBD         | 
| Win Scenario        | M        | 2 hr           | TBD         | 
| Restart Button      | H        | 1.5 hrs        | TBD         | 
| Total               |          | 31.5 hrs       | TBD         | 
