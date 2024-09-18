
const form = document.querySelector("form")

// event listener for form submission
form.addEventListener("submit",(e)=>{
   e.preventDefault();
   if(validate()){
    alert("submitted form")
    form.reset()
    clearValidationIcons()
   }
   
})


const validate =()=>{
   let fname = document.getElementById("fname")
   let lname = document.getElementById("lname")
   let email = document.getElementById("email")
   let password = document.getElementById("password")
   let repeat_password = document.getElementById("repeat_password")
   let phone = document.getElementById("phone")

   let isValid = true 

   let data = {
        name : fname.value.trim() ,
        lastName : lname.value.trim(),
        email :email.value.trim(),
        password :password.value.trim(),
        repeat_password :repeat_password.value.trim(),
        phone :  phone.value.trim()
     }

     
     // first name validation
     if(data.name === "" ||  data.name.length <= 3) {
        isValid = false

        showError(fname ," first name must be 3 charater")
     }else{
        showSuccess(fname)
     }
     // last name 
     if(data.lastName === "" ||  data.lastName.length <= 4) {
        isValid = false
        
        showError(lname  , " last name should be 4 charaters")
     }else{
        showSuccess(lname)
     }
     // phone number 

     if(!/^\d{10}$/.test(data.phone) ) {
        isValid = false
        showError(phone , "Phone number should be 10 digit " )
     }else{
        showSuccess(phone)
     }
     // email 

     if(!isValidEmail(data.email) ) {
        isValid = false

        showError(email , "please enter valid email " )
     }else{
        showSuccess(email)
     }
     
     //password 
     if( data.password.length < 6) {
        isValid = false
        showError(password , "password must be 6 characters" )
     }else{
        showSuccess(password)
     }

     // confirm password 
     if(data.password !== data.repeat_password ) {
        isValid = false

        showError(repeat_password , "password  do not match" )
     }else if(data.repeat_password === ""){
        showError(repeat_password , "enter the password")
     }else{
        showSuccess(repeat_password)

     }
     
     return isValid      
}

// Email validation regex
function isValidEmail(email) {
    const re = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return re.test(email);
  }
  


// shor error message 

const showError = (input ,message )=>{
  const formControl = input.parentElement
  const errormsg = formControl.querySelector(".error-message")

  errormsg.style.color = "red"
  formControl.classList.add("error")
  errormsg.innerHTML = message
  formControl.classList.remove("success")



}
const showSuccess = (input )=>{
    const formControl = input.parentElement
    const errormsg = formControl.querySelector(".error-message")
    errormsg.innerText  = " "
    formControl.classList.add("success")
    formControl.classList.remove("error")
  
  
  }
  // Clear validation styles and icons
  const clearValidationIcons =  () =>{
    const formControls = document.querySelectorAll(".form-control");
    formControls.forEach((control) => {
      control.classList.remove("success", "error");
      const errorMessage = control.querySelector(".error-message");
      if (errorMessage) errorMessage.innerText = "";
    });
  }