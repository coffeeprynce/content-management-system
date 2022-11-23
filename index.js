const fs = require('fs');
const inquirer = require('inquirer');
const { allowedNodeEnvironmentFlags } = require('process');






function getTeam() {
    inquirer
    .prompt(questions = [
        {
            type: 'list',
            message: 'what did you want to pull up?',
            choices: ['view all departments', 
            'view all roles', 'view all employees', 
            'add a department', 'add a role', 
            'add an employee', 'update an employee role'],
            name: 'action'
        }
    ])
    .then((data) => {
        if (data.action === 'view all departments') {
            placeholder()

        } else if (data.action === 'view all roles') {
            placeholder()
        } else if (data.action === 'view all employees') {
            placeholder()
        } else if (data.action === 'add a department') {
            addDepartment()
        } else if (data.action === 'add a role') {
            addRole()
        } else if (data.action === 'add an employee') {
            addEmployee()
        } else if (data.action === 'update an employee role') {
            updateEmployee()
}
    });
};

getTeam();