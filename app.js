const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const renderHTML = require("./lib/genhtml");

const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const { generateKey } = require("crypto");
const fileDirectory = path.resolve(__dirname, "dist");
const filePath = path.join(fileDirectory, "index.html");

let employeesArr = [];
let canAddManager= true;

const selectMemberType = [
    {
        type: "list",
        name: "memberType",
        message: "Please choose the role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];


const questions = {
    managerQ: [
        {
            type: "input",
            name: "name",
            message: "what is the managers name?",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter managers name."}
            },
        },
        {
            type: "input",
            name: "id",
            message: "what is the managers id?",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter managers id."}
            },
        },
        {
            type: "input",
            name: "email",
            message: "what is the managers email address?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "what is their office number?",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter managers office number."}
            },
        }
    ],

    engineerQ: [
        {
            type: "input",
            name: "name",
            message: "what is the Engineers name?",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter Engineers name."}
            },
        },
        {
            type: "input",
            name: "id",
            message: "what is the Engineers id?",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter Engineers id ."}
            },
        },
        {
            type: "input",
            name: "email",
            message: "what is the Engineers email address?"
        },
        {
            type: "input",
            name: "github",
            message: "what is the Engineers github?",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter Engineers github."}
            },
        }
    ],

    internQ: [
        {
            type: "input",
            name: "name",
            message: "what is the Interns name?",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter Interns name."}
            },
        },
        {
            type: "input",
            name: "id",
            message: "what is the Interns id?",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter Interns Id."}
            },
        },
        {
            type: "input",
            name: "email",
            message: "what is the Interns email address?"
        },
        {
            type: "input",
            name: "school",
            message: "what school is the intern attending",
            validate: (value) => {
                if (value){
                    return true
                }else{return "Please enter the interns school."}
            },
        }
    ]
    
};

const init = () =>{
    if (fs.existsSync(filePath)){
        inquirer.prompt({
            type:"confirm",
            message:"index.html already exists, over write it?",
            name:"replace"
        }).then(async(response)=>{
            let replace = response.replace;
            if (await replace === true){
                console.log("please enter in team info"),
                addNewPerson()
            }else if (await replace === false){
                console.log("your team info will not be replaced")
            }
        })
    } else{
        console.log("Welcome to team profile generator"),
        addNewPerson()
       
    }
};
// const addNewPerson = async () => {
//     await inquirer.prompt(selectMemberType)
//         .then((response) => {
//             let name = response.name;
//             let id = response.id;
//             let email = response.email;
//             let role = response.role;
//             let officeNumber;
//             let github;
//             let school;

//             if (role === "Engineer") {
//                 inquirer.prompt(engineerQ).then((response) => {
//                     github = response.github;
//                     let employee = new Engineer(name, id, email, github);
//                     employeesArr.push(employee);
//                     addEmployee(employeesArr);
//                 });
//             } else if (role === "Intern") {
//                 inquirer.prompt(internQ).then((response) => {
//                     school = response.school;
//                     let employee = new Intern(name, id, email, school);
//                     employeesArr.push(employee);
//                     addEmployee(employeesArr);
//                 });
//             } else if (role === "Manager") {
//                 inquirer.prompt(managerQ).then((response) => {
//                     officeNumber = response.officeNumber;
//                     let employee = new Manager(name, id, email, officeNumber);
//                     employeesArr.push(employee);
//                     addEmployee(employeesArr);
//                 });
//             }


//         });
// };


function addNewPerson(){
    inquirer.prompt(selectMemberType)
    .then(answer => {
        if(answer.memberType === "Manager"){
            if (canAddManager){
                inquirer.prompt(questions.managerQ)
                .then(answer =>{
                    const manager = new Manager (
                        answer.name,
                        answer.id,
                        answer.email,
                        answer.officeNumber
                    );
                    employeesArr.push(manager);
                    canAddManager = false;
                   
                });
            }else{
                console.log("Already a manager employed")
                addNewPerson();
            }
        } else if (answer.memberType === "Engineer"){
            inquirer.prompt(questions.engineerQ)
            .then(answer => {
                const engineer = new Engineer(
                    answer.name,
                    answer.id,
                    answer.email,
                    answer.github
                );
                employeesArr.push(engineer);
                
            });
        } else if (answer.memberType === "Intern"){
            inquirer.prompt(questions.internQ)
            .then(answer => {
                const intern = new Intern(
                    answer.name,
                    answer.id,
                    answer.email,
                    answer.school
                );
                employeesArr.push(intern);
            });
        };
    });
};
addNewPerson(); 
// const confirmPerson = async(array) =>{
//     await inquirer.prompt({
//         type:"confirm",
//         name:"confirmPerson",
//         message:"would you like to add this person?"
//     }).then(async(res)=>{
//         var createPerson = response.confirmPerson;
//         if(await confirmPerson === true){
//             addNewPerson();
//         }else if(await createPerson === false){
//             if(!fs.existsSync(fileDirectory)){
//                 fs.mkdirSync(fileDirectory)
//             }
//             fs.writeFile(filePath, renderHTML(array),(err)=>{
//                 if(err){
//                     return console.log(err);
//                 }
//                 console.log("index.html file created")
//             })
//         }
//     })
// }



init();