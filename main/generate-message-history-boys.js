const messageListBoys = document.getElementById('messageListBoys');

function getAndDisplayMessagesBoys() {
    const messagesBoys = JSON.parse(localStorage.getItem('messagesBoys')) || []; // Get array or create new
    messageListBoys.innerHTML = '';
    messagesBoys.reverse().forEach(messageDataBoys => { // reverse the order of the list to show latest first
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

getAndDisplayMessagesBoys()

setInterval(() => {
  getAndDisplayMessagesBoys()
}, 2000); // Update the list every 2 seconds
  
window.addEventListener('load', getAndDisplayMessagesBoys);