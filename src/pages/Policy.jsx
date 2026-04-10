import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, CheckCircle } from 'lucide-react';

const Policy = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (agreed) {
      navigate('/counseling');
    }
  };

  return (
    <>
      <div className="page-header" style={{ padding: '4rem 0 2rem' }}>
        <div className="container">
          <h1>Layanan Bimbingan Konseling</h1>
          <p>Ruang aman untuk berbagi cerita, keluh kesah, dan mencari solusi atas permasalahan belajarmu di sekolah.</p>
        </div>
      </div>

      <section className="section bg-light" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container">
          <div className="policy-box">
            <h2>Persetujuan Layanan BK</h2>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              <ShieldAlert size={64} />
            </div>
            
            <div className="policy-content">
              <strong>Mohon perhatikan PENTING sebelum memulai percakapan:</strong>
              <br/><br/>
              1. <strong>Kerahasiaan Terjamin:</strong> Identitas dan isi percakapan antara siswa dan Guru Konseling bersifat konfidensial (rahasia) dan tidak akan disebarkan ke publik atau pihak lain tanpa izin siswa, kecuali ada indikasi ancaman keselamatan nyawa.
              <br/><br/>
              2. <strong>Ruang Aman:</strong> Bebas dari perundungan, tidak menghakimi, dan mendengarkan dengan penuh empati.
              <br/><br/>
              3. <strong>Sopan Santun:</strong> Siswa diwajibkan menggunakan bahasa yang baik, sopan, dan tidak menggunakan kata-kata kasar atau menyinggung SARA.
              <br/><br/>
              4. <strong>Waktu Layanan:</strong> Layanan chat aktif sesuai jam operasional sekolah. Pesan di luar jam sekolah akan dibalas pada hari kerja berikutnya.
              <br/><br/>
              5. <strong>Non-Darurat Medis:</strong> Layanan BK online ini bukan untuk penanganan darurat kecelakaan fisik. Untuk hal tesebut, silakan hubungi PMR sekolah atau IGD terdekat.
            </div>

            <label className="policy-checkbox">
              <input 
                type="checkbox" 
                checked={agreed} 
                onChange={(e) => setAgreed(e.target.checked)} 
              />
              <span style={{ fontSize: '1.05rem', color: 'var(--text-main)', marginTop: '-0.2rem' }}>
                Saya telah membaca dan menyetujui syarat & ketentuan layanan Bimbingan Konseling ini.
              </span>
            </label>

            <button 
              className="btn-primary" 
              style={{ width: '100%', opacity: agreed ? 1 : 0.5, cursor: agreed ? 'pointer' : 'not-allowed', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
              onClick={handleProceed}
              disabled={!agreed}
            >
              <CheckCircle size={20} />
              Mulai Chat dengan Guru BK
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Policy;
