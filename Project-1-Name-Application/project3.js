const passwordBox = document.getElementById("password");
const button = document.getElementById("btn");
const copyButton = document.getElementById("copy");

const generatePassword = ()=>{

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+}{|\/><=-`~[]";

    let password = "";
    const lenthofPassword = 10;

    for(let i = 0; i < lenthofPassword; i++){

       password += chars.charAt(Math.floor(Math.random() * chars.length)) // 10
     //   console.log(password);
    }

    passwordBox.value = password;
};

button.addEventListener("click",generatePassword);

copyButton.addEventListener("click",()=>{

  const passwordCopy = passwordBox.value.trim();
  if(!passwordCopy){
    alert("There's no password to copy! You can generate a password now.");
    return;
  }


  navigator.clipboard.writeText(passwordCopy)
    .then(()=>{
        alert("Password copied to clipboard!");
    });

});