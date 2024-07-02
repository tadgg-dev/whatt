


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import {SessionProvider} from "./hooks/SessionContext"
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Logged from './views/Logged';
import WhoWeAre from './views/WhoWeAre';
import Contact from './views/Contact';
import Admin from './views/Admin';
import Recipies from './views/Recipies';
import RecipieEdit from './views/RecipieEdit';

function App() {
  return (
   <SessionProvider>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} /> 
          <Route path="/register" element={<Register />} /> 
          <Route path="/logged" element={<Logged />} /> 
          <Route path="/whoweare" element={<WhoWeAre />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/admin" element={<Admin />} /> 
          <Route path="/recipies" element={<Recipies />} /> 
          <Route path="/recipe/edit" element={<RecipieEdit />} /> 
          <Route path="/recipe/new" element={<RecipieEdit />} /> 
        </Routes>
      </main>
      <Footer />
    </Router>
   </SessionProvider>
  );
}

export default App;