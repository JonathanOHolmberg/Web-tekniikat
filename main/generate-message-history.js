const messageListMen = document.getElementById('messageListMen');

function getAndDisplayMessagesMen() {
    const messagesMen = JSON.parse(localStorage.getItem('messages')) || []; // Get array or create new
    messageListMen.innerHTML = '';
    messagesMen.reverse().forEach(messageDataMen => { // reverse the order of the list to show latest first
      const { name, message, dateTime, important } = messageDataMen;
      const listItem = document.createElement('li');
      listItem.className = 'list-group-item-men';
      listItem.textContent = `${name}: ${message} (${dateTime})`;
      if (important) {
        listItem.style.fontWeight = 'bold';
      }
      messageListMen.appendChild(listItem);
    });
}

getAndDisplayMessagesMen()

setInterval(() => {
  getAndDisplayMessagesMen()
}, 2000); // Update the list every 2 seconds
  
window.addEventListener('load', getAndDisplayMessagesMen);