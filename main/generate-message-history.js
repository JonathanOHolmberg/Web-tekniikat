const messageList = document.getElementById('messageList');

function getAndDisplayMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || []; // Get array or create new
    messageList.innerHTML = '';
    messages.reverse().forEach(messageData => { // reverse the order of the list to show latest first
      const { name, message, dateTime, important } = messageData;
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item';
      listItem.textContent = `${name}: ${message} (${dateTime})`;
      if (important) {
        listItem.style.fontWeight = 'bold';
      }
      messageList.appendChild(listItem);
    });
}

getAndDisplayMessages()

setInterval(() => {
  getAndDisplayMessages()
}, 2000); // Update the list every 2 seconds
  
window.addEventListener('load', getAndDisplayMessages);