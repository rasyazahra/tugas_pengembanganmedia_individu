import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Star, Shield, Users } from 'lucide-react';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-blob"></div>
        <div className="container hero-content">
          <div className="hero-text">
            <h1>Selamat Datang di<br />SMA Samudera Ilmu</h1>
            <p>Mendedikasikan diri untuk membimbing siswa-siswi meraih bintang. Lingkungan belajar inovatif, menyenangkan, dan berbasis karakter untuk masa depan cerah.</p>
            <div className="hero-buttons">
              <Link to="/kurikulum" className="btn-primary">Lihat Kurikulum</Link>
              <Link to="/policy" className="btn-secondary">Layanan BK</Link>
            </div>
          </div>
          <div className="hero-image" style={{ textAlign: 'center' }}>
            <img
              src="https://images.pexels.com/photos/35865718/pexels-photo-35865718.jpeg"
              alt="Siswa siswi SMA belajar"
              style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', border: '4px solid white', aspectRatio: '4/3', objectFit: 'cover', width: '100%' }}
            />
          </div>
        </div>
      </section>

      <section className="section bg-light" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="text-center reveal" style={{ marginBottom: '4rem' }}>
            <h2>Mengapa Memilih Kami?</h2>
            <p style={{ color: 'var(--text-muted)' }}>Keunggulan SMA Samudera Ilmu</p>
          </div>

          <div className="card-grid reveal">
            <div className="card">
              <div className="card-icon"><Star size={32} /></div>
              <h3>Fasilitas Modern</h3>
              <p>Ruang kelas ber-AC, proyektor interaktif, perpustakaan digital, dan laboratorium sains yang komprehensif.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Shield size={32} /></div>
              <h3>Lingkungan Aman</h3>
              <p>Pengawasan CCTV 24/7, disiplin yang terarah, dan program bimbingan untuk mendidik karakter siswa madani.</p>
            </div>
            <div className="card">
              <div className="card-icon"><Users size={32} /></div>
              <h3>Guru Berdedikasi</h3>
              <p>Tenaga pendidik profesional tersertifikasi yang siap menjadi mentor dan sahabat di masa remaja.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container reveal">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <img
                src="https://images.pexels.com/photos/35548841/pexels-photo-35548841.jpeg"
                alt="Aktivitas Belajar"
                style={{ borderRadius: '24px', boxShadow: 'var(--shadow-lg)', border: '4px solid white', aspectRatio: '4/3', objectFit: 'cover', width: '100%' }}
              />
            </div>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Membangun Generasi Emas Sejak Dini</h2>
              <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                Kami tidak sekadar mengajar; kami menginspirasi. Di SMA Samudera Ilmu, setiap anak adalah bintang yang siap bersinar sesuai potensinya masing-masing untuk melangkah ke jenjang Perguruan Tinggi maupun talenta vokasi.
              </p>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--text-main)', fontWeight: '500' }}>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '0.25rem', borderRadius: '50%' }}><BookOpen size={20} /></div>
                  Kurikulum Terpadu & Berbasis Proyek
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '0.25rem', borderRadius: '50%' }}><Users size={20} /></div>
                  Pengembangan Karakter Karakter & Etika
                </li>
                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ background: 'var(--secondary)', color: 'var(--primary)', padding: '0.25rem', borderRadius: '50%' }}><Star size={20} /></div>
                  Ekstrakurikuler Kaya Bakat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
