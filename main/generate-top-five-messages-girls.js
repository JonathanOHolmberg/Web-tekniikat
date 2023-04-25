const messageListMen = document.getElementById('messageList');

function getAndDisplayTopFiveMen() {
  const messagesMen = JSON.parse(localStorage.getItem('messages')) || [];
  const latestMessages = messages.slice(-5).reverse(); // Get the latest 5 messages and reverse the order
  messageListMen.innerHTML = '';
  latestMessages.forEach(messageData => {
    const { name, message, dateTime, important } = messageData;
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.textContent = `${name}: ${message} (${dateTime})`;
    if (important) {
      listItem.style.fontWeight = 'bold';
    }
    messageListMen.appendChild(listItem);
  });
}

getAndDisplayTopFiveMen();

setInterval(() => {
  getAndDisplayTopFiveMen();
}, 2000);

window.addEventListener('load', getAndDisplayTopFiveMen);