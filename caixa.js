let family = {
   incomes:[200,300,500],
   expenses:[100,300,400],
}

function sum(family){
    let total= 0;

    for(let value of family){
        total+= value
    }

    return total
} 

 function calculateBalance(){
    const calculateIncomes= sum(family.incomes)
    const calculateExpenses= sum(family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total >=0
    let balanceText= "Negativo"
    if(itsOk ){
      balanceText="positivo"

    }

    console.log(`Seu saldo  é ${balanceText}: R$ ${total.toFixed(2)}`)
}
   calculateBalance()