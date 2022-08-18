document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withDrawField = document.getElementById('withdraw-field');
    const newWithdrawAmmountString = withDrawField.value
    const newWithdrawAmmount = parseFloat(newWithdrawAmmountString);

    //new step 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithDrawTotalString = withdrawTotalElement.innerText;
    const previousWithDrawTotal = parseFloat(previousWithDrawTotalString);






    //balance connection 

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBlanaceTotalString = balanceTotalElement.innerText;
    const previousBlanaceTotal = parseFloat(previousBlanaceTotalString);

    //clear field 
    withDrawField.value = '';

    // checking balance is there 

    if (newWithdrawAmmount > previousBlanaceTotal) {
        alert("eto taka nai , paknami koris nah !")
        return;
    }

    //step 
    const currentWithDrawTotal = previousWithDrawTotal + newWithdrawAmmount;
    withdrawTotalElement.innerText = currentWithDrawTotal;

    ///new balance 
    const newBalanceTotal = previousBlanaceTotal - newWithdrawAmmount;
    balanceTotalElement.innerText = newBalanceTotal;



})