
// step-1:
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step-2:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString= depositField.value;
    
    const newDepositAmount = parseFloat(newDepositAmountString);


    // step-4:
    const depTotal= document.getElementById('deposit-total');
    const depTotalString = depTotal.innerText;
    const depTotalUpdate = parseFloat(depTotalString);

    const updateNewDepositUpdateAmount = newDepositAmount + depTotalUpdate;
    depTotal.innerText = updateNewDepositUpdateAmount;

    const balancePreview = document.getElementById('balance-total');
    const balanceTotalString = balancePreview.innerText;
    const balanceTotalUpdateAmount = parseFloat(balanceTotalString);


    const newBalanceUpdate = balanceTotalUpdateAmount+newDepositAmount  ;
    balancePreview.innerText =newBalanceUpdate;

    // step-:
    depositField.value ='';
   

    

})

