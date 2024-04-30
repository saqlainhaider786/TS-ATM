import inq from 'inquirer';
import ch from 'chalk'
import userDetails from './Registration.js'
import operations from './Operations.js'
console.log("Welcome, to our bank!..\nTo use ATM kindly first register yourself..!");
console.clear();
console.log(ch.green.bold(`${userDetails.userName}, congratulations you have registered yourself successfully!\nNow you can use the ATM..!`));

export let pass=await inq.prompt([{
    message:ch.bgMagentaBright("Enter your pin : "),
    type:"number",
    name:"pin"
}]);
operations();