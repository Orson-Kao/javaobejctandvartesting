let sanity =30;
let hasKey = false;


console.log(`sanity: ${sanity}%`)

document.getElementById("sane").textContent = `sanity: ${sanity}%`;

function loseSanity() {
    sanity -= 10;
    console.log(`sanity: ${sanity}%`);
    document.getElementById("sane").textContent = `sanity: ${sanity}%`;
}

if (document.getElementById("loseSanity")) {
    document.getElementById("loseSanity").addEventListener("click", loseSanity);
}
