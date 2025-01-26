const API_URL = "https://fedassgn2chatdb-5238.restdb.io/rest/chats  "; 
const API_KEY = "67965019ed070e192c3bbb9b"; 

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
  
  async function populateMessages(chatId) {
    const chatMessages = document.querySelector(".chat-messages");
    chatMessages.innerHTML = "";
  
    try {
      const response = await fetch(`${API_URL}?q={"chat_id": "${chatId}"}`, {
        headers: { "x-apikey": API_KEY },
      });
      const data = await response.json();
  
      data.forEach((msg) => {
        const div = document.createElement("div");
        div.classList.add("message", msg.sender === "buyer" ? "message-buyer" : "message-seller");
        div.textContent = msg.message;
        chatMessages.appendChild(div);
      });
  
      chatMessages.scrollTop = chatMessages.scrollHeight;
    } catch (error) {
      console.error("Failed to load messages:", error);
    }
  }  
  
  function openChat(chat) {
    document.querySelector(".seller-details strong").textContent = chat.username;
    populateMessages(chat.id); // get msgs for selected chat
  }
  
  
  document.querySelector(".send-button").addEventListener("click", async () => {
    const input = document.querySelector(".message-input");
    const messageText = input.value.trim();
  
    if (messageText) {
      try {
        // save msg to db
        const messageData = {
          chat_id: "chat-id", 
          message: messageText,
          sender: "buyer",
          timestamp: new Date().toISOString(),
        };
  
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-apikey": API_KEY,
          },
          body: JSON.stringify(messageData),
        });
  
        if (response.ok) {
          input.value = "";
          populateMessages("example-chat-id"); // for reloading msgs
        } else {
          console.error("Failed to send message:", response.statusText);
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  });  
  
  document.addEventListener("DOMContentLoaded", () => {
    populateChatList();
    populateMessages();
  });
  