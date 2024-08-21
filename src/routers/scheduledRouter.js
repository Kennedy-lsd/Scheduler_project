const express = require("express");
const router = express.Router();
const {
  getScheduleByDate,
  createSchedule,
  deleteScheduleById,
  updateScheduleById,
  getScheduleds,
  getScheduled
} = require("../controllers/scheduledController");

router.get("/", getScheduleds);

router.post("/", createSchedule);

router.get("/all/:date", getScheduleByDate);

router.get("/:id", getScheduled);

router.delete("/:id", deleteScheduleById);

router.patch("/:id", updateScheduleById);

module.exports = router;
