const ScheduledModel = require('../models/scheduledModel');
const { matchedData, checkSchema, validationResult, body } = require('express-validator')

const getScheduleds = async (req, res) => {
  try {
    const scheduleds = await ScheduledModel.find({})
    if (!scheduleds) {
      return res.status(404).json({message: "Not found"})
    }
    res.status(200).json(scheduleds)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


const getScheduled = async (req, res) => {
  try {
    const { id } = req.params
    const schedule = await ScheduledModel.findById(id)
    if (!schedule) {
      return res.status(404).send("Not found")
    }
    res.status(200).json(schedule)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}


const createSchedule = async (req, res) => {
  try {
    const newSchedule = new ScheduledModel(req.body);
    await newSchedule.save();
    return res.status(201).json(newSchedule);
  } catch (error) {
    return res.status(500).json({ message: `Error creating schedule: ${error.message}` });
  }
};

const getScheduleByDate = async (req, res) => {
  try {
    const schedule = await ScheduledModel.find({ date: req.params.date });
    if (!schedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }

    return res.status(200).json(schedule);
  } catch (error) {
    return res.status(500).json({ message: `Error retrieving schedule: ${error.message}` });
  }
};

const updateScheduleById = async (req, res) => {
  try {
    const { id } = req.params
    const updatedSchedule = await ScheduledModel.findByIdAndUpdate(id, req.body)
    if (!updatedSchedule) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    return res.status(200).json(updatedSchedule);
  } catch (error) {
    return res.status(500).json({ message: `Error updating schedule: ${error.message}` });
  }
};

const deleteScheduleById = async (req, res) => {
  try {
    const { id } = req.params
    const result = await ScheduledModel.findByIdAndDelete(id)
    if (!result) {
      return res.status(404).json({ message: 'Schedule not found' });
    }
    return res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    return res.status(500).json({ message: `Error deleting schedule: ${error.message}` });
  }
};

module.exports = {
  createSchedule,
  getScheduleByDate,
  updateScheduleById,
  deleteScheduleById,
  getScheduleds,
  getScheduled
};
