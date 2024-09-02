let balance = 0;
let income = 0;
let expense = 0;

document.getElementById('add').addEventListener('click', function() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const type = document.getElementById('type').value;

    if (description && !isNaN(amount)) {
        const transactionList = document.getElementById('transactions');
        const transactionItem = document.createElement('li');
        transactionItem.classList.add(type + '-item');

        // Corrected string interpolation
        const transactionContent = `${description}: ₹${amount.toFixed(2)}`;
        transactionItem.innerHTML = `${transactionContent} <button class="delete-btn">x</button>`;

        transactionList.appendChild(transactionItem);

        updateValues(type, amount);

        transactionItem.querySelector('.delete-btn').addEventListener('click', function() {
            removeTransaction(transactionItem, type, amount);
        });

        resetInputs();
    }
});

function updateValues(type, amount) {
    if (type === 'income') {
        income += amount;
        balance += amount;
    } else if (type === 'expense') {
        expense += amount;
        balance -= amount;
    }

    updateDisplay();
}

function updateDisplay() {
    document.getElementById('balance').textContent = balance.toFixed(2);
    document.getElementById('income').textContent = income.toFixed(2);
    document.getElementById('expense').textContent = expense.toFixed(2);
}

function removeTransaction(item, type, amount) {
    if (type === 'income') {
        income -= amount;
        balance -= amount;
    } else if (type === 'expense') {
        expense -= amount;
        balance += amount;
    }

    item.remove();
    updateDisplay();
}

function resetInputs() {
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('type').value = 'income';
}
