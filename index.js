const depositBtn = document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositInputField = document.getElementById('deposite-input-field');
    const newDepositAmountString = depositInputField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    depositInputField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please input a number');
        return;
    }
    
    const depositTotalElement = document.getElementById('deposite-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);

    const currentDepositTotal = newDepositAmount + depositTotal;
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    const currentBalanceTotal = balanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})

// Withdraw Field

const withdrawBtn = document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInputField = document.getElementById('withdraw-input-field');
    const newWithdrawAmountString = withdrawInputField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    withdrawInputField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please input a number');
        return;
    }
    
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const withdrawTotalString = withdrawTotalElement.innerText;
    const withdrawTotal = parseFloat(withdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    if(newWithdrawAmount > balanceTotal){
        alert('Baap Er Bank A Ato Taka Nai');
        return;
    };

    const currentWithdrawTotal = newWithdrawAmount + withdrawTotal;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const currentBalanceTotal = balanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
})