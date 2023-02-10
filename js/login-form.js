const loginButton = document.getElementById ('btnLogin');
loginButton.addEventListener('click', functionOne);
const warningText = document.getElementById('warnings');
warningText.style.fontSize = '10px';
warningText.style.color = 'white';

const inputUserName = document.getElementById('inputUserName');
const inputPassword = document.getElementById ('inputPassword');

const userName = 'methu';
const userPassword = '5252';

function functionOne(){
    if (inputUserName.value === userName || inputPassword === userPassword){
        warningText.innerText = 'Successfully Working!';
    }
    else{
        warningText.innerText = 'Something is missing!';
    }
    
}


