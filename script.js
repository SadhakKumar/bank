const input = document.querySelector('input');
const withdraw = document.getElementById('withdraw');
const deposit = document.getElementById('deposit');
const balancediv = document.getElementById('balanceDiv');
const balanceH = document.getElementById('balanceH');

let balance = parseFloat(balanceH.innerHTML);

function withdrawAmount(amount) {
    if (balance - amount < 0) {
        console.log('insufficient bank balance');
        return;
    }
    balance -= amount;
    console.log(balance);
    balanceH.innerHTML = `<span>${balance}</span>`;
}

function depositAmount(amount) {
    balance += amount;
    console.log(balance);
    balanceH.innerHTML = `<span>${balance}</span>`;
}

withdraw.onclick = () => withdrawAmount(Number(input.value));
deposit.onclick = () => depositAmount(Number(input.value));
