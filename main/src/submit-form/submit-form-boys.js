function submitFormBoys(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const importantCheckbox = document.getElementById('importantCheckbox');
    const listItemBoys = document.createElement('li');
    
    const name = nameInput.value;
    const message = messageInput.value;
    const important = importantCheckbox.checked;
    const dateTime = new Date().toLocaleString();

    listItemBoys.className = 'list-group-boys-item';
    listItemBoys.textContent = `${name}: ${message} (${dateTime})`;


    function checkInputFields() {
      if (name.trim() === '' || message.trim() === '') {
        alert('Please enter both a name and a message.');
        return;
      }
    }
    checkInputFields()

    function checkImportant() {
      if (important) {
        listItemBoys.style.fontWeight = 'bold';
      }
    }
    checkImportant()


    document.getElementById('messageListBoys').appendChild(listItemBoys);

    const messageDataBoys = {
        name: name,
        message: message,
        dateTime: dateTime,
        important: important
    };

    const messagesBoys = JSON.parse(localStorage.getItem('messagesBoys')) || []; // Get array or create new
    messagesBoys.push(messageDataBoys); // Add message
    localStorage.setItem('messagesBoys', JSON.stringify(messagesBoys)); // Save array


    function resetFormFields() {
    nameInput.value = '';
    messageInput.value = '';
    importantCheckbox.checked = false;
    }
    resetFormFields()
    getAndDisplayMessages()
}



document.getElementById('myFormBoys').addEventListener('submit', submitFormBoys);
window.addEventListener('load', getAndDisplayMessagesBoys);