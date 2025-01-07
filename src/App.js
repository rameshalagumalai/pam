import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import './css/App.css';
import Home from './pages/home/Home';
import ScanQR from './pages/qr/ScanQR';
import NewTransactionCanvas from './components/NewTransactionCanvas';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Transactions from './pages/transactions/Transactions';
import Profile from './pages/profile/Profile';

function App() {

  const isDark = false;
  const style = isDark ? "bg-app text-light" : "bg-body-tertiary text-dark";

  const [isManual, setIsManual] = useState(true);

  const [payeeName, setPayeeName] = useState("");

  return (
    <div className={`App ${style}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setIsManual={setIsManual} />} />
          <Route path="/scan-qr" element={<ScanQR setIsManual={setIsManual} setPayeeName={setPayeeName} />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
      <NewTransactionCanvas isManual={isManual} payeeName={payeeName} />
    </div>
  );
}

export default App;
