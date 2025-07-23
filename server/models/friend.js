const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    recommendedItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recommendation' 
    }]
});

module.exports = mongoose.model('Friend', friendSchema);