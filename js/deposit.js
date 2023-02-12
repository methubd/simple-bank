document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositInputElement = document.getElementById('deposit-input');
    const depositInputString = depositInputElement.value;
    const newDepositAmount = parseFloat(depositInputString);

    const depositCounterElement = document.getElementById('deposit-counter');
    const depositCounterString = depositCounterElement.innerText;
    const previousDepositAmount = parseFloat(depositCounterString);

    depositInputElement.value = '';
    
    if(isNaN(newDepositAmount)){
        alert('Please check your entry!');
        return;
    }
    
    // Adding on Deposit Counter
    depositCounterElement.innerText = previousDepositAmount + newDepositAmount;
    
    const balanceCounterElement = document.getElementById('balance-counter');
    const balanceCounterString = balanceCounterElement.innerText;
    const previousBalanceCounter = parseFloat(balanceCounterString);

    // Adding on Balance Counter
    balanceCounterElement.innerText = previousBalanceCounter + newDepositAmount;

    
})