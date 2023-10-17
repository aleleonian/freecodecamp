function checkCashRegister(price, cash, cid) {

    let change = cash - price;

    let moneyInDrawer = totalCidMoney(cid);

    if (change < moneyInDrawer) {
        return respond("INSUFFICIENT_FUNDS", []);
    }
    return change;
}

function respond(message, change) {
    return { "status": message, "change": change };
}

function totalCidMoney(cid) {

    let totalMoneyInDrawer = cid.reduce((accumulator, currentValue) => {
        accumulator += currentValue[1];
        return accumulator;
    }, 0);

    return (totalMoneyInDrawer * 100 / 100).toFixed(2);

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));