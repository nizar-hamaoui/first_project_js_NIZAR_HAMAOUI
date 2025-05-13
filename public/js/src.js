let chose = prompt("What do you want \n signing_up \n exit" + "?");

let marck = {
    username: "",
    email: "",
    age: 0,
    money: 1000,
    password: ""
};



if (chose == "exit") {
    alert("Exiting the application.");
if (chose == "exit") {
        chose = prompt("What do you want \n signing_up " + "?");
    }
} else if (chose === "signing_up") {
    alert("You chose to sign up.");
    var username = prompt("Enter your username:").trim();
    username = username.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
     if (username.length < 5) {
        alert("Username must be at least 5 characters long.");
        
        
     }
    if (/[\d@!#$%^&*(),.?":{}|<>]/.test(username)) {
        alert("Username must not contain numbers, '@', or special characters.");
    } else {
        alert("Username is valid and saved.");
        marck.username = username
        var email = prompt("Enter your email:").trim();
        email = email.toLowerCase();
        if (email.length < 10) {
            
                alert("Email must be at least 10 characters long.");
           
            } 
          else if (/\s/.test(email)) {
                alert("Email must not contain spaces.");
         } 
         else if (email.split('@').length !== 2) {
            alert("Email mafihch  '@' ."); 
        }
    if (marck.email === email) {
         alert("This email is already in use. Please use a different email.");
    } else {
         alert("Email is unique and saved.");
         marck.email = email
         var age1 = prompt("Enter your age :").trim();
          if (isNaN(age1)) {
                alert("Age baghi only have numbers.");
             } else if (age1.length === 0 || age1.length >= 3) {
              alert("Are you sure this is your real age? Please check again.");
               age1 = prompt("Enter your age :").trim();
               } else {
                alert("Age is correct and saved.");
                marck.age = age1 
                var password = prompt("Enter you password : ").trim();
                    if (/\s/.test(password)){
                        alert("3chiri fiha espace hayadha ")
                        password = prompt("Enter your password:").trim();
                       
                    }
                    else if (password.length < 7 ){
                        alert("passwor a3chiri khaso ykon ktar man 7 ola kay sawiha")
                    }
                     else if (!/[@#\-+*/]/.test(password)) {
                        alert("Password must include at least one special character from the set: \n [@, #, -, +, *, /].");
                    }
                    let confirmPassword = prompt("Re-enter your password:").trim();
                    if (confirmPassword !== password) {
                        alert("Passwords do not match. You are blocked.");
                    } else {
                        alert("Password confirmed and saved.");
                        marck.password = password
                        
                    }
                    chose = prompt("What do you want \n logging_in  or  \n changing_the_password" + "?");
                    if (chose === "logging_in"){
                        var enteremail = prompt("Enter your email : ")
                        if (enteremail == marck.email) {
                          let conpass = prompt("enter your password : ")
                          if (conpass == marck.password) {
                            alert("log in sueccessfully")
                            chose = prompt("What do you want  \n changing_the_password" + "?");
                            if (chose == "changing_the_password") {
                                let emailInput = prompt("Enter your email:");
                                if (emailInput === marck.email) {
                                    let oldPasswordInput = prompt("Enter your old password:");
                                    if (oldPasswordInput === marck.password) {
                                        let newPassword = prompt("Enter your new password:").trim();
                                        if (newPassword.includes(" ")) {
                                            alert("Password should not have spaces.");
                                        } else if (newPassword.length < 7) {
                                            alert("Password should be at least 7 characters long.");
                                        } else if (!/[@#\-+*/]/.test(newPassword)) {
                                            alert("Password should have at least one special character like @, #, -, +, *, or /.");
                                        } else {
                                            let confirmNewPassword = prompt("Type your new password again:").trim();
                                            if (confirmNewPassword === newPassword) {
                                                marck.password = newPassword;
                                                alert("Password changed successfully!");
                                            } else {
                                                alert("Passwords do not match. Try again.");
                                            }
                                        }
                                    } else {
                                        alert("Old password is wrong.");
                                    }
                                } else {
                                    alert("Email does not match.");
                                }
                            }
                            alert(`your money in bank is : ${marck.money}$ `)
                          let out =   confirm("do you wont logout ??")
                          if (out !== true) {
                            let WithdrawMoney = confirm("Do you want to withdraw money?");
                            if (WithdrawMoney) {
                                let amountToWithdraw = parseFloat(prompt("Enter the amount you want to withdraw:").trim());
                                if (isNaN(amountToWithdraw) || amountToWithdraw <= 0) {
                                    alert("Invalid amount. Please enter a positive number.");
                                } else if (amountToWithdraw > marck.money) {
                                    alert("ma3andakch had mablagh ");
                                } else {
                                    marck.money -= amountToWithdraw;
                                    alert(`Withdrawal successful! Your new balance is: ${marck.money}$`);
                                }
                            }
                            let depositMoney = confirm("Do you want to deposit money?");
                            if (depositMoney) {
                                let amountToDeposit = parseFloat(prompt("Enter the amount you want to deposit:").trim());
                                if (isNaN(amountToDeposit) || amountToDeposit <= 0) {
                                    alert("Invalid amount. Please enter a positive number.");
                                } else if (amountToDeposit > 1000) {
                                    alert("You cannot deposit more than 1000.");
                                } else {
                                    marck.money += amountToDeposit;
                                    alert(`Deposit successful! Your new balance is: ${marck.money}$`);
                                }
                            }
                            // let getLoan = confirm("Do you want to get a loan?");
                            // if (getLoan) {
                            //     let loanAmount = marck.money * 0.2; 
                            //     marck.money += loanAmount; 
                            //     alert(`Loan approved! You received ${loanAmount}$. Your new balance is: ${marck.money}$.`);

                            //     let loanDeduction = () => {
                            //         if (loanAmount > 0) {
                            //             let deduction = loanAmount * 0.1;
                            //             loanAmount -= deduction; 
                            //             marck.money -= deduction; 
                            //             alert(`Loan deduction applied. Deducted: ${deduction}$. Remaining loan: ${loanAmount}$. Current balance: ${marck.money}$.`);
                            //         }
                            //     };

                               
                            //     let originalLoginFunction = window.onLogin; 
                            //     window.onLogin = function () {
                            //         if (originalLoginFunction) originalLoginFunction(); 
                            //         loanDeduction(); 
                            //     };

                                let investMoney = confirm("Do you want to invest money?");
                                if (investMoney) {
                                    let invesAmount = parseFloat(prompt("Enter the amount you want to invest:").trim());
                                    if (isNaN(invesAmount) || invesAmount <= 0) {
                                        alert("Invalid amount. Please enter a positive number.");
                                    } else if (invesAmount > marck.money) {
                                        alert("You do not have enough balance to invest this amount.");
                                    } else {
                                        marck.money -= invesAmount;
                                        let profit = invesAmount * 0.2; 
                                        let totalProfit = 0;
                                        let maxProfit = invesAmount * 1.2; 

                                        let applyProfit = () => {
                                            if (totalProfit < maxProfit) {
                                                let currentProfit = Math.min(profit, maxProfit - totalProfit);
                                                totalProfit += currentProfit;
                                                marck.money += currentProfit;
                                                alert(`You earned ${currentProfit}$ from your investment. Total profit so far: ${totalProfit}$.`);
                                            } else {
                                                alert("You have reached the maximum profit of 120% on your investment.");
                                            }
                                        };

                                        alert(`Investment successful! You will earn 20% profit on each login until you reach 120% of your investment.`);
                                        
                                        let originalLoginFunction = window.onLogin; 
                                        window.onLogin = function () {
                                            if (originalLoginFunction) originalLoginFunction(); 
                                            applyProfit(); 
                                        };
                                    }
                                }
                                if (confirm("Do you want to view your transaction history?")) {
                                    if (!marck.transactionHistory || marck.transactionHistory.length === 0) {
                                        alert("No transactions found.");
                                    } else {
                                        alert(`Transaction History:\n${marck.transactionHistory.join("\n")}`);
                                    }
                                }

                                marck.transactionHistory = marck.transactionHistory || [];

                                if (WithdrawMoney && amountToWithdraw > 0 && amountToWithdraw <= marck.money) {
                                    marck.transactionHistory.push(`Withdrew ${amountToWithdraw}$`);
                                }

                                if (depositMoney && amountToDeposit > 0 && amountToDeposit <= 1000) {
                                    marck.transactionHistory.push(`Deposited ${amountToDeposit}$`);
                                }

                                if (investMoney && invesAmount > 0 && invesAmount <= marck.money) {
                                    marck.transactionHistory.push(`Invested ${invesAmount}$`);
                                }
                            }
                            
                            
                          }else{
                            alert("logout successfully")
                            chose = prompt("What do you want \n signing_up \n exit" + "?");
                          }
                            
                          }else{
                            alert("password ghalat !!")
                          }
                         
                
                        }else{
                          alert("your email khataaa")
                        }
                      }
            }

    }
    }
   
    
    
   



