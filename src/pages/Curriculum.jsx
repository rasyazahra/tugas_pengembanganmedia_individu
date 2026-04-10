import React from 'react';
import { Book, Calculator, Globe, Music, Activity, Heart } from 'lucide-react';

const Curriculum = () => {
  const curriculumData = [
    {
      grade: "Kelas 10",
      description: "Fase E (Kurikulum Merdeka): Penguatan literasi, numerasi, dan eksplorasi minat bakat dasar sebelum penjurusan peminatan.",
      subjects: ["Bahasa Indonesia", "Matematika", "Bahasa Inggris", "Informatika", "IPA Terpadu (Fisika, Kimia, Biologi)", "IPS Terpadu (Sejarah, Geografi, Ekonomi, Sosiologi)", "Pendidikan Agama", "Pendidikan Pancasila"]
    },
    {
      grade: "Kelas 11",
      description: "Fase F (Kurikulum Merdeka): Pemilihan mata pelajaran pilihan/peminatan sesuai minat dan rencana karir masa depan (Rumpun MIPA/IPS/Bahasa).",
      subjects: ["Mata Pelajaran Wajib", "Matematika Tingkat Lanjut", "Fisika / Biologi / Kimia Terapan", "Ekonomi Bisnis & Geografi Lingkungan", "Bahasa Asing (Mandarin/Jepang)", "Karya Tulis Ilmiah"]
    },
    {
      grade: "Kelas 12",
      description: "Fase F Lanjutan: Pengayaan, pendalaman materi asesmen skolastik, serta persiapan intensif masuk Perguruan Tinggi (SNBP/SNBT).",
      subjects: ["Pendalaman Materi SNBT", "Proyek Penguatan Profil Pelajar Pancasila (P5)", "Seminar Karir & Kewirausahaan", "Ujian Praktik Terintegrasi", "Bimbingan TPS & Literasi"]
    }
  ];

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Kurikulum Pembelajaran</h1>
          <p>Sistem pembelajaran komprehensif dari Kelas 10 hingga Kelas 12 yang mengacu pada standar nasional (Kurikulum Merdeka) dengan pengayaan spesifik untuk persiapan Perguruan Tinggi.</p>
        </div>
      </div>

      <section className="section bg-light" style={{ background: '#f8fafc' }}>
        <div className="container">
          <div className="card-grid">
            {curriculumData.map((data, index) => (
              <div className="card" key={index}>
                <h3 style={{ fontSize: '1.75rem', color: 'var(--primary)', marginBottom: '1rem', borderBottom: '2px solid var(--secondary)', display: 'inline-block', paddingBottom: '0.5rem' }}>
                  {data.grade}
                </h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', minHeight: '60px' }}>
                  {data.description}
                </p>
                <div style={{ background: '#f1f5f9', padding: '1.25rem', borderRadius: '12px' }}>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>Mata Pelajaran:</h4>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {data.subjects.map((subject, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', fontSize: '0.95rem' }}>
                        <div style={{ color: 'var(--primary-light)' }}><Book size={16} /></div>
                        {subject}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: '4rem', background: 'var(--white)', padding: '3rem', borderRadius: '24px', boxShadow: 'var(--shadow-md)', border: '1px solid var(--border-color)', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 400px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Pendekatan Holistik</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Kami percaya bahwa kecerdasan tidak hanya diukur dari nilai akademik. Kurikulum kami juga membekali siswa dengan kecerdasan emosional dan keterampilan hidup.</p>
            </div>
            <div style={{ flex: '1 1 300px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <Heart size={40} color="var(--primary)" style={{ marginBottom: '0.5rem' }}/>
                <div style={{ fontWeight: '600' }}>Peduli Sesama</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Activity size={40} color="var(--primary)" style={{ marginBottom: '0.5rem' }}/>
                <div style={{ fontWeight: '600' }}>Sehat Jasmani</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Globe size={40} color="var(--primary)" style={{ marginBottom: '0.5rem' }}/>
                <div style={{ fontWeight: '600' }}>Wawasan Global</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <Music size={40} color="var(--primary)" style={{ marginBottom: '0.5rem' }}/>
                <div style={{ fontWeight: '600' }}>Ekspresi Seni</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Curriculum;
