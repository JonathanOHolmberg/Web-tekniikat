const messageList = document.getElementById('messageList');

function getAndDisplayTopFive() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  const latestMessages = messages.slice(-5).reverse(); // Get the latest 5 messages and reverse the order
  messageList.innerHTML = '';
  latestMessages.forEach(messageData => {
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

getAndDisplayTopFive();

setInterval(() => {
  getAndDisplayTopFive();
}, 2000);

window.addEventListener('load', getAndDisplayTopFive);