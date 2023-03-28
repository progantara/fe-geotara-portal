import React, { useContext, useEffect, useState } from "react";
import Logo from "../../Assets/img/logo.png";
import LogoSm from "../../Assets/img/logo-sm.png";

// import './App.css';
import Map from "../../Component/Map";
import { Layers, TileLayer, VectorLayer } from "../../Component/Map/Layers";
import { Circle as CircleStyle, Fill, Icon, Stroke, Style } from "ol/style";
import { osm, vector } from "../../Component/Map/Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "../../Component/Map/Controls";

import mapConfig from "./config.json";
import Marker from "../../Component/Map/Component/Marker";
import Navbar from "../../Component/Navbar";
import Popup from "../../Component/Map/Component/Popup";
import CardImage from "../../Component/Card/CardImage";
import MapContext from "../../Context/Map/MapContext";

let styles = {
  MultiPolygon: new Style({
    stroke: new Stroke({
      color: "blue",
      width: 1,
    }),
    fill: new Fill({
      color: "rgba(0, 0, 255, 0.1)",
    }),
  }),
  Marker: new Style({
    image: new Icon({
      anchor: [0.5, 46],
      anchorXUnits: 'fraction',
      anchorYUnits: 'pixels',
      src: LogoSm
    }),
  }),
};

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;

const Home = () => {
  const [center, setCenter] = useState([
    106.92212358079824, -6.919457022684152,
  ]);
  const [zoom, setZoom] = useState(15);  
  // const [showLayer1, setShowLayer1] = useState(true);
  // const [showLayer2, setShowLayer2] = useState(true);
  // const { view } = useContext(MapContext);
  // const [viewing, setViewing] = useState(null);  

  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <div className="flex flex-1">
        {/* SIDEBAR  */}
        <div className="flex flex-col border-xl sidebar lg:left-0 p-2 w-[350px] h-[calc(100vh-80px)] overflow-y-auto text-center bg-green-300 ">
          <div className="text-gray-100 text-xl">
            <div className="mt-5">
                <form>
                  <div className="search">
                    <label
                      htmlFor="search"
                      className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                    >
                      Search
                    </label>
                    <div className="relative flex mb-5">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                          aria-hidden="true"
                          className="w-5 h-5 text-gray-500 dark:text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        className="w-[18rem] p-4 pl-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Cari Wisata"
                        required
                      />
                    </div>
                  </div>
                </form>

                <div className="flex flex-row ml-3 mb-3">
                  <p className="text-black text-xl font-semibold tracking-wide">
                    Explorer
                  </p>
                </div>
                <button className="flex w-full text-black border-lg items-center hover:bg-[#98FB98] focus:bg-[#98FB98] rounded-lg p-3 mb-3"
                onClick={() => {
                          setCenter([106.92212358079824, -6.919457022684152]);
                        }}>
                  {/* <input
                    type="checkbox"
                    checked={showLayer1}
                    onChange={(event) => setShowLayer1(event.target.checked)}
                    className="mr-2"
                  /> */}
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                      />
                    </svg>
                    <div className="text-black text-[17px] font-medium">
                        Sukabumi
                    </div>
                  </div>
                </button>              
                <button className="flex w-full text-black border-lg items-center hover:bg-[#98FB98] focus:bg-[#98FB98] rounded-lg p-3 mb-3"
                onClick={() => {
                          setCenter([107.6316278500759, -6.972258005991703]);
                        }}>
                  {/* <input
                    type="checkbox"
                    checked={showLayer1}
                    onChange={(event) => setShowLayer1(event.target.checked)}
                    className="mr-2"
                  /> */}
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                      />
                    </svg>
                    <div className="text-black text-[17px] font-medium">
                        Bandung
                    </div>
                  </div>
                </button>              
            </div>
          </div>
        </div>

        <div className="w-full">
          <Map center={fromLonLat(center)} zoom={zoom}>
            <Layers>
              <TileLayer source={osm()} zIndex={0} />
              {/* {showLayer1 && (
                <VectorLayer
                  source={vector({
                    features: new GeoJSON().readFeatures(geojsonObject, {
                      featureProjection: get("EPSG:3857"),
                    }),
                  })}
                  style={styles.MultiPolygon}
                />
              )}
              {showLayer2 && (
                <VectorLayer
                  source={vector({
                    features: new GeoJSON().readFeatures(geojsonObject2, {
                      featureProjection: get("EPSG:3857"),
                    }),
                  })}
                  style={styles.MultiPolygon}
                />
              )} */}

              <Marker
                coordinate={center}
                style={styles.Marker}
                popup={
                  <CardImage
                    image="https://flowbite.com/docs/images/blog/image-1.jpg"
                    title="Wisata 1"
                    description="Lorem"
                    file360=""
                  />
                }
              />

              <Marker
                coordinate={[107.6316278500759, -6.972258005991703]}
                style={styles.Marker}
                popup={
                  <CardImage
                  file360=""
                    image="https://flowbite.com/docs/images/blog/image-1.jpg"
                    title="Telkom University"
                    description="Lorem"
                  />
                }
              />
            </Layers>

            <Controls>
              <FullScreenControl />
            </Controls>
            <Popup />
          </Map>
        </div>
      </div>
    </>
  );
};

export default Home;
