import React, { useState, useEffect, useRef } from 'react';
import { Send, UserCircle, Clock, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Counseling = () => {
  const [messages, setMessages] = useState([]);
  const [inputData, setInputData] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  // Load old messages from localStorage
  useEffect(() => {
    // Basic protection if user hasn't gone through policy, but we won't strictly block 
    // for this demo.
    const saved = localStorage.getItem('bk_chat_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch(e) {
        setMessages([]);
      }
    } else {
      // initial message
      const initialMsg = {
        id: Date.now(),
        text: "Halo! Selamat datang di Layanan BK SMA Samudera Ilmu. Ada yang ingin kamu ceritakan atau tanyakan hari ini? Jangan ragu, Bapak/Ibu di sini untuk mendengarkanmu.",
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([initialMsg]);
      localStorage.setItem('bk_chat_messages', JSON.stringify([initialMsg]));
    }
  }, []);

  // auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const saveMessages = (newMsgs) => {
    setMessages(newMsgs);
    localStorage.setItem('bk_chat_messages', JSON.stringify(newMsgs));
  };

  const getBotResponse = () => {
    const responses = [
      "Terima kasih telah berbagi cerita. Bapak/Ibu menghargai kejujuranmu.",
      "Bapak/Ibu sangat memahami perasaanmu saat ini. Tidak apa-apa untuk merasa seperti itu.",
      "Langkah yang bagus karena kamu berani bercerita. Mari kita cari solusinya bersama-sama ya.",
      "Wah, itu hal yang menarik. Apakah kamu ingin membicarakannya langsung di ruang BK besok?",
      "Setiap kesulitan pasti ada jalan keluarnya. Kamu hebat sudah mau berusaha!",
      "Ibu/Bapak catat ya permintaannya. Jangan lupa tidur yang cukup dan jangan khawatir berlebihan."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inputData.trim()) return;

    const newMsg = {
      id: Date.now(),
      text: inputData,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const newMsgsList = [...messages, newMsg];
    saveMessages(newMsgsList);
    setInputData('');
    setIsTyping(true);

    // Bot reply simulation
    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        text: getBotResponse(),
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      saveMessages([...newMsgsList, botMsg]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // random delay 1.5s - 2.5s
  };

  const resetChat = () => {
    if(window.confirm('Hapus seluruh riwayat percakapan?')) {
      localStorage.removeItem('bk_chat_messages');
      window.location.reload();
    }
  }

  return (
    <div style={{ background: '#e2e8f0', minHeight: 'calc(100vh - 80px)', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="chat-container">
          <div className="chat-header">
            <UserCircle size={40} />
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.25rem' }}>Guru BK</h3>
              <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={12} /> Online (Simulasi)
              </p>
            </div>
            <button onClick={resetChat} style={{ background: 'transparent', color: 'white', textDecoration: 'underline', fontSize: '0.85rem' }}>
              Reset Chat
            </button>
          </div>
          
          <div className="chat-messages">
            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
              <span style={{ background: '#cbd5e1', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.8rem', color: '#475569', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                <Info size={14} /> Pesan diamankan di perangkat Anda
              </span>
            </div>

            {messages.map((m) => (
              <div key={m.id} className={`chat-message ${m.sender === 'user' ? 'message-user' : 'message-bot'}`}>
                <div style={{ whiteSpace: 'pre-wrap' }}>{m.text}</div>
                <span className="message-time">{m.time}</span>
              </div>
            ))}
            
            {isTyping && (
              <div className="chat-message message-bot" style={{ filter: 'opacity(0.6)' }}>
                <em>Guru BK sedang mengetik...</em>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className="chat-input-area" onSubmit={handleSend}>
            <input 
              type="text" 
              placeholder="Ceritakan masalahmu di sini..." 
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              autoFocus
            />
            <button type="submit" className="chat-send-btn" disabled={!inputData.trim()}>
              <Send size={24} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
