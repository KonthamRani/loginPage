const inputEmail=document.getElementById('input-email');
const inputPassword=document.getElementById('input-password');

const emailWarning=document.getElementById('email-warning');
const passwordWarning=document.getElementById('password-warning');

function checkForErrors(inputValue,warningElement){
    let error=false;
    if(inputValue==''){
        error=true;
    warningElement.innerHTML='This field is required'}
    else if(inputValue.length<6){
        error=true;
    warningElement.innerHTML='Must be atleast 6 characters'}
    else{
        warningElement.innerHTML='';
    }
    return error;
}
function login(){
    const emailError=checkForErrors(inputEmail.value,emailWarning)
    const passwordError=checkForErrors(inputPassword.value,passwordWarning)
    if(!emailError && !passwordError){
        window.location.replace("/login/success.html");
        // location.href=location.origin+'/login/success.html';
    }
}

