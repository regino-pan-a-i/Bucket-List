var express = require('express');
var router = express.Router();
const Recommendation = require('../models/recommendation')


// Get all recommendations
router.get("/", (req, res, next)=>{
    console.log('Getting all recommendations...');
    Recommendation.find()
        .then(recommendations => {
            console.log('Request successful');
            console.log('Found recommendations:', recommendations.length);
            res.status(200).json(recommendations);
        })
        .catch(error => {
            console.error('Error fetching recommendations:', error);
            res.status(500).json({
                message: 'An error occurred while fetching recommendations',
                error: error.message
            });
        });
});



// Get recommendation by ID
router.get("/:id", (req, res, next)=>{
    console.log("Getting recommendation by ID:", req.params.id);
    Recommendation.findById(req.params.id)
        .then(recommendation => {
            if (!recommendation) {
                return res.status(404).json({
                    message: 'Recommendation not found'
                });
            }
            console.log('Found recommendation:', recommendation);
            res.status(200).json(recommendation);
        })
        .catch(error => {
            console.error('Error fetching recommendation by ID:', error);
            res.status(500).json({
                message: 'An error occurred while fetching the recommendation',
                error: error.message
            });
        });
});

// Create a new recommendation
router.post("/", (req, res, next) => {
    console.log('Creating new recommendation...');
    console.log('Request body:', req.body);
    
    const recommendation = new Recommendation({
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        category: req.body.category,
        recommendedBy: req.body.recommendedBy,
        source: req.body.source,
        notes: req.body.notes,
        status: req.body.status,
        reaction: req.body.reaction,
        imageUrl: req.body.imageUrl
    });

    recommendation.save()
        .then(createdRecommendation => {
            console.log('Recommendation created successfully:', createdRecommendation);
            res.status(201).json({
                message: 'Recommendation created successfully',
                recommendation: createdRecommendation
            });
        })
        .catch(error => {
            console.error('Error creating recommendation:', error);
            res.status(500).json({
                message: 'An error occurred while creating the recommendation',
                error: error.message
            });
        });
});

// Update a recommendation
router.put("/:id", (req, res, next) => {
    console.log('Updating recommendation with ID:', req.params.id);
    console.log('Update data:', req.body);

    Recommendation.findByIdAndUpdate(
        req.params.id,
        {
            title: req.body.title,
            description: req.body.description,
            category: req.body.category,
            recommendedBy: req.body.recommendedBy,
            source: req.body.source,
            notes: req.body.notes,
            status: req.body.status,
            reaction: req.body.reaction,
            imageUrl: req.body.imageUrl
        },
        { new: true, runValidators: true }
    )
        .then(updatedRecommendation => {
            if (!updatedRecommendation) {
                return res.status(404).json({
                    message: 'Recommendation not found'
                });
            }
            console.log('Recommendation updated successfully:', updatedRecommendation);
            res.status(200).json({
                message: 'Recommendation updated successfully',
                recommendation: updatedRecommendation
            });
        })
        .catch(error => {
            console.error('Error updating recommendation:', error);
            res.status(500).json({
                message: 'An error occurred while updating the recommendation',
                error: error.message
            });
        });
});

// Delete a recommendation
router.delete("/:id", (req, res, next) => {
    console.log('Deleting recommendation with ID:', req.params.id);

    Recommendation.findByIdAndDelete(req.params.id)
        .then(deletedRecommendation => {
            if (!deletedRecommendation) {
                return res.status(404).json({
                    message: 'Recommendation not found'
                });
            }
            console.log('Recommendation deleted successfully:', deletedRecommendation);
            res.status(200).json({
                message: 'Recommendation deleted successfully',
                recommendation: deletedRecommendation
            });
        })
        .catch(error => {
            console.error('Error deleting recommendation:', error);
            res.status(500).json({
                message: 'An error occurred while deleting the recommendation',
                error: error.message
            });
        });
});

module.exports = router