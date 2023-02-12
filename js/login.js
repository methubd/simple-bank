document.getElementById('btnLogin').addEventListener('click', function(){
    const userName = document.getElementById('inputUserName');
    const userPassword = document.getElementById('inputPassword');
    const warning = document.getElementById('warnings');

    if (userName.value === '' && userPassword.value === ''){
        warning.innerText = 'Type your Credential!';
    }

    else if (userName.value === 'methu' && userPassword.value === '1234'){
        window.location.href = 'bank-inside.html';
        warning.innerText = 'Correct!';
    }    
    else {
        warning.innerText = 'Invalid'
    }
})