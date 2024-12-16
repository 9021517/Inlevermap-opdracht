const transactions = [
    { id: 1, type: 'inkomend', datum: '2024-11-01', bedrag: 150.00 },
    { id: 2, type: 'uitgaand', datum: '2024-11-03', bedrag: -50.00 },
    { id: 3, type: 'inkomend', datum: '2024-11-05', bedrag: 200.00 },
    { id: 4, type: 'uitgaand', datum: '2024-11-10', bedrag: -30.00 }
  ];
  
  const transactionList = document.getElementById('transactionList');
  const typeFilter = document.getElementById('typeFilter');
  const dateFilter = document.getElementById('dateFilter');
  const filterButton = document.getElementById('filterButton');
  

  function renderTransactions(filteredTransactions) {
    transactionList.innerHTML = ''; // Leegmaken
    if (filteredTransactions.length === 0) {
      transactionList.innerHTML = '<p>Geen transacties gevonden.</p>';
      return;
    }
    
    filteredTransactions.forEach(transaction => {
      const transactionDiv = document.createElement('div');
      transactionDiv.classList.add('transaction');
  
      const typeClass = transaction.type === 'inkomend' ? 'inkomend' : 'uitgaand';
      transactionDiv.innerHTML = `
        <p class="type ${typeClass}">Type: ${transaction.type}</p>
        <p>Datum: ${transaction.datum}</p>
        <p>Bedrag: €${transaction.bedrag.toFixed(2)}</p>
      `;
  
      transactionList.appendChild(transactionDiv);
    });
  }
  
  
  function filterTransactions() {
    const selectedType = typeFilter.value;
    const selectedDate = dateFilter.value;
  
    let filtered = transactions;
  
    if (selectedType !== 'alle') {
      filtered = filtered.filter(transaction => transaction.type === selectedType);
    }
  
    if (selectedDate) {
      filtered = filtered.filter(transaction => transaction.datum === selectedDate);
    }
  
    renderTransactions(filtered);
  }
  
  filterButton.addEventListener('click', filterTransactions);
  

  renderTransactions(transactions);
  