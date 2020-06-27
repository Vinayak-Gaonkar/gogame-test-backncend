const gameSchema = require("../models/game");
const mongoose = require("../models/connection");


let Game = function () {
    this.createGame = async (req, res) => {
        try {
            console.log(req.body);
            
            let newGame = new gameSchema(req.body);
            await newGame.save();
            console.log("user created");
            
            res.status(201).send({
                message:"success"
            })
        } catch (error) {
            console.log(error);
            
            res.status(400).send({
                reason: error
            })
        }

    }

    this.listGames = async (req, res) => {
        try {
            let allGames = await gameSchema.find({ delete: false },{delete:0});
            res.status(200).send({
                status: "Success",
                payload: allGames
            })
        } catch (error) {
            res.status(400).send({
                reason: error
            })
        }

    }

    this.updateGame = async (req, res) => {
        try {
            let allGames = await gameSchema.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {$set:req.body});
            res.status(200).send({
                status: "Success"
            })
        } catch (error) {
            res.status(400).send({
                reason: error
            })
        }

    }

    this.deleteGame = async (req, res) => {
        try {
            let result = await gameSchema.updateOne({ _id: mongoose.Types.ObjectId(req.params.id) }, {$set:{delete:true}});
            res.status(200).send({
                status: "Success"
            })
        } catch (error) {
            res.status(400).send({
                reason: error
            })
        }

    }
}

module.exports = new Game()