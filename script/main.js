// First Class
document.getElementById('first-class-decrement').addEventListener('click', function () {
    handleTicketChange('first-class', false);
});

document.getElementById('first-class-increment').addEventListener('click', function () {
    handleTicketChange('first-class', true);
});


// Economy Class
document.getElementById('economy-decrement').addEventListener('click', function () {
    handleTicketChange('economy', false);
});

document.getElementById('economy-increment').addEventListener('click', function () {
    handleTicketChange('economy', true);
});


function handleTicketChange(ticketType, isIncrease) {
    const ticketInput = document.getElementById(ticketType + '-input');
    const ticketCount = parseInt(ticketInput.value) || 0;
    let ticketCountNew = ticketCount;
    if (isIncrease == true) {
        ticketCountNew = ticketCount + 1;
    } else if (isIncrease == false && ticketCount > 0) {
        ticketCountNew = ticketCount - 1;
    }

    ticketInput.value = ticketCountNew;

    calculateTotal();
}

// Calculate
function calculateTotal() {
    const firstClassInput = document.getElementById('first-class-input');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economy-input');
    const economyCount = parseInt(economyInput.value);

    let firstClassTotal = 0;
    let economyTotal = 0;
    if (firstClassCount < 0) {
        alert('Input must be an integer.');
    } else {
        firstClassTotal = 150 * firstClassCount || 0;
    }

    if (economyCount < 0) {

    } else {
        economyTotal = 100 * economyCount || 0;
    }


    let subtotal = firstClassTotal + economyTotal;
    document.getElementById('subtotal').innerText = '$' + subtotal.toLocaleString('en');

    let vat = Math.round(subtotal * .10);
    document.getElementById('vat').innerText = '$' + vat.toLocaleString('en');

    let total = subtotal + vat;
    document.getElementById('total').innerText = '$' + total.toLocaleString('en');
}


// Calculate on change input
function calculateOnChange(ticketType) {
    document.getElementById(ticketType + '-input').addEventListener('change', function () {
        calculateTotal();
    });
}

calculateOnChange('first-class');
calculateOnChange('economy');



// Submit Button Action
document.getElementById('submit-btn').addEventListener('click', function () {
    const flyingForm = document.getElementById('flying-from').value;
    const flyingTo = document.getElementById('flying-to').value;
    const departureDate = document.getElementById('departure').value;
    const returnDate = document.getElementById('return').value;

    const firstClassInput = document.getElementById('first-class-input');
    const firstClassCount = parseInt(firstClassInput.value);

    const economyInput = document.getElementById('economy-input');
    const economyCount = parseInt(economyInput.value);

    if (firstClassCount < 0 || economyCount < 0) {
        alert('Number input must be an integer.')
    } else if ((flyingForm && flyingTo && departureDate && returnDate) && (firstClassCount || economyCount)) {
        document.getElementById('booking-form').style.display = 'none';
        document.getElementById('success-feedback').style.display = 'block';
    } else {
        alert("All input required!");
    }
});


// rest Button Action
document.getElementById('reset-btn').addEventListener('click', function () {
    document.getElementById('subtotal').innerText = '$0';
    document.getElementById('vat').innerText = '$0';
    document.getElementById('total').innerText = '$0';
});