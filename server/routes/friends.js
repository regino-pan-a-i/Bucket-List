var express = require('express');
var router = express.Router();
const Friend = require ('../models/friend')


router.get('/', (req, res, next)=>{
    Friend.find()
    .populate('recommendedItems')
    .then(friends => {
        console.log('Request successful');
        console.log('Found friends:', friends.length);
        res.status(200).json(friends);
    })
    .catch(error => {
        console.error('Error fetching friends:', error);
        res.status(500).json({
            message: 'An error occurred while fetching friends',
            error: error.message
        });
    });
})
router.get('/:id', (req, res, next)=>{


    Friend.findById(req.params.id)
    .populate('recommendedItems')
    .then(friend => {
        console.log(friend.recommendedItems); // Full recommendation objects
    });
})

module.exports = router