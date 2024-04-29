import inq from 'inquirer'

let userDetails=await inq.prompt([
        {
            name:"userName",
            type:"input",
            message:"Set user name for your account : "
        },{
            name:"userPin",
            type:"number",
            message:"Set pin for your account : "
        },{
            name:"accAmt",
            type:"number",
            message:"Enter the amount you want to deposit : "
        }
]);

export default userDetails;