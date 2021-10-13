
const surveyService = require('../services/survey.service') 

// Create and Save a new survey
const create = async (req, res) => {
try{
  // Validate request
  if (req.body.length === 0) {
    res.status(400).send({ message: "Cannot create an Empty survey" });
    return;
  }
  const response = await surveyService.create(req.body);
  return res.send(response);
  } catch(err){
      console.log("Err is:", err);
  }
};

// get Survey 
const get = async (req, res) => {
  try{
    //TODO
    //const {type, pageNumber, pageSize,chainType} = req.query;
    //const response = await surveyService.get(type,pageNumber,pageSize,chainType);
    return res.send(response);
    } catch(err){
        console.log("Err is:", err);
    }
  };
const answerSurvey = async (req, res) => {
    try{
       //TODO
      //const {chainType,currency} = req.query;
      //const response = await surveyService.getBalancePerCoin(chainType,currency);
      return res.send(response);
      } catch(err){
          console.log("Err is:", err);
      }
    };

module.exports ={
  create: create,
  get:get,
  answerSurvey:answerSurvey
}

