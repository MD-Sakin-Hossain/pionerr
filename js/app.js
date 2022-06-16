const inputEmail = document.getElementById("inputEmail")
const inputPass = document.getElementById("inputPass")





const loginBtn = document.getElementById("login");

loginBtn.addEventListener("click", () => {

    let storeEmail = inputEmail.value;
    let storePass = inputPass.value;
    if (storeEmail || storePass == true) {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";

    }

    if (storeEmail || storePass == false) {

        return alert("Sorry bro 😎")

    }
});


const currentDeposit = document.getElementById("currentDeposit");
const depositAmount = document.getElementById("depositAmount");
const addDeposit = document.getElementById("addDeposit");

addDeposit.addEventListener("click", () => {
    let amount = depositAmount.value;
    amount = parseInt(amount)
    let currentAmount = currentDeposit.innerText;
    currentAmount = parseInt(currentAmount)
    let amountIncrease = currentDeposit.innerText = amount + currentAmount;
    let currentBalance = document.getElementById("currentBalance");
    let nam = currentBalance.innerText
    priviousBalance = parseInt(nam)
    depositAmount.value = "";
    currentBalance.innerText = priviousBalance + amount;
    if (currentDeposit.innerText === "NaN") {
        currentDeposit.innerText = currentAmount;
    } if (currentBalance.innerText === "NaN") {
        currentBalance.innerText = nam;
    }
})



const currentWithdraw = document.getElementById("currentWithdraw");
const withdrawAmount = document.getElementById("withdrawAmount");
const addWithdraw = document.getElementById("addWithdraw");

addWithdraw.addEventListener("click", () => {
    let amount = withdrawAmount.value;
    amount = parseInt(amount)
    let currentAmount = currentWithdraw.innerText;
    currentAmount = parseInt(currentAmount)
    currentWithdraw.innerText = currentAmount + amount;
    let currentBalance = document.getElementById("currentBalance");
    let nam = currentBalance.innerText
    priviousBalance = parseInt(nam)

    currentBalance.innerText = priviousBalance - amount;
    withdrawAmount.value = "";

    if (currentWithdraw.innerText === "NaN") {
        currentWithdraw.innerText = currentAmount;
    } if (currentBalance.innerText === "NaN") {
        currentBalance.innerText = nam;
    }
})

