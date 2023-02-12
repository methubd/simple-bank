document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawInputElement = document.getElementById('withdraw-input');
    const withdrawInputString = withdrawInputElement.value;
    const newWithdrawAmount = parseFloat(withdrawInputString);

    const withdrawCounterElement = document.getElementById('withdraw-counter');
    const withdrawCounterString = withdrawCounterElement.innerText;
    const previousWithdrawAmount = parseFloat(withdrawCounterString);

    withdrawInputElement.value = '';

    // If user will input anything wrong
    if(isNaN(newWithdrawAmount)){
        alert ('Please check your entry!')
        return;
    }

    const balanceCounterElement = document.getElementById('balance-counter');
    const balanceCounterString = balanceCounterElement.innerText;
    const previousBalanceAmount = parseFloat(balanceCounterString);
    
    if(newWithdrawAmount > previousBalanceAmount){
        alert('You dont have sufficient balance to withdraw!');
        return;
    }

    // Adding withdrawl record to counter
    withdrawCounterElement.innerText = previousWithdrawAmount + newWithdrawAmount;

    
    // Deducting withdrawl Amount from Balance
    balanceCounterElement.innerText = previousBalanceAmount - newWithdrawAmount;
})