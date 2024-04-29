import inq from 'inquirer'
import {pass} from './atm.js'
import userDetails from './Registration.js'
let exe=true;//using to control execution.

export default async function Operations(){
    if(pass.pin===userDetails.userPin){
        do{
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
                let userCh=await inq.prompt([{
                    name:"choice",
                    type:"list",
                    message:"Do you want more transactions ? ",
                    choices:["Yes","No"]
                }]);
                
                (userCh.choice==="Yes")?exe=true:exe=false;
            }
            while(exe);
            console.log(`${userDetails.userName}, thank you...`);
        }
        else{
            console.log("Wrong pin!!..\nSorry you cannot use ATM at this moment!..");
        }    
}