var sales = 0;
var prod = 0;
var dev = 0;
var mkt = 0;

var percent = [sales, prod, dev, mkt];

function Sales() {
    sales = sales + 10;
    percent = [sales, prod, dev, mkt];
    console.log(percent[0]);
}
function Prod() {
    prod = prod + 10;
    percent = [sales, prod, dev, mkt];
    console.log(percent[1]);
}
function Dev() {
    dev = dev + 10;
    percent = [sales, prod, dev, mkt];
    console.log(percent[2]);
}
function Mkt() {
    mkt = mkt + 10;
    percent = [sales, prod, dev, mkt];
    console.log(percent[3]);
}



function fazPost(url, body) {
    console.log("Body=", body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function () {
        console.log(this.responseText)
    }

    return request.responseText
}

function Cons() {
    event.preventDefault();
    url = "http://127.0.0.1:5500/resultado.html";

    console.log("Oi");

    body = {
        "vendas": sales,
        "produto": prod,
        "desenv": dev,
        "marketing": mkt
    }
    fazPost(url, body)
} 
