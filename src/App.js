import './App.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from './components/Layout';
import CardDetail from './components/CardDetail/CardDetail';
import Shows from './components/Shows';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Ticket from './components/Ticket/Ticket';
function App() {

  const url = "https://api.tvmaze.com/search/shows?q=all";
  const [data, setData] = useState([]);
  const fetchInfo = () => {
      return axios.get(url).then((res) => setData(res.data));
  };

  useEffect(() => {
      fetchInfo();
  }, []);

 
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Shows data={data} />} />
        <Route path="detail/:id" element={<CardDetail data={data} />} />
        <Route path="getTicket/:id" element={<Ticket />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
