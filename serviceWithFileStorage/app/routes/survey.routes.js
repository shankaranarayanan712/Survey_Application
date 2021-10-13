module.exports = app => {
  const survey = require("../controllers/survey.controller.js");
  const router = require("express").Router();
  // Create a new survey
  router.post("/", survey.create);
  // Answer a new survey
  router.put("/:id", survey.answerSurvey);
  // Get a Survey survey
  router.get("/:id", survey.get);
  // Get All Surveys
  router.get("/", survey.getAllSurveys);

  app.use("/api/survey", router);
};
