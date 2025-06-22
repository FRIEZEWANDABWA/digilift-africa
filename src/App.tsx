import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ImpactPage from './pages/ImpactPage';
import StoriesPage from './pages/StoriesPage';
import DiasporaPortal from './pages/DiasporaPortal';
import EntrepreneurHub from './pages/EntrepreneurHub';
import PilotProgram from './pages/PilotProgram';
import Dashboard from './pages/Dashboard';
import PartnershipsPage from './pages/PartnershipsPage';
import BlogPage from './pages/BlogPage';
import AIAfricaPage from './pages/AIAfricaPage';
import ContactPage from './pages/ContactPage';
import KenyaPage from './pages/countries/KenyaPage';
import SenegalPage from './pages/countries/SenegalPage';
import NigeriaPage from './pages/countries/NigeriaPage';
import RwandaPage from './pages/countries/RwandaPage';
import EthiopiaPage from './pages/countries/EthiopiaPage';
import SouthAfricaPage from './pages/countries/SouthAfricaPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Router basename="/digilift-africa">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/stories" element={<StoriesPage />} />
            <Route path="/diaspora" element={<DiasporaPortal />} />
            <Route path="/entrepreneurs" element={<EntrepreneurHub />} />
            <Route path="/pilot" element={<PilotProgram />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/ai-africa" element={<AIAfricaPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/kenya" element={<KenyaPage />} />
            <Route path="/senegal" element={<SenegalPage />} />
            <Route path="/nigeria" element={<NigeriaPage />} />
            <Route path="/rwanda" element={<RwandaPage />} />
            <Route path="/ethiopia" element={<EthiopiaPage />} />
            <Route path="/south-africa" element={<SouthAfricaPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;