const request = require('supertest');
const app = require('../server')

describe('Survey Service Test cases', function() {

    // The failure Test cases are to test the API with invalid parameters 
    // and then the API's are consumed without proper workflow
    // It is used for 1st time test , once the files are created 
    it('Should Fail when tried to get survey with invalid Id', async () => {
        const res = await request(app)
        .get('/api/survey/123')
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(404)
        expect(res).toHaveProperty('body');
    }, 50000);

    it('Should Fail when tried to update a survey with invalid Id', async () => {
        const mockRequest = {
            "title": "Programming Survey",
            "questions": [
                {
                    "name": "Which Programming Language do you like",
                    "options": [
                        {
                            "name": "JavaScript",
                            "selected": false
                        },
                        {
                            "name": "C",
                            "selected": false
                        },
                        {
                            "name": "Java",
                            "selected": false
                        },
                        {
                            "name": "Python",
                            "selected": false
                        }
                    ]
                },
                {
                    "name": "Why do you like the selected language the most",
                    "options": [
                        {
                            "name": "It is Easy to learn",
                            "selected": false
                        },
                        {
                            "name": "It is Advanced",
                            "selected": false
                        },
                        {
                            "name": "It is fast",
                            "selected": false
                        },
                        {
                            "name": "Because of the vast ecosystem of the language",
                            "selected": false
                        }
                    ]
                },
                {
                    "name": "What kind of projects you use it for",
                    "options": [
                        {
                            "name": "Networking application",
                            "selected": false
                        },
                        {
                            "name": "Gaming applications",
                            "selected": false
                        },
                        {
                            "name": "CPU intensive",
                            "selected": false
                        },
                        {
                            "name": "Machine Learning",
                            "selected": false
                        }
                    ]
                }
            ]
        }
        const res = await request(app)
        .put('/api/survey/dummyId')
        .send(mockRequest)
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(400)
        expect(jsonResponse.body).toEqual("Please make sure the survey exists before answering")
    }, 50000);
  
   // Success Cases

    it('Should Create a Survey', async () => {
        const mockRequest = {
            "title": "Programming Survey",
            "questions": [
                {
                    "name": "Which Programming Language do you like",
                    "options": [
                        {
                            "name": "JavaScript",
                            "selected": false
                        },
                        {
                            "name": "C",
                            "selected": false
                        },
                        {
                            "name": "Java",
                            "selected": false
                        },
                        {
                            "name": "Python",
                            "selected": false
                        }
                    ]
                },
                {
                    "name": "Why do you like the selected language the most",
                    "options": [
                        {
                            "name": "It is Easy to learn",
                            "selected": false
                        },
                        {
                            "name": "It is Advanced",
                            "selected": false
                        },
                        {
                            "name": "It is fast",
                            "selected": false
                        },
                        {
                            "name": "Because of the vast ecosystem of the language",
                            "selected": false
                        }
                    ]
                },
                {
                    "name": "What kind of projects you use it for",
                    "options": [
                        {
                            "name": "Networking application",
                            "selected": false
                        },
                        {
                            "name": "Gaming applications",
                            "selected": false
                        },
                        {
                            "name": "CPU intensive",
                            "selected": false
                        },
                        {
                            "name": "Machine Learning",
                            "selected": false
                        }
                    ]
                }
            ]
        }
        const res = await request(app)
        .post('/api/survey/')
        .send(mockRequest)
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(201)
        expect(res).toHaveProperty('body');
    }, 50000);

    it('Should get all Survey', async () => {
        const res = await request(app)
        .get('/api/survey/aggregated/result')
        const jsonResponse = JSON.parse(res.text);
        expect(jsonResponse.code).toEqual(200)
        expect(res).toHaveProperty('body');
    }, 50000);

    // Pass the correct id after it is saved in file to get exact result
    // 8cfc7151-1bb2-4bf3-b081-4ba5c72155a4 --> Replace this with valid id once created
    // it('Should update', async () => {
    //     const mockRequest = {
    //         "title": "Programming Survey",
    //         "questions": [
    //             {
    //                 "name": "Which Programming Language do you like",
    //                 "options": [
    //                     {
    //                         "name": "JavaScript",
    //                         "selected": true
    //                     },
    //                     {
    //                         "name": "C",
    //                         "selected": true
    //                     },
    //                     {
    //                         "name": "Java",
    //                         "selected": true
    //                     },
    //                     {
    //                         "name": "Python",
    //                         "selected": true
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "Why do you like the selected language the most",
    //                 "options": [
    //                     {
    //                         "name": "It is Easy to learn",
    //                         "selected": false
    //                     },
    //                     {
    //                         "name": "It is Advanced",
    //                         "selected": false
    //                     },
    //                     {
    //                         "name": "It is fast",
    //                         "selected": false
    //                     },
    //                     {
    //                         "name": "Because of the vast ecosystem of the language",
    //                         "selected": false
    //                     }
    //                 ]
    //             },
    //             {
    //                 "name": "What kind of projects you use it for",
    //                 "options": [
    //                     {
    //                         "name": "Networking application",
    //                         "selected": false
    //                     },
    //                     {
    //                         "name": "Gaming applications",
    //                         "selected": false
    //                     },
    //                     {
    //                         "name": "CPU intensive",
    //                         "selected": false
    //                     },
    //                     {
    //                         "name": "Machine Learning",
    //                         "selected": false
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    //     const res = await request(app)
    //     .put('/api/survey/8cfc7151-1bb2-4bf3-b081-4ba5c72155a4')
    //     .send(mockRequest)
    //     const jsonResponse = JSON.parse(res.text);
    //     expect(jsonResponse.code).toEqual(200)
    //     expect(res).toHaveProperty('body');
    // }, 50000);
 
}); 
