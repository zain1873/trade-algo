// import React, { useState } from "react";
// import "../DashboardSidebarComp/styles/ChatFeature.css";

// const ChatFeature = () => {
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       sender: "agent",
//       text: "Hello! Welcome to Valour Wealth. How can I assist you today?",
//       time: "14:16",
//     },
//   ]);
//   const [inputMessage, setInputMessage] = useState("");
//   const [isChatOpen, setIsChatOpen] = useState(false);

//   const handleSendMessage = () => {
//     if (inputMessage.trim() !== "") {
//       const newUserMessage = {
//         id: messages.length + 1,
//         sender: "user",
//         text: inputMessage,
//         time: getCurrentTime(),
//       };

//       setMessages([...messages, newUserMessage]);

//       setTimeout(() => {
//         const newAgentMessage = {
//           id: messages.length + 2,
//           sender: "agent",
//           text: "Thank you for your message. One of our Analysts will get in touch with you shortly.",
//           time: getCurrentTime(),
//         };
//         setMessages((prevMessages) => [...prevMessages, newAgentMessage]);
//       }, 1000);

//       setInputMessage("");
//     }
//   };

//   const getCurrentTime = () => {
//     const now = new Date();
//     return `${now.getHours()}:${now.getMinutes().toString().padStart(2, "0")}`;
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSendMessage();
//     }
//   };

//   const toggleChat = () => {
//     setIsChatOpen(!isChatOpen);
//   };

//   const closeChat = () => {
//     setIsChatOpen(false);
//   };

//   return (
//     <div className="chat-container-feature">
//       {isChatOpen ? (
//         <div className="chat-box">
//           <div className="chat-header">
//             <div className="header-left-feature">
//               <div className="profile-icon">
//                 <img src="/logo-circle.png" alt="Opulent Logo" />
//               </div>
//               <div className="header-text">
//                 <h2>Premium Support</h2>
//                 <p>Online</p>
//               </div>
//             </div>
//             <div className="header-actions">
//               <button className="action-button" onClick={closeChat}>
//                 <i className="fas fa-times"></i>
//               </button>
//             </div>
//           </div>

//           <div className="chat-messages">
//             {messages.map((message) => (
//               <div
//                 key={message.id}
//                 className={`message ${message.sender === "user" ? "user-message" : "agent-message"}`}
//               >
//                 {message.sender === "agent" && (
//                   <div className="agent-avatar">
//                     <img src="/logo-circle.png" alt="Agent" />
//                   </div>
//                 )}
//                 <div className="message-content">
//                   <div className="message-text-feature">{message.text}</div>
//                   <div className="message-time">{message.time}</div>
//                 </div>
//                 {message.sender === "user" && (
//                   <div className="message-status">
//                     <i className="fas fa-check"></i>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="encrypted-message">
//             <p>Your chat is encrypted and secure</p>
//           </div>

//           <div className="chat-input-feature">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={inputMessage}
//               onChange={(e) => setInputMessage(e.target.value)}
//               onKeyPress={handleKeyPress}
//             />
//             <div className="input-actions">
//               <button
//                 className={`send-button-feature ${inputMessage ? "active" : ""}`}
//                 onClick={handleSendMessage}
//               >
//                 <i className="fas fa-paper-plane"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="chat-bubble" onClick={toggleChat}>
//           <div className="chat-bubble-icon">
//             <i className="fas fa-comments"></i>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatFeature;

import axios from "axios";
import { useEffect, useState } from "react";
import "../DashboardSidebarComp/styles/ChatFeature.css";

const ChatFeature = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [assignedAnalyst, setAssignedAnalyst] = useState(null);
  const [conversationId, setConversationId] = useState(null);

  const API_BASE_URL = process.env.REACT_APP_API_URL;
  const accessToken = localStorage.getItem("accessToken");

  const fetchAssignedAnalyst = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/assigned-analyst/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      setAssignedAnalyst(res.data);
      startAnalystChat(res.data.id);
    } catch (err) {
      console.error("Failed to fetch assigned analyst", err);
    }
  };

  const startAnalystChat = async (analystId) => {
    try {
      const res = await axios.post(
        `${API_BASE_URL}/api/chat/start/`,
        { analyst_id: analystId },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      const convo = res.data;
      setConversationId(convo.id);
      setMessages(convo.messages || []);
    } catch (err) {
      console.error("Failed to start chat", err);
    }
  };

  const fetchMessages = async () => {
    if (!conversationId) return;
    try {
      const res = await axios.get(
        `${API_BASE_URL}/api/chat/my-conversations/`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
      const convo = res.data.find((c) => c.id === conversationId);
      setMessages(convo?.messages || []);
    } catch (err) {
      console.error("Error fetching messages", err);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || !conversationId) return;
    try {
      await axios.post(
        `${API_BASE_URL}/api/chat/send/`,
        { conversation: conversationId, content: inputMessage },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setInputMessage("");
      fetchMessages();
    } catch (err) {
      console.error("Error sending message", err);
    }
  };

  useEffect(() => {
    fetchAssignedAnalyst();
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container-feature">
      {isChatOpen ? (
        <div className="chat-box">
          <div className="chat-header">
            <div className="header-left-feature">
              <div className="profile-icon">
                <img
                  src={assignedAnalyst?.profile_photo_url || "/logo-circle.png"}
                  alt="Analyst"
                />
              </div>
              <div className="header-text">
                <h2>{assignedAnalyst?.username || "Analyst Chat"}</h2>
                <p>Secure Channel</p>
              </div>
            </div>
            <div className="header-actions">
              <button
                className="action-button"
                onClick={() => setIsChatOpen(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message ${
                  msg.sender === "user" ? "user-message" : "agent-message"
                }`}
              >
                {msg.sender !== "user" && (
                  <div className="agent-avatar">
                    <img
                      src={
                        assignedAnalyst?.profile_photo_url || "/logo-circle.png"
                      }
                      alt="Agent"
                    />
                  </div>
                )}
                <div className="message-content">
                  <div className="message-text-feature">{msg.content}</div>
                  <div className="message-time">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </div>
                </div>
                {msg.sender === "user" && (
                  <div className="message-status">
                    <i className="fas fa-check"></i>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="encrypted-message">
            <p>Your chat is encrypted and secure</p>
          </div>

          <div className="chat-input-feature">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <div className="input-actions">
              <button
                className={`send-button-feature ${
                  inputMessage ? "active" : ""
                }`}
                onClick={sendMessage}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-bubble" onClick={() => setIsChatOpen(true)}>
          <div className="chat-bubble-icon">
            <i className="fas fa-comments"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatFeature;
