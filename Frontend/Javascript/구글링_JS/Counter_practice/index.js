const number = document.getElementById("number");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");

increase.onclick = () => {
    const a = parseInt(number.innerText, 10);
    number.innerText = a + 1;
};

decrease.onclick = () => {
    const b = parseInt(number.innerText, 10);
    number.innerText = b - 1;
};