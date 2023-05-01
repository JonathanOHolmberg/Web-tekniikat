const messageListBoys = document.getElementById('messageListBoys');

function getAndDisplayTopFiveBoys() {
  const messagesBoys = JSON.parse(localStorage.getItem('messagesBoys')) || [];
  const latestMessagesBoys = messagesBoys.slice(-3).reverse(); // Get the latest 3 messages and reverse the order
  messageListBoys.innerHTML = '';
  latestMessagesBoys.forEach(messageDataBoys => {
    const { name, message, dateTime, important } = messageDataBoys;
    const listItemBoys = document.createElement('li');
    listItemBoys.className = 'list-group-boys-item';
    listItemBoys.textContent = `${name}: ${message} (${dateTime})`;
    listItemBoys.style.marginBottom = "4px";
    if (important) {
      listItemBoys.style.fontWeight = 'bold';
    }
    messageListBoys.appendChild(listItemBoys);
  });
}

getAndDisplayTopFiveBoys();

setInterval(() => {
  getAndDisplayTopFiveBoys();
}, 2000);

window.addEventListener('load', getAndDisplayTopFiveBoys);