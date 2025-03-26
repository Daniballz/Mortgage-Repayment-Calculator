const btn = document.querySelector(".mg-btn");

//Adding an event listener to the "calculate" button
btn.addEventListener('click', (e) => {
    //Prevent default behaviour
    e.preventDefault();

    //Getting the various input fields needed and the button
    const amt = document.getElementById("mg-amt").value;
    const years = document.getElementById("mg-term").value;
    const interest = document.getElementById("mg-rate").value;
    const selectedType = document.querySelector("input[name='option']:checked");  
    const mthPayment = document.querySelector(".mth-repayment");
    const totPayment = document.querySelector(".total-repayment");
    const emptyDiv = document.querySelector(".empty");
    const resultsDiv = document.querySelector(".results");

    console.log(selectedType.value);
    //Changing the view of the output from "empty" to "results"
    if(!(amt === "" && years === "" && interest === "" && selectedType.value === "")){
        emptyDiv.style.display = "none";
        resultsDiv.style.display = "block";
    }

    //Preparing values needed to calculate mortgage
    const rate = interest/12/100;
    const term = years*12;
    
    //Putting the different calculations for the two types of mortgage repayment
    if(selectedType){
        if(selectedType.value === "repayment"){
            const emi = (amt*rate*(1+rate)**term)/((1+rate)**term - 1);
            const fixedEmi = emi.toFixed(2);
            mthPayment.textContent = `£${fixedEmi}`;
            const totalPayment = emi*term;
            const fixedTotal = totalPayment.toFixed(2);
            totPayment.textContent = `£${fixedTotal}`;
        } else if(selectedType.value === "interest"){
            const emi = amt*rate;
            const fixedEmi = emi.toFixed(2);
            mthPayment.textContent = `£${fixedEmi}`;
            const totalPayment = emi*term;
            const fixedTotal = totalPayment.toFixed(2);
            totPayment.textContent = `£${fixedTotal}`;
        }
    }

    //console.log(emi);                 
}) 

//Configuring the "clear" button
const clearBtn = document.querySelector(".head a");
clearBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const amt = document.getElementById("mg-amt");
    const years = document.getElementById("mg-term");
    const interest = document.getElementById("mg-rate");
    const selectedType = document.querySelector("input[name='option']:checked");  

    amt.value = "";
    years.value = "";
    interest.value = "";
    selectedType.checked = false;
})
