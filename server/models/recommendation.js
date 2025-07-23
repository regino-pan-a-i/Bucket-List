const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    recommendedBy: { type: String, required: false },
    source: { type: String, required: true },
    notes: { type: String, required: true },
    status: { type: String, required: true },
    reaction: { type: String, required: true },
    imageUrl: { type: String, required: true },
});
module.exports = mongoose.model('Recommendation', recommendationSchema);