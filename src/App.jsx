import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, MapPin, Phone, Mail, BookOpen, Users, MessageCircle } from 'lucide-react';
import Home from './pages/Home';
import Curriculum from './pages/Curriculum';
import Extracurricular from './pages/Extracurricular';
import Policy from './pages/Policy';
import Counseling from './pages/Counseling';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Global Intersection Observer for .reveal elements
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    // Since react renders asynchronously, we can add a small timeout to ensure DOM is ready
    setTimeout(() => {
      document.querySelectorAll('.reveal').forEach((el) => {
        observer.observe(el);
      });
    }, 100);

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand">
          <BookOpen size={32} color="var(--primary)" />
          SMA Samudera <span>Ilmu</span>
        </Link>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setIsOpen(false)}>Beranda</Link>
          <Link to="/kurikulum" className={isActive('/kurikulum')} onClick={() => setIsOpen(false)}>Kurikulum</Link>
          <Link to="/ekstrakurikuler" className={isActive('/ekstrakurikuler')} onClick={() => setIsOpen(false)}>Ekstrakurikuler</Link>
          <Link to="/policy" className={isActive('/policy') || isActive('/counseling') ? 'active' : ''} onClick={() => setIsOpen(false)}>Layanan BK</Link>
        </div>
        <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-col">
          <h4>SMA Samudera Ilmu</h4>
          <p>Membentuk generasi bintang masa depan yang cerdas, berbudi pekerti luhur, dan siap menghadapi tantangan global.</p>
        </div>
        <div className="footer-col">
          <h4>Hubungi Kami</h4>
          <p><MapPin size={20} /> Jl. Bima Sakti No. 67, Kota Kosmos</p>
          <p><Phone size={20} /> (021) 555-1234</p>
          <p><Mail size={20} /> info@smasamuderailmu.sch.id</p>
        </div>
        <div className="footer-col">
          <h4>Tautan Cepat</h4>
          <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
            <Link to="/kurikulum">Kurikulum Kami</Link>
            <Link to="/ekstrakurikuler">Kegiatan Siswa</Link>
            <Link to="/policy">Bimbingan Konseling</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} SMA Samudera Ilmu. Hak Cipta Dilindungi.
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="page-wrapper">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kurikulum" element={<Curriculum />} />
            <Route path="/ekstrakurikuler" element={<Extracurricular />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/counseling" element={<Counseling />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
