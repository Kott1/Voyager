document.addEventListener('DOMContentLoaded', function() {
    const data = JSON.parse(localStorage.getItem('data'));

    const option = document.querySelector(`.formInput option[value="${data.name}"]`);
    if (option) {
        option.selected = true;
        handleCurrencyChange()
    }

    localStorage.clear();
});

const info = {
    'paris': 1,
    'palermo': 2,
    'seoul': 3,
    'marseille': 4,
    'bangkok': 5,
    'varanasi': 6,
    'tokyo': 7,
    'francisco': 8,
    'tuscany': 9,
    'rio': 10,
    'cape': 11,
    'bali': 12
}

async function getEURrate() {
    const url = `https://api.exchangeratesapi.io/v1/latest?access_key=236c535c4a8a54076ec44f66c837810c`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data.rates; 
    } catch (error) {
        console.error('Помилка при отриманні даних з API', error);
        return null;
    }
}

async function handleCurrencyChange() {
    const destinationInputValue = document.getElementById('destinations').value;
    const peopleInputValue = Number(document.getElementById('people').value);
    const total = document.querySelector('.totalAmount');
    const currency = document.querySelector('.currencyBtn').value;
    let currencySymbol;
    const EURrates = await getEURrate();

    if (EURrates) {
        const convertedValue = (destinationInputValue === '' ? 1 : info[destinationInputValue]) * 
        (typeof peopleInputValue === 'number' ? peopleInputValue : 1) * 
        (currency === 'EUR' ? EURrates['EUR'] : EURrates['UAH']);

        if (currency == 'EUR') {
            currencySymbol = '€';
        } else {
            currencySymbol = '₴';
        }

        total.textContent = `Total Amount:${convertedValue}${currencySymbol}`;
    } else {
      console.log('error');
    }
}