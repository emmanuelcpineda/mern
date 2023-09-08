const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');


// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = asyncHandler(async (request, response) => {
	const goals = await Goal.find();
	response.status(200).json(goals);
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
	const goal = await Goal.create({
		text: request.body.text
	})
	response.status(200).json(goal);
})

// @desc Put Goals
// @route PUT /api/goals/:id
// @access Private
const putGoals = asyncHandler(async (request, response) => {
	const goal = await Goal.findById(request.params.id);
	if(!goal)
	{
		response.status(400);
		throw new Error('Goal Not Found');
	}

	const updatedGoal = await Goal.findByIdAndUpdate(request.params.id, request.body, {new: true})

	response.status(200).json(updatedGoal);
})

// @desc Delete Goals
// @route DELETE /api/goals
// @access Private
const deleteGoal = asyncHandler(async (request, response) => {
		const goal = await Goal.findById(request.params.id);
	if(!goal)
	{
		response.status(400);
		throw new Error('Goal Not Found');
	}

	await goal.deleteOne()

	response.status(200).json({id: request.params.id});

})

//or: 
/*
const deleteGoals = asyncHandler(async (request, response) => {
		const goal = await Goal.findById(request.params.id);
		if(!goal)
		{
			response.status(404).json({message: "Goal NOT Found"});
		}
		await goal.deleteOne();
		response.status(200).json({id: request.params.id, name: request.params.name});
	})

	const goal = await Goal.findByIdAndRemove(request.params.id);
	if(!goal)
	{
		response.status(404).json({message: "Goal NOT Found"});
	}

	response.status(200).json(goal);
*/

module.exports = { getGoals, setGoals, putGoals, deleteGoal };