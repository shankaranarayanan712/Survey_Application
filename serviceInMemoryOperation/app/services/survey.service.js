const fs = require('fs')
const { v4: uuidv4 } = require('uuid');
const app = require('../../server');
const constants = require('../constants')


const create = async (reqBody) => {
try {
    const {title,questions} = reqBody;
    let totalSurveys = []
    const surveyObj =  { id: uuidv4(), title, questions , createdAt : new Date() }
    if(surveys){
        const existingSurvey = surveys;
        if(existingSurvey && existingSurvey.length > 0){
            totalSurveys = [...existingSurvey,surveyObj]
        } 
        else {
        totalSurveys.push(surveyObj);
        }
        surveys = [...totalSurveys]
        const response = constructResponse(201,surveyObj)
        return response;   
    }
    } catch(err){
        console.log("Err:", err);
    }
}

const get = async (id) => {
try {
    if(surveys && surveys.length >0) {
        const survey = surveys.filter(survey => survey.id === id);
        if(!survey ||  !survey.length) {
            return constructResponse(404, constants.errorMessages.NO_SURVEY)
        }
        return constructResponse(200,survey)
    } else {
        return constructResponse(400, constants.errorMessages.CANT_GET_FILE)
    }
    } catch(err){
        console.log("Err:", err);
    }
}

const getAllSurveys = async () => {
try {
    if(surveys && surveys.length >0) {
       return constructResponse(200,surveys)
    } else {
        return constructResponse(400, constants.errorMessages.CANT_GET_FILE)
    }
    } catch(err){
            console.log("Err:", err);
    }
}

const answerSurvey = async (id,reqBody) => {
try {
    const {title,questions} = reqBody;
    const surveyObj =  { id,title, questions, updatedAt:new Date() }
    if(surveys && surveys.length >0) {
        const canUpdate  = surveys &&  surveys.filter((surv)=>surv.id ===id).length;
        if(canUpdate){
            surveys.forEach(survey => {
                if(survey.id === id){
                    survey.questions =  reqBody.questions;
                    survey.updatedAt =  new Date();
                }
            });
            return constructResponse(200,surveyObj)
        } else {
            return constructResponse(400,constants.errorMessages.INVALID_SURVEY_ID)
        }
    }  else {
        return constructResponse(400, constants.errorMessages.CANT_GET_FILE)
    }
    } catch(err){
            console.log("Err:", err);
}
}


const constructResponse = (status, body) => {
    if(!body || !status) {
        return 'Internal Server Error'
    }
    const statusDetail = constants.status.find((stat) => stat.code === status);
    if(statusDetail && statusDetail.code){
        const response = {...statusDetail, body:body};
        return response;
    }    
}

module.exports = {
    create:create,
    get:get,
    getAllSurveys:getAllSurveys,
    answerSurvey:answerSurvey,
}
