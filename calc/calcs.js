
const SAT = 100000000;

// let entries = [

//     { price: 11409.5, size: 1 },
//     // { price: 11410.0, size: 1 },
//     // { price: 11410.5, size: 999 },
//     // { price: 11411.0, size: 1 },
//     // { price: 11411.5, size: 1 }

// ];


// ByBit //////////////////////////////////////////////////////////////////////////////////

function bybit_avg( entries ) {

    if ( !entries.length ) return 0;

    let total_contracts = entries.reduce( (a,c) => a + c.size, 0 );

    // Total satoshi cost for each entry * its' size
    let total_cost = entries.reduce( (a,c) => a + ( c.size / c.price ), 0 );

    return Number( (total_contracts / total_cost).toFixed(2) );

}

// Deribit /////////////////////////////////////////////////////////////////////////////////

// Essentially equivalent to ByBit's but included the rearranged working for completeness' sake

function deribit_avg( entries ) {

    let total_cost = entries.reduce( (a,c) => a + ( c.size / c.price ), 0 );

    // (size / price) / total_cost * price 
    return Number( (entries.reduce( (a,c) => a + ( c.size / c.price ) / total_cost * c.price , 0 )).toFixed(2) );

}


// BitMEX ....whew lad /////////////////////////////////////////////////////////////////////


function bitmex_sat_cost_at_price( price ) {
    let I = 1 / price;
    return Math.floor( I * SAT) / SAT;   
}

function bitmex_precise_cost_at_price( price ) {
    return  1 / price;    
}


function bitmex_avg( entries ) {

    if ( !entries.length ) return 0;

    // If only 1 entry @ price, then equation is skipped (confirmed by BitMEX support)
    if ( entries.length == 1 ) return entries[0].price;

    if ( entries.every( (e, i, arr) => e.price === arr[0].price ) ) {

        console.log('all entry prices identical');

        return entries[0].price;

    }

    let sum = 0;

    // Algorithm for calculating BitMEX avg entry price
    // confirmed by BitMEX support

    let Total = entries.reduce( (a,c) => a + c.size, 0 );

    for ( let e of entries ) {

        let trunc = bitmex_sat_cost_at_price( e.price );
        sum += trunc * e.size;

        let real = bitmex_precise_cost_at_price( e.price ); // should be using this... 
    }

    let precise_cost_average = sum / Total;
    let sat_cost_average = Math.floor((sum/Total) * SAT) / SAT;

    let p1 = (1 / sat_cost_average ).toFixed(2)
    let p2 = round_to_tick( 0.05, p1 )
    let p3 = round_to_tick( 0.5, p1 );

    let ip3 = 1 / p3, ip2 = 1 / p2;
    let actual_average_entry = p1;

    if ( ip3 == precise_cost_average ) 
        actual_average_entry = p3;
    else if ( ip2 == precise_cost_average )
        actual_average_entry = p2;

    return Number( actual_average_entry );

}

// rounds to any given fraction
function round_to_tick( tick, value, dp=2 )  {
    return Number((tick * Math.round( value/tick )).toFixed( dp ));
}

// let price1 = bitmex_avg( entries );
// let price2 = bybit_avg( entries );
// let price3 = deribit_avg( entries );

// console.log( price1 )
// console.log( price2 )
// console.log( price3 )