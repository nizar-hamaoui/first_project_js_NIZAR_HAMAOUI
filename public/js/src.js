var chose = prompt("What do you want \n signing_up \n exit" + "?");

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
                           confirm("do you wont logout ??")
                            
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
   
    
    
   


}
