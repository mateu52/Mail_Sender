import React from "react";
import { BrowserRouter as Router , Link, Routes, Route } from "react-router-dom";
import "./App.css";

import SubscribersList from "./component/SubscribersList";
import Campaign from "./component/Campaign";
import AddSubscriber from "./component/forms/AddSubscriber";
import SubscriberDetail from "./component/SubscriberDetail";
import NewCampaign from "./component/forms/NewCampaign";
import SubDetailInfo from './component/SubDetailInfo';

function App() {
  
  
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
            <Route path="/" element={<SubscribersList />} />
            {/* <Route path="/Subscribers" element={<SubscribersList />} /> */}
            <Route path="/AddSubscribers" element={<AddSubscriber />} />
            <Route path="/AddCampaign" element={<NewCampaign />} />
            <Route path="/Campaign" element={<Campaign />} />
            <Route path="/SubscriberDetails/" element={<SubscriberDetail />} />
            <Route path="/SubscriberDetailInfo/:id" element={<SubDetailInfo />} />

 
        </Routes>

    </Router>

  );
}

export default App;