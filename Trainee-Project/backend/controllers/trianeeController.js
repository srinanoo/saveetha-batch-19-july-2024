const traineeModel = require('../models/traineeModel');

function getAllTrainees(req, res) {
    try {
        res.status(200).json({
            "data": "ALL TRAINEES",
            "msg": "",
            "error": ""
        });
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
}

function getSpecificTrainee(req, res) {
    res.send(req.query.id + " " + req.query.name);
}

async function createTrainee(req, res)  {
    try {
        const trainee = new traineeModel(req.body);
        await trainee.save();
        res.status(201).json({
            "data": "",
            "msg": "Trainee Created Successfully!",
            "error": ""
        })
    } catch (err) {
        res.status(500).json({
            "data": "",
            "msg": "",
            "error": err.message
        });
    }
    
}

function updateTrainee(req, res) {
    res.send(req.body);
}

function deleteTrainee(req, res) {
    res.send(req.params.name);
}

module.exports = {
    getAllTrainees,
    getSpecificTrainee,
    createTrainee,
    updateTrainee,
    deleteTrainee
}