function submitFormGirls(event) {
    event.preventDefault(); // Prevent form submission and page reload

    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const importantCheckbox = document.getElementById('importantCheckbox');
    const listItemGirls = document.createElement('li');
    
    const name = nameInput.value;
    const message = messageInput.value;
    const important = importantCheckbox.checked;
    const dateTime = new Date().toLocaleString();

    listItemGirls.className = 'list-group-girls-item';
    listItemGirls.textContent = `${name}: ${message} (${dateTime})`;


    function checkInputFields() {
      if (name.trim() === '' || message.trim() === '') {
        alert('Please enter both a name and a message.');
        return;
      }
    }
    checkInputFields()

    function checkImportant() {
      if (important) {
        listItemGirls.style.fontWeight = 'bold';
      }
    }
    checkImportant()


    document.getElementById('messageListGirls').appendChild(listItemGirls);

    const messageDataGirls = {
        name: name,
        message: message,
        dateTime: dateTime,
        important: important
    };

    const messagesGirls = JSON.parse(localStorage.getItem('messagesGirls')) || []; // Get array or create new
    messagesGirls.push(messageDataGirls); // Add message
    localStorage.setItem('messagesGirls', JSON.stringify(messagesGirls)); // Save array


    function resetFormFields() {
    nameInput.value = '';
    messageInput.value = '';
    importantCheckbox.checked = false;
    }
    resetFormFields()
    getAndDisplayMessagesGirls()
}



document.getElementById('myFormGirls').addEventListener('submit', submitFormGirls);
window.addEventListener('load', getAndDisplayMessagesGirls);