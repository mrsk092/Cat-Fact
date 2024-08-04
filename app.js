let url = "https://catfact.ninja/fact";
let btn = document.querySelector("#btn");
let display = document.querySelector("#display");
let isFetching = false; 

btn.addEventListener("click", callApi);

function callApi() {
    if (isFetching) return; 

    isFetching = true; 
    display.innerText = "Fetching fact..."; 

    fetch(url).then((res) => {
        return res.json();
    })
    .then((JSONdata) => {
        display.innerText = JSONdata.fact;
        isFetching = false; 
    })
    .catch(() => {
        display.innerText = "Something went wrong";
        isFetching = false; 
    });

    
    btn.disabled = true;
    setTimeout(() => {
        btn.disabled = false;
    }, 2000);
}
