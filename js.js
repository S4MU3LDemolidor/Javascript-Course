function randomNumber() {
    let maxInput = parseInt(document.getElementById('idInput1').value);
    let minInput = parseInt(document.getElementById('idInput2').value);

    let max = maxInput ? parseInt(maxInput) : 100;
    let min = minInput ? parseInt(minInput) : 0;

    if (max <= min) {
        alert("Max must be greater than min");
        return;
    }

    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('numberRan').innerHTML = randomNum;
}

function resetRandom() {
    document.getElementById('numberRan').innerHTML = 0;
}
