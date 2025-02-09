document.addEventListener("DOMContentLoaded", () => {
  const messageInput = document.getElementById("message-input");
  const sendButton = document.getElementById("send-message-btn");
  const chatMessages = document.getElementById("chat-messages");
  const chatList = document.getElementById("chat-list");
  
  const chats = [
    { id: 1, username: "_ahmadh", lastMessage: "there is currently a bidding for it." },
    { id: 2, username: "tiifa", lastMessage: "yes! it is, will you be making an offer?" }
  ];

  function sendMessage() {
    const text = messageInput.value.trim();
    if (text) {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message", "message-buyer");
      messageDiv.textContent = text;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      messageInput.value = "";
    }
  }

  function populateChatList() {
    chatList.innerHTML = "";
    chats.forEach((chat) => {
      const li = document.createElement("li");
      li.classList.add("chat-item");
      li.innerHTML = `<p><strong>${chat.username}</strong></p><p>${chat.lastMessage}</p>`;
      li.addEventListener("click", () => openChat(chat));
      chatList.appendChild(li);
    });
  }

  function openChat(chat) {
    document.querySelector(".seller-details strong").textContent = chat.username;
    chatMessages.innerHTML = "<div class='message message-seller'>* Start a chat! *";
  }

  sendButton.addEventListener("click", sendMessage);
  messageInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  });

  populateChatList();
});