// Simulated data (replace with API calls as needed)
const chats = [
    { id: 1, username: "seller1", lastMessage: "See you tomorrow!", avatar: "https://via.placeholder.com/50" },
    { id: 2, username: "seller2", lastMessage: "Let me know if you agree.", avatar: "https://via.placeholder.com/50" },
  ];
  
  const messages = [
    { sender: "buyer", text: "Hi, is this available?" },
    { sender: "seller", text: "Yes, it is still available." },
    { sender: "buyer", text: "Can you ship it?" },
    { sender: "seller", text: "Sure, shipping is possible!" },
  ];

//   fetch("https://example.com/api/chats")
//   .then((response) => response.json())
//   .then((data) => {
//     chats = data; // Assuming API returns chat list
//     populateChatList();
//   });

  
  // Populate the chat list
  function populateChatList() {
    const chatList = document.getElementById("chat-list");
    chatList.innerHTML = "";
    chats.forEach((chat) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img class="user-avatar" src="${chat.avatar}" alt="${chat.username}">
        <div>
          <p class="chat-username">${chat.username}</p>
          <p class="chat-status">${chat.lastMessage}</p>
        </div>
      `;
      li.addEventListener("click", () => openChat(chat));
      chatList.appendChild(li);
    });
  }
  
  // Populate messages in the chat window
  function populateMessages() {
    const chatMessages = document.getElementById("chat-messages");
    chatMessages.innerHTML = "";
    messages.forEach((msg) => {
      const div = document.createElement("div");
      div.classList.add("message", msg.sender);
      div.textContent = msg.text;
      chatMessages.appendChild(div);
    });
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll to bottom
  }
  
  // Open chat when a user is clicked
  function openChat(chat) {
    document.getElementById("chat-username").textContent = chat.username;
    populateMessages();
  }
  
  // Send message
  document.getElementById("send-message-btn").addEventListener("click", () => {
    const input = document.getElementById("message-input");
    if (input.value.trim()) {
      messages.push({ sender: "buyer", text: input.value });
      input.value = "";
      populateMessages();
    }
  });
  
  // Initialize
  document.addEventListener("DOMContentLoaded", () => {
    populateChatList();
    populateMessages();
  });
  