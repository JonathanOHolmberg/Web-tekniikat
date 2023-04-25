const messageListGirls = document.getElementById('messageListGirls');

function getAndDisplayTopFiveGirls() {
  const messagesGirls = JSON.parse(localStorage.getItem('messagesGirls')) || [];
  const latestMessagesGirls = messagesGirls.slice(-5).reverse(); // Get the latest 5 messages and reverse the order
  messageListGirls.innerHTML = '';
  latestMessagesGirls.forEach(messageDataGirls => {
    const { name, message, dateTime, important } = messageDataGirls;
    const listItemGirls = document.createElement('li');
    listItemGirls.className = 'list-group-girls-item';
    listItemGirls.textContent = `${name}: ${message} (${dateTime})`;
    if (important) {
      listItemGirls.style.fontWeight = 'bold';
    }
    messageListGirls.appendChild(listItemGirls);
  });
}

getAndDisplayTopFiveGirls();

setInterval(() => {
  getAndDisplayTopFiveGirls();
}, 2000);

window.addEventListener('load', getAndDisplayTopFiveGirls);