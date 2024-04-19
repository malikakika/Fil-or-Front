import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Importez Routes et Route
import Header from './components/header';
import Footer from './components/footer';
import HomePage from './pages/homePage';
import Top2024 from './components/top2024';
import Outlet from './components/outlet';
import CategoryProductsPage from './pages/CategoryProductsPage';

function App() {
  return (
    <div>
      {/* Votre barre de navigation */}
      <Header />

      {/* Vos routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bracelets-fins" element={<CategoryProductsPage categoryName="Bracelets fins" />} />
        <Route path="/bracelets-larges" element={<CategoryProductsPage categoryName="Bracelets larges" />} />
        <Route path="/bracelets-unis" element={<CategoryProductsPage categoryName="Bracelets unis" />} />
        <Route path="/bracelets-motif" element={<CategoryProductsPage categoryName="Bracelets motif" />} />
        <Route path="/bracelets-homme" element={<CategoryProductsPage categoryName="Bracelets homme" />} />
        <Route path="/bracelets-couple" element={<CategoryProductsPage categoryName="Bracelets couple" />} />
        <Route path="/bracelets-cheville" element={<CategoryProductsPage categoryName="Bracelets cheville" />} />
        <Route path="/bracelets-personnalises" element={<CategoryProductsPage categoryName="Bracelets personnalises" />} />       
        <Route path="/bracelets-colliers" element={<CategoryProductsPage categoryName="Bracelets colliers" />} />
        <Route path="/bracelets-atebas" element={<CategoryProductsPage categoryName="Bracelets atebas" />} />
        <Route path="/bracelets-plage" element={<CategoryProductsPage categoryName="Bracelets plage" />} />
        <Route path="/accessoires" element={<CategoryProductsPage categoryName="accessoires" />} />
        <Route path="/outlet" element={<Outlet />} />
        <Route path="/top2024" element={<Top2024 />} />













        {/* Ajoutez d'autres routes pour chaque catégorie si nécessaire */}
      </Routes>

      {/* Votre pied de page */}
      <Footer />
    </div>
  );
}

export default App;
