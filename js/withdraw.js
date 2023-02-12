document.getElementById('btn-withdraw').addEventListener('click', function(){
    const amountField = document.getElementById('withdraw-amount');
    const amountFieldString = amountField.value;
    const withdrawAmount = parseFloat(amountFieldString);

    if(isNaN (withdrawAmount)){
        alert ('Please enter a amount to withdraw');
        return;
    }
    
    
    const balanceCounterData = document.getElementById('balance-counter');
    const balanceCounterString = balanceCounterData.innerText;
    const previousBalanceCounter = parseFloat(balanceCounterString);    

    if(previousBalanceCounter < withdrawAmount){
        alert('You dont have sufficient Balance.');
        return;
    }
    
    balanceCounterData.innerText = previousBalanceCounter - withdrawAmount;    

    const withdrawCounterElement = document.getElementById('withdraw-counter');
    const withdrawCounterString = withdrawCounterElement.innerText;
    const previousWithdrawl = parseFloat(withdrawCounterString);    
    withdrawCounterElement.innerText = withdrawAmount + previousWithdrawl;

    amountField.value = '';

})