function gebi(a) {
    return document.getElementById(a);
}

function time() {
    let now = new Date();
    let options = { hour: 'numeric', minute: 'numeric'};
    gebi("time").innerHTML = now.toLocaleTimeString("en-US", options);
    setTimeout(time, 5000)
}

function date() {
    let options = { day: 'numeric', month: 'long', year: 'numeric'};
    let now = new Date();
    gebi("date").innerHTML = now.toLocaleDateString("en-US", options);
}

function randChoice( arr ) {
    return arr[Math.floor(Math.random()*arr.length)];
}

function main() {
    time();
    date();
}