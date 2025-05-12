let chose = prompt("What do you want " + "signing_up" + " or " + "logging_in" + " or " + "changing_the_password" + "?");

class users {
    constructor(username, email,age, money, password){
        this.username = username
        this.email = email
        this.age = age
        this.money = money
        this.password = password
    }
    UserInfo(){
        console.log(`username : ${this.username}, email : ${this.email}, money : ${this.money}`);
        
    }
}




if (chose == "exit") {
    alert("Exiting the application.");
    while(true) {
        chose = prompt("What do you want \n signing_up  or \n logging_in  or  \n changing_the_password" + "?");
        break;
    }
}else if (chose == "signing_up") {
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
      
    }
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
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alert("Email must be in a valid format.");
    }

    
    if (users.email.includes(email)) {
    alert("This email is already in use. Please use a different email.");
    } else {
    alert("Email is unique and saved.");
    users.email.push(email); 

    
    }
    var age1 = prompt("Enter your age :").trim();
    if (isNaN(age1)) {
        alert("Age baghi only have numbers.");
        } else if (age1.length === 0 || age1.length >= 3) {
        alert("Are you sure this is your real age? Please check again.");
        age1 = prompt("Enter your age :").trim();
        } else {
        alert("Age is correct and saved.");
    }
    let password = prompt("Enter you password : ").trim();
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
    }
   



}
// let marck = new users(username, email)