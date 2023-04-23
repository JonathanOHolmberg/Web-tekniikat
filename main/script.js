function submitForm(event) {
    event.preventDefault(); // Prevent form submission and page reload
    const nameInput = document.getElementById('nameInput');
    const messageInput = document.getElementById('messageInput');
    const importantCheckbox = document.getElementById('importantCheckbox');

    const name = nameInput.value;
    const message = messageInput.value;
    const important = importantCheckbox.checked;

    if (name.trim() === '' || message.trim() === '') {
        alert('Please enter a name and a message.'); // Show an alert if name or message is empty
        return;
    }

    const dateTime = new Date().toLocaleString(); // Get current date and time
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `${name}: ${message} (${dateTime})`;
    if (important) {
        listItem.style.fontWeight = 'bold'; // Apply bold style if important checkbox is checked
    }
    document.getElementById('messageList').appendChild(listItem);

    // Reset form inputs
    nameInput.value = '';
    messageInput.value = '';
    importantCheckbox.checked = false;
}

document.getElementById('myForm').addEventListener('submit', submitForm);