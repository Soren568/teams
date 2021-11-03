const mongoose = require('mongoose');
const PlayerSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [true, "The player must have a first name."],
        minlength: [2, "Player name must be at least 2 characters long."]
    },
    position:{
        type: String,
    },
    g1Status:{
        type: String
    },
    g2Status:{
        type: String
    },
    g3Status:{
        type: String
    },
}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);

