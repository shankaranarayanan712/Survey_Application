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
module.exports = {
    chainTypes: chainTypes
}