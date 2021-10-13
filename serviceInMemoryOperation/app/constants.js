// Sample Request Object for Survey

const programmingSurvey = {
  "title": "Programming Language Survey",
  "questions": [
      {
          "name": "Which Programming Language do you like",
          "options" : [
            {
            "name": "JavaScript",
            "selected": false,
            },
            {
              "name": "C",
              "selected": false,
            },
            {
              "name": "Java",
              "selected": false,
            },
            {
              "name": "Python",
              "selected": false,
            }
          ]
      }, 
      {
        "name": "Why do you like the selected language the most",
        "options" : [
          {
          "name": "It is Easy to learn",
          "selected": false,
          },
          {
            "name": "It is Advanced",
            "selected": false,
          },
          {
            "name": "It is fast",
            "selected": false,
          },
          {
            "name": "Because of the vast ecosystem of the language",
            "selected": false,
          }
        ]
    }, {
      "name": "What kind of projects you use it for",
      "options" : [
        {
        "name": "Networking application",
        "selected": false,
        },
        {
          "name": "Gaming applications",
          "selected": false,
        },
        {
          "name": "CPU intensive",
          "selected": false,
        },
        {
          "name": "Machine Learning",
          "selected": false,
        }
      ]
  }, 
  ]
};

const errorMessages = {
  NO_SURVEY : 'No survey is present for this request',
  CANT_FIND : 'Cannot find any surveys at the moment, make sure that surveys are added',
  CANT_GET_FILE : 'Oops, Surveys are Empty, Please make sure at-least one survey is added',
  INVALID_SURVEY_ID : 'Please make sure the survey exists before answering'
}
const status = [{code:200, message:'Ok'},{code:201, message:'Created'},{code:404, message:'Not found'},{code:400, message:'Bad Request'}]
module.exports = {
    status: status,
    errorMessages:errorMessages
}