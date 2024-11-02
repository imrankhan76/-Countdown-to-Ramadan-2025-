

var ramadanDate = new Date('Feb 28, 2025');

function updateCountdown() {
    const todayDate = new Date();
    const differenceDate = ramadanDate.getTime() - todayDate.getTime();

    const totalDays = Math.floor(differenceDate / (1000 * 60 * 60 * 24));
    const months =  Math.floor(differenceDate / (1000 * 60 * 60 * 24*30));
    const hours = Math.floor(differenceDate / (1000 * 60 * 60 ))

    document.getElementById('days').innerHTML = `<span>${totalDays}</span>`;
    document.getElementById('hours').innerHTML = `<span>${hours}</span>`;
    document.getElementById('months').innerHTML = `<span>${months}</span>`;
}

setInterval(updateCountdown, 60000);
updateCountdown(); 
