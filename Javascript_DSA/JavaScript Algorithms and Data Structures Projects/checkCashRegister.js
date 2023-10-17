function checkCashRegister(price, cash, cid) {

    const currencies = {
        "ONE HUNDRED": 100,
        "TWENTY": 20,
        "TEN": 10,
        "FIVE": 5,
        "ONE": 1,
        "QUARTER": 0.25,
        "DIME": 0.10,
        "NICKEL": 0.05,
        "PENNY": 0.01
    };

    let change = cash - price;

    let moneyInDrawer = totalCidMoney(cid);

    // do i have enough money to give change back?
    if (moneyInDrawer < change) {

        return respond("INSUFFICIENT_FUNDS", []);
    }
    //got to determine whether i have exact change or i have options
    else {
        if (doWeHaveExactChange(cid, change)) {
            return respond("CLOSED", cid);
        }
        else {
            //let's figure out how to give the change
            const canWeReturnChangeAndHow = determineHowToPay(change, currencies, cid);

            if (canWeReturnChangeAndHow.canGiveChange) {
                return respond("OPEN", canWeReturnChangeAndHow.changeArray);
            }
            else {
                return respond("INSUFFICIENT_FUNDS", []);
            }
        }
    }
}

function determineHowToPay(change, currencies, cid) {
    let payLikeThis = new Map();
    let canGiveChange = false;

    for (const currency in currencies) {
        //first i have to determine which value i can use to pay that change

        if (change >= currencies[currency]) {
            //once i found which kind of value i can use to pay for that change
            //i have to determine if i have enough of that value to pay for that change
            let howMuchOfThisCurrency = getChangeFor(currency, cid)[1];

            payLikeThis.set(currency, 0);
            
            while (howMuchOfThisCurrency > 0 && change >= currencies[currency]) {
                payLikeThis.set(currency, payLikeThis.get(currency) + currencies[currency]);
                howMuchOfThisCurrency -= currencies[currency];
                howMuchOfThisCurrency = properlyRound(howMuchOfThisCurrency);
                change -= currencies[currency];
                change = properlyRound(change);
                if (change == 0) {
                    canGiveChange = true;
                    break;
                }
            }
        }
    }

    return { canGiveChange: canGiveChange, changeArray: Array.from(payLikeThis) }
}
function respond(message, change) {
    return { "status": message, "change": change };
}

function doWeHaveExactChange(cid, howMuch) {
    return cid.filter(currency => currency[1] == howMuch)[0];
}

function totalCidMoney(cid) {

    let totalMoneyInDrawer = cid.reduce((accumulator, currentValue) => {
        accumulator += currentValue[1];
        return accumulator;
    }, 0);
    return properlyRound(totalMoneyInDrawer);
}

function properlyRound(number) {
    return Number((number * 100 / 100).toFixed(2));

}
function getChangeFor(value, cid) {
    return cid.filter(currency => currency[0] === value)[0];
}
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));