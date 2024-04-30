import inq from 'inquirer'
import ch from 'chalk'
let userDetails=await inq.prompt([
        {
            name:"userName",
            type:"input",
            message:ch.bgWhite("Set user-name for your account : ")
        },{
            name:"userPin",
            type:"number",
            message:ch.bgWhite("Set pin for your account : ")
        },{
            name:"accAmt",
            type:"number",
            message:ch.bgWhite("Enter the amount you want to deposit : ")
        }
]);

export default userDetails;