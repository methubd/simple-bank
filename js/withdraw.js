document.getElementById('btn-withdraw').addEventListener('click', function(){
    const alerts = document.getElementById('alerts');
    const NewWithdrawAmount = getValueFromInputById('withdraw-amount');
    const previousWithdrawls = getValueFromSpanById('withdraw-counter');
    const previousBalance = getValueFromSpanById('balance-counter');

    if (NewWithdrawAmount > previousBalance){
        alerts.innerText = 'You dont have sufficient balance';
        alerts.style.backgroundColor = 'red';
        alerts.style.color = 'white';
        alerts.style.borderRadius = '20px'
        return;
    }
    else if(isNaN(NewWithdrawAmount)){
        alerts.innerText = 'Please enter your amount!';
        alerts.style.backgroundColor = 'red';
        alerts.style.color = 'white';
        alerts.style.borderRadius = '20px';
        return;
    }
    else{
        alerts.innerText = 'Thank you for banking with us';
    }
    
    const totalWithdraw = previousWithdrawls + NewWithdrawAmount;
    setAnewValue('withdraw-counter', totalWithdraw);    
    const currentBalance = previousBalance - NewWithdrawAmount;
    setAnewValue ('balance-counter', currentBalance);
})