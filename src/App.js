import React, { useState, useEffect } from "react";
import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
import "./App.css";
import api from "./component/api";
import SubscribersList from "./component/SubscribersList";
import Campaign from "./component/Campaign";
import AddSubscriber from "./component/forms/AddSubscriber";
import NewCampaign from "./component/forms/NewCampaign";
import SubDetailInfo from './component/SubDetailInfo';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/Subscribers')
    .then(data => setUsers(data.records))
    .catch(error => console.log(error))
  },[]);
  
  return (
    <Router>
        <nav >
        <p>Subskrypcja</p>
        <p><Link to="/">Lista Subskrybentów</Link></p>
        {/* <p><Link to="/Subscribers">Lista Subskrybentów</Link></p> */}
        {/* <p><Link to="/AddSubscribers">Formularz zgłoszeniowy</Link></p>
        <p><Link to="/AddCampaign">Dodaj kampanie</Link></p>
        <p><Link to="/Campaign">Kampanie</Link></p> */}
            </nav>
        <Routes>
            <Route path="/" element={<SubscribersList users={users}/>} />
            {/* <Route path="/Subscribers" element={<SubscribersList />} /> */}
            <Route path="/AddSubscribers" element={<AddSubscriber />} />
            <Route path="/AddCampaign" element={<NewCampaign />} />
            <Route path="/Campaign" element={<Campaign />} />
            <Route path="/SubscriberDetailInfo/:id" element={<SubDetailInfo users={users}/>} />

 
        </Routes>

    </Router>

  );
}

export default App;