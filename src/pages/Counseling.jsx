import React, { useState, useEffect, useRef } from 'react';
import { Send, UserCircle, Clock, Info, CalendarPlus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Counseling = () => {
  const [messages, setMessages] = useState([]);
  const [inputData, setInputData] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const messagesEndRef = useRef(null);

  const availableSlots = [
    { id: 1, day: "Senin", time: "10:00 - 11:00 WIB" },
    { id: 2, day: "Rabu", time: "13:00 - 14:00 WIB" },
    { id: 3, day: "Jumat", time: "09:00 - 10:00 WIB" },
  ];

  useEffect(() => {
    const saved = localStorage.getItem('bk_chat_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch(e) {
        setMessages([]);
      }
    } else {
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
      "Ibu/Bapak catat ya permintaannya. Jangan lupa istirahat yang cukup!"
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

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        text: getBotResponse(),
        sender: 'bot',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      saveMessages([...newMsgsList, botMsg]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000);
  };

  const resetChat = () => {
    if(window.confirm('Hapus seluruh riwayat percakapan?')) {
      localStorage.removeItem('bk_chat_messages');
      window.location.reload();
    }
  };

  const generateGCalLink = () => {
    if(!selectedSlot) return '#';
    const slotStr = selectedSlot.day + ' Pukul ' + selectedSlot.time;
    const text = encodeURIComponent("Sesi Konseling BK - SMA Samudera Ilmu");
    const details = encodeURIComponent(`Jadwal tatap muka konseling dengan Guru Bimbingan Konseling pada hari ${slotStr}. Mohon hadir tepat waktu di ruangan BK.`);
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&details=${details}`;
  };

  return (
    <div style={{ background: '#f8fafc', paddingBottom: '4rem' }}>
      <div className="page-header" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <h1>Layanan Bimbingan Konseling</h1>
          <p>Ceritakan masalahmu lewat Chat atau pesan jadwal tatap muka langsung dengan Guru BK.</p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 2fr)', gap: '2rem', flexWrap: 'wrap' }}>
          
          <div className="booking-panel reveal" style={{ background: 'var(--white)', padding: '2rem', borderRadius: '20px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', alignSelf: 'start' }}>
            <h3 style={{ borderBottom: '2px solid var(--primary-light)', paddingBottom: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <CalendarPlus size={24} color="var(--primary)" />
              Booking Jadwal Tatap Muka
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
              Pilih slot waktu yang tersedia minggu ini untuk bertemu tatap muka dengan Guru Konseling.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {availableSlots.map(slot => (
                <label key={slot.id} style={{ display: 'flex', alignItems: 'center', padding: '1rem', border: selectedSlot?.id === slot.id ? '2px solid var(--primary)' : '1px solid var(--border-color)', borderRadius: '12px', cursor: 'pointer', background: selectedSlot?.id === slot.id ? '#f0f4f8' : 'white', transition: 'all 0.2s' }}>
                  <input type="radio" name="slot" value={slot.id} onChange={() => setSelectedSlot(slot)} checked={selectedSlot?.id === slot.id} style={{ marginRight: '1rem', accentColor: 'var(--primary)' }} />
                  <div>
                    <div style={{ fontWeight: '600', color: 'var(--text-main)' }}>{slot.day}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{slot.time}</div>
                  </div>
                </label>
              ))}
            </div>

            <a 
              href={generateGCalLink()} 
              target="_blank" 
              rel="noreferrer"
              className="btn-primary" 
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', background: selectedSlot ? '#4285F4' : '#cbd5e1', pointerEvents: selectedSlot ? 'auto' : 'none', boxShadow: selectedSlot ? '0 4px 15px rgba(66, 133, 244, 0.4)' : 'none' }}
              onClick={(e) => {
                if(!selectedSlot) e.preventDefault();
              }}
            >
              <CalendarPlus size={18} />
              {selectedSlot ? 'Tambahkan ke Google Calendar' : 'Pilih Jadwal Terlebih Dahulu'}
            </a>
          </div>

          <div className="chat-container reveal" style={{ margin: 0, height: '600px', width: '100%' }}>
            <div className="chat-header">
              <UserCircle size={40} />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', color: 'white', margin: 0 }}>Guru BK Online</h3>
                <p style={{ margin: 0, fontSize: '0.85rem', opacity: 0.8, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  <Clock size={12} /> Online (Simulasi)
                </p>
              </div>
              <button onClick={resetChat} style={{ background: 'transparent', color: 'white', textDecoration: 'underline', fontSize: '0.85rem', border: 'none', cursor: 'pointer' }}>
                Reset Chat
              </button>
            </div>
            
            <div className="chat-messages" style={{ background: '#f8fafc' }}>
              <div style={{ textAlign: 'center', margin: '1rem 0' }}>
                <span style={{ background: '#e2e8f0', padding: '0.5rem 1rem', borderRadius: '50px', fontSize: '0.8rem', color: '#475569', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
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
                placeholder="Ketik rahasiamu di sini..." 
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
              />
              <button type="submit" className="chat-send-btn" disabled={!inputData.trim()}>
                <Send size={24} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
