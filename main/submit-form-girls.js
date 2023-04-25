function submitForm(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const importantCheckbox = document.getElementById('importantCheckbox');
    const listItem = document.createElement('li');
    
    const name = nameInput.value;
    const message = messageInput.value;
    const important = importantCheckbox.checked;
    const dateTime = new Date().toLocaleString();

    listItem.className = 'list-group-item-men';
    listItem.textContent = `${name}: ${message} (${dateTime})`;


    function checkInputFields() {
      if (name.trim() === '' || message.trim() === '') {
        alert('Please enter both a name and a message.');
        return;
      }
    }
    checkInputFields()

    function checkImportant() {
      if (important) {
        listItem.style.fontWeight = 'bold';
      }
    }
    checkImportant()


    document.getElementById('messageListMen').appendChild(listItem);

    const messageDataMen = {
        name: name,
        message: message,
        dateTime: dateTime,
        important: important
    };

    const messagesMen = JSON.parse(localStorage.getItem('messagesMen')) || []; // Get array or create new
    messagesMen.push(messageData); // Add message
    localStorage.setItem('messages', JSON.stringify(messages)); // Save array


    function resetFormFields() {
    nameInput.value = '';
    messageInput.value = '';
    importantCheckbox.checked = false;
    }
    resetFormFields()
    getAndDisplayMessages()
}



document.getElementById('myForm').addEventListener('submit', submitForm);
window.addEventListener('load', getAndDisplayMessagesMen);