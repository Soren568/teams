const {Player} = require('../models/player.model');


module.exports.findAllPlayers = (req, res) =>{
    Player.find()
    .then(allPlayers => res.json({players: allPlayers}))
    .catch(err => res.status(400).json(err));
}

module.exports.findOnePlayer = (req, res) =>{
    Player.findOne({_id: req.params.id})
    .then(onePlayer => res.json({player: onePlayer}))
    .catch(err => res.status(400).json(err));
}

module.exports.createPlayer = (req, res) =>{
    Player.create(req.body)
    .then(newPlayer => res.json({player: newPlayer}))
    .catch(err => res.status(400).json(err));
}

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({ _id: req.params.id}, req.body, {new: true, useFindAndModify: true})
    .then(updatedPlayer => res.json({player: updatedPlayer}))
    .catch(err => res.status(400).json(err));
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
    .then(result => res.json({ result: result }))
    .catch(err => res.status(400).json(err));
}