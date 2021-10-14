
const surveyService = require('../services/survey.service') 
const validate = require('../validations/request.validations')

const create = async (req, res) => {
try{
  // Validate request
  const reqBody = req.body
  if(validate.isValidRequest(reqBody)) {
        const response = await surveyService.create(reqBody);
        return res.send(response);
  } else {
    res.status(400).send({ message: "Cannot create an Empty survey" });
    return;
  }
  } catch(err){
      console.log("Err is:", err);
  }
};

// get Survey 
const get = async (req, res) => {
  try{
    const {id} = req.params;
    const response = await surveyService.get(id);
    return res.send(response);
    } catch(err){
        console.log("Err is:", err);
    }
  };

const getAllSurveys = async (req, res) => {
    try{
      const response = await surveyService.getAllSurveys();
      return res.send(response);
      } catch(err){
          console.log("Err is:", err);
      }
    };


const answerSurvey = async (req, res) => {
try {
    const reqBody = req.body
    const {id} = req.params;
    if(id && validate.isValidRequest(reqBody)) {
        const response = await surveyService.answerSurvey(id,reqBody);
        return res.send(response);
    } else {
      res.status(400).send({ message: "Invalid parameter , Please check the request" });
      return;
    }
    } catch(err){
        console.log("Err is:", err);
  }
};

const getAggregatedResult = async (req, res) => {
  try{
    const response = await surveyService.getAggregatedResult(req);
    return res.send(response);
    } catch(err){
        console.log("Err is:", err);
    }
  };

module.exports ={
  create: create,
  get:get,
  answerSurvey:answerSurvey,
  getAllSurveys:getAllSurveys,
  getAggregatedResult: getAggregatedResult
}

