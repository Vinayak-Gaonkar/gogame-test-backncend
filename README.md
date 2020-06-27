# Gogame Backend test


Task to of performing CRUD operations for Game.

  - User can create game
  - List of all games created
  - User can update game
  - User can delete the game

# API Documentation
    - GET /game -> list all games
    - POST /game 
    {
    "userName":"VInayak",
    "score":100,
    "gameName":"tick-toc"
    "Date":"10/10/20"
    }
    - PUT /game/:id
    {
    "userName":"VInayak",
    "score":100,
    "gameName":"tick-toc"
    "Date":"10/10/20"
    }
    
    -DELETE /game/:id
# Version and dependencies

  - Node (version 8)
  - MongoDB

### Installation

Install the dependencies and devDependencies.

```sh
$ npm i
$ nodemon app.js
```
