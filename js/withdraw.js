document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withDrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withDrawField.value
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    //new step 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithDrawTotalString = withdrawTotalElement.innerText;
    const previousWithDrawTotal = parseFloat(previousWithDrawTotalString);



    //step 

    const currentWithDrawTotal = previousWithDrawTotal + newWithdrawAmmount;

    withdrawTotalElement.innerText = currentWithDrawTotal;



    //balance connection 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBlanaceTotalString = balanceTotalElement.innerText;
    const previousBlanaceTotal = parseFloat(previousBlanaceTotalString);



    ///new balance 

    const newBalanceTotal = previousBlanaceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;

    withDrawField.value = '';

})