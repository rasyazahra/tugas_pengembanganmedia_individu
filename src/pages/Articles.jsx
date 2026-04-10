import React from 'react';
import { Calendar, ChevronRight, User } from 'lucide-react';

const Articles = () => {
  const newsList = [
    {
      id: 1,
      title: "Tim SMA Samudera Ilmu Meraih Juara 1 Olimpiade Sains Nasional (OSN)",
      date: "10 April 2026",
      author: "Humas Sekolah",
      excerpt: "Prestasi membanggakan kembali diraih oleh kontingen sains sekolah kita yang berhasil menyabet medali emas di ajang OSN tingkat provinsi...",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 2,
      title: "Peringatan Hari Guru: Panggung Seni Karya Siswa Memukau Para Pendidik",
      date: "25 November 2025",
      author: "OSIS Samudera Ilmu",
      excerpt: "Suasana penuh haru dan suka cita menyelimuti lapangan utama saat OSIS menggelar persembahan seni tari nusantara dalam rangka perayaan Hari Guru...",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: 3,
      title: "Sosialisasi Program Bimbingan Karir & SNBT oleh Guru Konseling (BK)",
      date: "14 Februari 2026",
      author: "Tim BK",
      excerpt: "Persiapan menghadapi jalur masuk Perguruan Tinggi dipercepat. Tim BK mengajak seluruh siswa kelas 12 untuk mengenali minat dan jurusan kuliah yang tepat...",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Berita Sekolah</h1>
          <p>Kabar inspiratif, pengumuman, dan prestasi terbaru dari lingkungan SMA Samudera Ilmu.</p>
        </div>
      </div>

      <section className="section bg-light" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2.5rem' }}>
            {newsList.map((article) => (
              <div className="card reveal" key={article.id} style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0', transition: 'transform 0.4s ease' }}
                    className="article-img"
                  />
                </div>
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={14} /> {article.date}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><User size={14} /> {article.author}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: '1.4' }}>{article.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                    {article.excerpt}
                  </p>
                  <button className="btn-secondary" style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', padding: '0.6rem' }} onClick={() => alert('Artikel lengkap sedang dalam pemeliharaan.')}>
                    Baca Selengkapnya <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Articles;
