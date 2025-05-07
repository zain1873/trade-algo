import React, { useState } from 'react';
import '../DashboardSidebarComp/styles/ChatFeature.css';

const ChatFeature = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'agent',
      text: 'Hello! Welcome to Opulent International. How can I assist you today?',
      time: '14:16'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newUserMessage = {
        id: messages.length + 1,
        sender: 'user',
        text: inputMessage,
        time: getCurrentTime()
      };
      
      setMessages([...messages, newUserMessage]);
      
      // Simulate agent response
      setTimeout(() => {
        const newAgentMessage = {
          id: messages.length + 2,
          sender: 'agent',
          text: 'Thank you for your message. One of our Anaylyst will get in touch with you shortly.',
          time: getCurrentTime()
        };
        setMessages(prevMessages => [...prevMessages, newAgentMessage]);
      }, 1000);
      
      setInputMessage('');
    }
  };

  const getCurrentTime = () => {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  const closeChat = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="chat-container-feature">
      {isChatOpen ? (
        <div className="chat-box">
          <div className="chat-header">
            <div className="header-left-feature">
              <div className="profile-icon">
                <img src="/logo-circle.png" alt="Opulent Logo" />
              </div>
              <div className="header-text">
                <h2>Premium Support</h2>
                <p>Online</p>
              </div>
            </div>
            <div className="header-actions">
              <button className="action-button" onClick={closeChat}>
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div className="chat-messages">
            {messages.map((message) => (
              <div 
                key={message.id} 
                className={`message ${message.sender === 'user' ? 'user-message' : 'agent-message'}`}
              >
                {message.sender === 'agent' && (
                  <div className="agent-avatar">
                    <img src="/logo-circle.png" alt="Agent" />
                  </div>
                )}
                <div className="message-content">
                  <div className="message-text">{message.text}</div>
                  <div className="message-time">{message.time}</div>
                </div>
                {message.sender === 'user' && (
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
                className={`send-button-feature ${inputMessage ? 'active' : ''}`}
                onClick={handleSendMessage}
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="chat-bubble" onClick={toggleChat}>
          <div className="chat-bubble-icon">
            <i className="fas fa-comments"></i>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatFeature;