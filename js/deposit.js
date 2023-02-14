document.getElementById('btn-deposit').addEventListener('click', function(){
    const NewDepositAmount = getValueFromInputById('deposit-amount');
    const PreviousDepositAmount = getValueFromSpanById('deposit-counter');
    const alerts = document.getElementById('alerts');
    const alertsContainer = document.getElementById('alertContainer');
    const btnSumbitNID = document.getElementById('btn-submit-nid');
    
    if(NewDepositAmount >= 5000){
        alerts.innerText = 'Please submit your NID, Its a Government Term.';
        alerts.style.backgroundColor = 'green';
        alerts.style.color = 'white';
        alerts.style.borderRadius = '10px';
        btnSumbitNID.removeAttribute('hidden');
        return;
    }

    else if(isNaN(NewDepositAmount)){
        alerts.innerText = 'You cant submit a empty amount.'
        alerts.style.backgroundColor = 'red';
        alerts.style.color = 'white';
        alerts.style.borderRadius = '10px';
        return;
    }
    else{
        alerts.innerText = 'Thank you for banking with us.'
    }

    const totalDepositAmount = PreviousDepositAmount + NewDepositAmount;    
    setAnewValue('deposit-counter', totalDepositAmount);

    const previousBalance = getValueFromSpanById ('balance-counter');
    const currentBalance = NewDepositAmount + previousBalance;
    setAnewValue('balance-counter', currentBalance);
})