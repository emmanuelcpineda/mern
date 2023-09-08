const express = require('express');
const router = express.Router();
const { getGoals, setGoals, putGoals, deleteGoal } = require('../controllers/goalController');

router.route('/').get(getGoals).post(setGoals);

// router.get('/', getGoals);

// router.post('/', setGoals);

router.route('/:id').put(putGoals).delete(deleteGoal);

// router.put('/:id', putGoals);

// router.delete('/:id', deleteGoals);

module.exports = router; 