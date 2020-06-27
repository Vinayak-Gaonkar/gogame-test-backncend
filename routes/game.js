const express = require('express'),
    router = express.Router(),
    gameControler=require("../controller/gameController"),
    gameModel = require("../models/game");


/* GET users listing. */
router.post('/game', gameControler.createGame);
router.get('/game', gameControler.listGames);
router.put('/game/:id', gameControler.updateGame);
router.delete('/game/:id', gameControler.deleteGame);




// router.post('/driver/register/', async function (req, res, next) {
//   try {
//     let newUser = new UserModel(req.body);
//     let userSaved = await newUser.save();
//     res.status(201).send(userSaved)
//   } catch (error) {
//     console.log(error.message);
//     res.status(400).send(
//       {
//         "status": "failure",
//         "reason": error.message
//       })
//   }

// });

module.exports = router;
