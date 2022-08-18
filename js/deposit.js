document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalStrng = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalStrng);


    const currentDepositTotal = previousDepositTotal + newDepositAmmount;

    depositTotalElement.innerText = currentDepositTotal;

    console.log(currentDepositTotal);


    // total balance change
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBlanaceTotalString = balanceTotalElement.innerText;
    const previousBlanaceTotal = parseFloat(previousBlanaceTotalString);


    // calculate current total balance 
    const curentBalanceTotal = previousBlanaceTotal + newDepositAmmount;

    balanceTotalElement.innerText = curentBalanceTotal;

    //clearing deposit field 

    depositField.value = '';

})