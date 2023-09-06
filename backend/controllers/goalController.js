const asyncHandler = require('express-async-handler');

// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (request, response) => {
	response.status(200).json({message:`Go Get goals`});
})

// @desc Set Goals
// @route SET /api/goals
// @access Private
const setGoals = asyncHandler(async (request, response) => {
	if(!request.body.text)
	{
		response.status(400);
		throw new Error("Please add a text field");
	}
	response.status(200).json({message:`Go Set goals`});
})

// @desc Put Goals
// @route PUT /api/goals/:id
// @access Private
const putGoals = asyncHandler(async (request, response) => {
	response.status(200).json({message: `Go Put goals ${request.params.id}`});
})

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
const deleteGoals = asyncHandler(async (request, response) => {
	response.status(200).json({message: `Go Delete goals ${request.params.id}`});
})

module.exports = { getGoals, setGoals, putGoals, deleteGoals };