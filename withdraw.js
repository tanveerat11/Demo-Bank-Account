document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString= withdrawField.value;
    
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);


    // step-4:
    const withTotal= document.getElementById('withdraw-total');
    const withTotalString = withTotal.innerText;
    const withTotalUpdate = parseFloat(withTotalString);

    const withNewBalance = newWithdrawAmount +  withTotalUpdate ;
    withTotal.innerText = withNewBalance;

    // step-5:
       const newbalanceupdate = document.getElementById('balance-total');
       const newbalanceString = newbalanceupdate.innerText;
       const newbalanceupdateAmount = parseFloat(newbalanceString);

       const newbalance = newbalanceupdateAmount - newWithdrawAmount;
       newbalanceupdate.innerText=newbalance;
    
   

    // step-:
    withdrawField.value ='';

    

})