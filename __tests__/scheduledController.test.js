const {
  getScheduleds,
  createScheduled,
  deleteScheduled,
  updateScheduled,
} = require("../src/controllers/scheduledController");

test("get is not null", () => {
  expect(getScheduleds).not.toBeNull();
});

test("create is not null", () => {
  expect(createScheduled).not.toBeNull();
});

test("delete is not null", () => {
  expect(deleteScheduled).not.toBeNull();
});

test("update is not null", () => {
  expect(updateScheduled).not.toBeNull();
});
