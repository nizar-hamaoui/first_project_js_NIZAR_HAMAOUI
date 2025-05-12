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
        chose = prompt("What do you want " + "signing_up" + " or " + "logging_in" + " or " + "changing_the_password" + "?");
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

let marck = new users(username, email)