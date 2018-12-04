const description = document.querySelector(".description");
const value = document.querySelector(".value");
const selector = document.querySelector(".selector");
const button = document.querySelector(".button");
const incomeList = document.querySelector(".incomelist");
const expensesList = document.querySelector(".expenseslist");
const budgetIncomeValue = document.querySelector(".budgetIncomeValue")
const budgetValue = document.querySelector(".budgetValue")
const budgetExpensesValue = document.querySelector(".budgetExpensesValue")
const budgetExpensesPercentage = document.querySelector(".budgetExpensesPercentage")
const budgetForm = document.querySelector(".budget-form");
let expensesCalc = 0;
let incomeCalc = 0;
button.addEventListener("click", function(){
    if(selector.selectedIndex === 0 && description.value != "" && value.value != ""){
        const ul = document.createElement('ul')
        ul.style.listStyleType = "none";
        incomeList.appendChild(ul);
        var li = document.createElement('li');
        ul.appendChild(li);
        const element = document.createElement('span')
        const element1 = document.createElement('span')
        element.textContent = description.value;
        element1.textContent = value.value;
        li.appendChild(element);
        li.appendChild(element1);
        element1.style.margin = "150px";
        element.style.fontSize = "30px";
        element1.style.fontSize = "30px";
        element.style.color = "purple";
        element1.style.color = "purple";
        incomeCalc = incomeCalc + Number(value.value)
        budgetIncomeValue.textContent = ` + ${incomeCalc}`;


        }else if(selector.selectedIndex === 1 && description.value != "" && value.value != ""){
            const ul = document.createElement('ul')
            ul.style.listStyleType = "none";
            expensesList.appendChild(ul);
            var li = document.createElement('li');
            ul.appendChild(li);
            const element = document.createElement('span')
            const element1 = document.createElement('span')
            const element2 = document.createElement('span')
            const element3 = document.createElement('span')
            var button = document.createElement("button");
            button.textContent = "X"
            button.style.display = "none";
            element3.appendChild(button);
            element.textContent = description.value;
            element1.textContent = value.value;
            li.appendChild(element);
            li.appendChild(element1);
            li.appendChild(element2);
            li.appendChild(element3);
            element1.style.margin = "150px";
            element2.style.marginLeft = "-130px";
            element.style.fontSize = "30px";
            element1.style.fontSize = "30px";
            element2.style.fontSize = "20px";
            element.style.color = "purple";
            element1.style.color = "purple";
            element2.style.color = "purple";
            expensesCalc = expensesCalc + Number(value.value)
            budgetExpensesValue.textContent = ` - ${expensesCalc}`;
            element2.textContent = `${parseFloat((expensesCalc/incomeCalc)*100).toFixed(1)} %`;
        
    
    }
    budgetValue.textContent = incomeCalc - expensesCalc;
    budgetExpensesPercentage.textContent = `${parseFloat((expensesCalc/incomeCalc)*100).toFixed(1)} %`;
    description.value = "";
    value.value = "";

})



