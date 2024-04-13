import inq from 'inquirer'
console.log("Welcome, to our bank!..\nTo use ATM kindly first register yourself..!");
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
console.clear();
console.log(`${userDetails.userName}, congratulations you have registered yourself successfully!\nNow you can use the ATM..!`);
let exe=true;//using to control execution.
do{
    let pass=await inq.prompt([{
        message:"Enter your pin : ",
        type:"number",
        name:"pin"
    }]);
    if(pass.pin===userDetails.userPin){
        let trans=await inq.prompt([{ //using to get transaction mode by the user.
            type:"list",
            name:"transMode",
            message:"Select the transaction you want : ",
            choices:["Deposit Money","Withdrawal Money","Check Balance"]
        }]);
    
        if(trans.transMode==="Deposit Money"){
            let amount=await inq.prompt([{
                name:"amt",
                type:"number",
                message:`Enter the amount you want to ${trans.transMode} : `
            }]);
    
            userDetails.accAmt+=amount.amt;
            console.log(`Transaction successful!..`)
        }
        else if(trans.transMode==="Withdrawal Money"){
            let amount=await inq.prompt([{
                name:"amt",
                type:"number",
                message:`Enter the amount you want to ${trans.transMode} : `
            }]);
    
            if(userDetails.accAmt<amount.amt){
                console.log("Sorry, amount is not available!");
            }
            else{
    
                userDetails.accAmt-=amount.amt;
                console.log(`Transaction successful!..`)
            
            }
        }
        else if(trans.transMode==="Check Balance"){
            console.log(`Your current balance is ${userDetails.accAmt}`);
        }
    }
    else{
        console.log("Wrong pin!!..\nTry again..");
    }
    let userCh=await inq.prompt([{
        name:"choice",
        type:"list",
        message:"Do you want more transactions ? ",
        choices:["Yes","No"]
    }]);

    (userCh.choice==="Yes")?exe=true:exe=false;
}
while(exe);
console.log(`${userDetails.userName}, thanks for using the ATM...`);