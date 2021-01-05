

let entries = [];
let entries_el = document.getElementById('entries_el');

let exchange='bitmex';

const exchanges = {
    'bitmex': 'on BitMEX',
    'bybit': 'on ByBit',
    'deribit': 'on Deribit'
};

function addorder( ) {
    let q = document.getElementById('quantity_el').value;
    let p = document.getElementById('price_el').value;

    if ( q && p && !isNaN( q ) && !isNaN( p ) )
            addentry( Number(p), Number(q) );
 
}


function addentry(price, size) {
    entries_el = document.getElementById('entries_el');    

    entries.push({ price, size });
    // sort by price

    sync();
}

function setexchange( name ) {
    exchange = name;  
    sync();  
}

function sync() {
    
    let entries_el = document.getElementById('entries_el');

    entries_el.innerHTML = '';

    let str = '';
    

    for ( let t=0; t<entries.length; t++) {
        let e = entries[t];
        let link = `<a href='#' onclick='removeentry(${t})'>remove</a>`
        str += `<li class="list-group-item"><span>${e.size} @ ${e.price.toFixed(2)}</span>  <span style='margin-left: 50px'>[ ${link} ]</span></li>`;
    }

    entries_el.innerHTML = str;

    let x_el = document.getElementById('onexchange_el');
    x_el.innerHTML = exchanges[exchange];

    let jumbo = document.getElementById('jumbotext');

    let price = price_for_exchange( entries );

    jumbo.innerHTML = price.toLocaleString();

    let total_size = entries.reduce( (a,c) => a + c.size, 0 );

    let numcontracts_el = document.getElementById('numcontracts_el');

    numcontracts_el.innerHTML = `${total_size} USD size`


}

function price_for_exchange( entries ) {
    switch(exchange) {
        case 'bitmex':  return bitmex_avg( entries );
        case 'bybit':   return bybit_avg( entries );
        case 'deribit': return deribit_avg( entries );
    }
}

function removeentry( i ) {
    entries.splice(i, 1);
    sync();
}