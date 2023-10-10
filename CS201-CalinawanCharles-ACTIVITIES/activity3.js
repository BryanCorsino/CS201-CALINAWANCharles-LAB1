//let password = "Fran2023"; 
console.log("Ben Bryan Corsino");
console.log("BSCS-2A")
let password = prompt("Enter your password:"); 
if(password.length == 8 )
{  
console.log("Welcome");  
} 
else if(password == "") 
{  
console.log("Please provide a password.");  
} 
 else if(password.length < 8) 
{  
console.log("Password is too short");  
}  
else if(password.length > 8) 
{  
console.log("Too Long Password & Password should be 8 characters");  
}