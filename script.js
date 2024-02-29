const text = document.querySelector(".sec-text");
    
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Developer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Freelencer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Blogger";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Traveller";
    }, 12000);
}

textLoad();
setInterval(textLoad, 16000)