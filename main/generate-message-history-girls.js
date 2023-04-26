const messageListGirls = document.getElementById('messageListGirls');

function getAndDisplayMessagesGirls() {
    const messagesGirls = JSON.parse(localStorage.getItem('messagesGirls')) || []; // Get array or create new
    messageListGirls.innerHTML = '';
    messagesGirls.reverse().forEach(messageDataGirls => { // reverse the order of the list to show latest first
      const { name, message, dateTime, important } = messageDataGirls;
      const listItemGirls = document.createElement('li');
      listItemGirls.className = 'list-group-girls-item';
      listItemGirls.textContent = `${name}: ${message} (${dateTime})`;
      listItemGirls.style.marginBottom = "4px"
      if (important) {
        listItemGirls.style.fontWeight = 'bold';
      }
      messageListGirls.appendChild(listItemGirls);
    });
}

getAndDisplayMessagesGirls()

setInterval(() => {
  getAndDisplayMessagesGirls()
}, 2000); // Update the list every 2 seconds
  
window.addEventListener('load', getAndDisplayMessagesGirls);