import React from 'react';
import { Target, Music, Palette, MonitorPlay, HeartPulse, Tent } from 'lucide-react';

const Extracurricular = () => {
  const ekskulList = [
    { name: "Pramuka", icon: <Tent size={48} />, color: "#8B4513", desc: "Membentuk karakter disiplin, mandiri, dan cinta alam." },
    { name: "PMR (Palang Merah Remaja)", icon: <HeartPulse size={48} />, color: "#DC143C", desc: "Melatih kepedulian sosial dan keterampilan P3K dasar." },
    { name: "Seni Tari & Musik", icon: <Music size={48} />, color: "#9370DB", desc: "Melestarikan budaya bangsa dan mengembangkan bakat seni." },
    { name: "Futsal & Basket", icon: <Target size={48} />, color: "#FF8C00", desc: "Menjaga kebugaran jasmani dan melatih kerja sama tim." },
    { name: "Melukis", icon: <Palette size={48} />, color: "#20B2AA", desc: "Wadah ekspresi kreativitas visual tanpa batas." },
    { name: "Klub Komputer & Coding", icon: <MonitorPlay size={48} />, color: "#4169E1", desc: "Pengenalan teknologi digital dan pemikiran komputasional sejak dini." },
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Ekstrakurikuler</h1>
          <p>Kembangkan bakat, minat, dan potensi maksimal siswa di luar jam belajar formal melalui beragam pilihan kegiatan positif.</p>
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="card-grid">
            {ekskulList.map((item, index) => (
              <div className="card" key={index} style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: '100px', height: '100px', borderRadius: '50%', background: `${item.color}20`,
                  display: 'flex', justifyContent: 'center', alignItems: 'center', color: item.color, marginBottom: '1.5rem',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ marginBottom: '1rem' }}>{item.name}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '5rem', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '2rem' }}>Galeri Kegiatan</h2>
            <div className="gallery">
              <div className="gallery-item" style={{ background: 'linear-gradient(45deg, #123485, #2d58cc)', backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', bottom: 0, width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.6)' }}>Pramuka</div>
              </div>
              <div className="gallery-item" style={{ background: 'linear-gradient(45deg, #ffad15, #ffb833)', backgroundImage: 'url("https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=600")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', bottom: 0, width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.6)' }}>Seni Musik</div>
              </div>
              <div className="gallery-item" style={{ background: 'linear-gradient(45deg, #20B2AA, #48D1CC)', backgroundImage: 'url("https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=600")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div style={{ position: 'absolute', bottom: 0, width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.6)' }}>Olahraga</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Extracurricular;
