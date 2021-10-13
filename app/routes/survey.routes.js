module.exports = app => {
  const survey = require("../controllers/survey.controller.js");
  const router = require("express").Router();
  // Create a new survey
  router.post("/", survey.create);
  // Answer a new survey
  router.get("/answer/", survey.answerSurvey);
  // Get a Survey survey
  router.get("/get/", survey.get);


  app.use("/api/survey", router);
  };
