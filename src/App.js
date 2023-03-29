import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages";
import Artikel from './Pages/Artikel';
import Detail from "./Pages/Artikel/Detail";
import Event from './Pages/Event';
import EventDetail from './Pages/Event/detail';

import Virtual from './Pages/VirtualTour';
import Area from "./Pages/VirtualTour/Area";
import ViewArea from "./Pages/VirtualTour/view";

import Login from "./Pages/Auth/Login";
import Regis from "./Pages/Auth/Regis";
import Forgot from "./Pages/Auth/Forgot";

import Accomodation from "./Pages/Accomodation";
import AccomodationDetail from "./Pages/Accomodation/detail";

import TourAndTravel from "./Pages/TourAndTravel";
import TourAndTravelDetail from "./Pages/TourAndTravel/detail";

import MerhcantAndSourvenir from "./Pages/MerhcantAndSourvenir";
import MerhcantAndSourvenirDetail from "./Pages/MerhcantAndSourvenir/detail";

import Restaurant from "./Pages/Restaurant";
import RestaurantDetail from "./Pages/Restaurant/detail";

import Attraction from "./Pages/Attraction";
import AttractionDetail from "./Pages/Attraction/detail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/Area" element={<Area />} />

          {/* Auth */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Regis" element={<Regis />} />
          <Route path="/Forgot" element={<Forgot />} />

          {/* Landing */}
          <Route exact path="/" element={<Home />} />

          {/* Artikel */}
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/Detail" element={<Detail />} />

          {/* Event */}
          <Route path="/event" element={<Event />} />
          <Route path="/event/detail/:id" element={<EventDetail />} />

          {/* Virtual Tour */}
          <Route path="/virtual-tour" element={<Virtual />} />
          <Route path="/virtual-tour/view" element={<ViewArea />} />

          {/* Akomodasi */}
          <Route exact path="/accomodation" element={<Accomodation />} />
          <Route path="/accomodation/detail" element={<AccomodationDetail />} />

          {/* Tour And Travel */}
          <Route exact path="/tour-travel" element={<TourAndTravel />} />
          <Route path="/tour-travel/detail" element={<TourAndTravelDetail />} />

          {/* Merchant And Sourvenir */}
          <Route
            exact
            path="/merchant-sourvenir"
            element={<MerhcantAndSourvenir />}
          />
          <Route
            path="/merchant-sourvenir/detail/:id"
            element={<MerhcantAndSourvenirDetail />}
          />

          {/* Restaurant */}
          <Route exact path="/restaurant" element={<Restaurant />} />
          <Route path="/restaurant/detail" element={<RestaurantDetail />} />

          {/* Attraction */}
          <Route exact path="/attraction" element={<Attraction />} />
          <Route path="/attraction/detail/:id" element={<AttractionDetail />} />

          {/* 404 */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
