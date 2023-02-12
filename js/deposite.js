document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-amount');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);

    if(isNaN (newDepositAmount)){
        alert ('Please enter a valid amount 123456');
        return;
    }
    
    const depositCounterData = document.getElementById('deposit-counter');
    const depositCounterString = depositCounterData.innerText;
    const previousDeposit = parseFloat(depositCounterString);

    depositCounterData.innerText = previousDeposit + newDepositAmount;

    const balanceCounterData = document.getElementById('balance-counter');
    const balanceCounterString = balanceCounterData.innerText;
    const previousBalanceCounter = parseFloat(balanceCounterString);

    balanceCounterData.innerText = newDepositAmount + previousBalanceCounter;

    depositField.value = '';

})