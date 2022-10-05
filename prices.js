const PulseraRoja = 8.00;
const SalesTax = 1.0825;



function salePulseraRoja(numOfPulseras) {
    //Send http request
    var salesprice;
    if (numOfPulseras>3)console.log(salesprice =numOfPulseras*SalesTax*PulseraRoja);

    else console.log('wayy to many');
}

module.exports= salePulseraRoja;