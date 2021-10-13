const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


const create = async (reqBody) => {
    try{
        const {title,questions} = reqBody;
        let surveyObj =  {
            id: uuidv4(),
            title,
            questions
        }
        surveyObj = JSON.stringify(surveyObj);
        await fs.writeFileSync(`${__dirname}/survey.txt`, surveyObj);
        return JSON.parse(surveyObj);
    } catch(err){
        console.log("Err:", err);
    }
}

module.exports ={
    create:create
}
