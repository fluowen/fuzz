const form = document.getElementById("form");
const username= document.getElementById("username");
const email = document.getElementById("email");
const password= document.getElementyI("password");
const passwordConfirmation= document.getElementById("password-confirmation");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const passwordConfirmationValue = passwordConfirmation.value;

    if(usernameValue === ''){
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
    }

    if(emailValue === ''){
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }

    if(passwordConfirmationValue === ''){
        setErrorFor(passwordConfirmation, 'Password confirmation cannot be blank');
    } else if(passwordValue !== passwordConfirmationValue){
        setErrorFor(passwordConfirmation, 'Passwords do not match');
    } else{
        setSuccessFor(passwordConfirmation);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
        formControl.className = 'form-control error';

    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}