const loginButton = document.getElementById ('btnLogin');
loginButton.addEventListener('click', functionOne);
const warningText = document.getElementById('warnings');
warningText.style.fontSize = '14px';

const inputUserName = document.getElementById('inputUserName');
const inputPassword = document.getElementById ('inputPassword');

const userName = 'methu';
const userPassword = '5252';

function functionOne(){
    if (inputUserName.value === '' && inputPassword.value === ''){
        warningText.innerText = 'Please enter your credentials.';
        
    }
    
    else if (inputUserName.value === userName && inputPassword.value === userPassword){
        warningText.innerText = 'Successfully Working!';
        window.location.href = 'bank-inside.html';
    }
    else{
        warningText.innerText = 'Something is missing!';
    }
    
}


