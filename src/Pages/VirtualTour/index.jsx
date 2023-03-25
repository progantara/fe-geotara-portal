import React, { useState } from "react";
import Logo from "../../Assets/img/logo.png";

import { Link, useNavigate } from "react-router-dom";

// import './App.css';
import Map from "../../Component/Map";
import { Layers, TileLayer, VectorLayer } from "../../Component/Map/Layers";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { osm, vector } from "../../Component/Map/Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "../../Component/Map/Controls";

import mapConfig from "./config.json";

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
};

const geojsonObject = mapConfig.geojsonObject;
const geojsonObject2 = mapConfig.geojsonObject2;
const geojsonObject3 = mapConfig.geojsonObject3;
const geojsonObject4 = mapConfig.geojsonObject4;
const geojsonObject5 = mapConfig.geojsonObject5;
const geojsonObject6 = mapConfig.geojsonObject6;
const markersLonLat = [mapConfig.kansasCityLonLat, mapConfig.blueSpringsLonLat];

const Home = () => {
  const [center, setCenter] = useState([
    106.92212358079824, -6.919457022684152,
  ]);
  const [zoom, setZoom] = useState(9);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  const [showLayer3, setShowLayer3] = useState(true);
  const [showLayer4, setShowLayer4] = useState(true);
  const [showLayer5, setShowLayer5] = useState(true);
  const [showLayer6, setShowLayer6] = useState(true);

  return (
    <>
      {/* NAVBAR */}
      <nav className="px-20 py-2 bg-white border-b-gray-900 shadow-lg border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-14" alt="Geotara Logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  to="/virtual-tour"
                  className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Virtual Tour
                </Link>
              </li>
              <li>
                <Link
                  to="/artikel"
                  className="block py-2 pl-3 pr-4 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-white dark:bg-green-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Artikel
                </Link>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                >
                  Rencanakan Perjalanan Anda
                  <svg
                    className="w-5 h-5 ml-1"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {/* Dropdown menu */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-400"
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Earnings
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      Sign out
                    </Link>
                  </div>
                </div>
              </li>
              <li>
                <Link
                  to="/event"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Event
                </Link>
              </li>
            </ul>
          </div>
          <Link
            to="/login"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Login
          </Link>
        </div>
      </nav>

      <div className="flex flex-1">
        {/* SIDEBAR  */}
        <div class="flex flex-col border-xl sidebar lg:left-0 p-2 w-[350px] h-screen overflow-y-auto text-center bg-green-300 ">
          <div class="text-gray-100 text-xl">
            <div class="p-2.5 mt-1 flex items-center">
              <a href="/">
                <button class="bg-green-800 hover:bg-green-600 text-dark text-sm font-semibold py-3 px-4 rounded-lg">
                  <svg
                    class="w-6 h-6 dark:text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    ></path>
                  </svg>
                </button>
              </a>
              <i
                class="bi bi-x cursor-pointer ml-28 lg:hidden"
                onclick="openSidebar()"
              ></i>
            </div>
            <div className="mt-5">
              <form>
                <label
                  for="search"
                  class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div class="relative flex flex-row ml-3">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    class="w-[18rem] p-4 pl-10 text-sm text-gray-900  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Cari Wisata"
                    required
                  />
                </div>
                <div className="flex flex-row text-black mt-6 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <div className="text-black text-lg font-small  ml-3 -mt-1">
                    <a href="/virtual-tour">Map</a>
                  </div>
                </div>
                <div className="flex flex-row mt-10 ml-3">
                  <p className="text-black text-xl font-semibold tracking-wide">
                    KECAMATAN
                  </p>
                </div>
                <div className="mt-3 ml-3 flex flex-row text-black border-lg ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6 mt-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <div className="text-black text-[17px] font-medium ml-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={showLayer1}
                        onChange={(event) =>
                          setShowLayer1(event.target.checked)
                        }
                      />{" "}
                      <a href="/virtual-tour/view">Ciemas</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row text-black mt-6 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <div className=" text-black text-[17px] font-medium -mt-1 ml-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={showLayer2}
                        onChange={(event) =>
                          setShowLayer2(event.target.checked)
                        }
                      />{" "}
                      <a href="/virtual-tour/view">Cikakak</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row text-black mt-6 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <div className=" text-black text-[17px] font-medium -mt-1 ml-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={showLayer3}
                        onChange={(event) =>
                          setShowLayer3(event.target.checked)
                        }
                      />{" "}
                      <a href="/virtual-tour/view">Pelabuhan Ratu</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row text-black mt-6 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <div className=" text-black text-[17px] font-medium -mt-1 ml-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={showLayer4}
                        onChange={(event) =>
                          setShowLayer4(event.target.checked)
                        }
                      />{" "}
                      <a href="/virtual-tour/view">Simpenan</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row text-black mt-6 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <div className=" text-black text-[17px] font-medium -mt-1 ml-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={showLayer5}
                        onChange={(event) =>
                          setShowLayer5(event.target.checked)
                        }
                      />{" "}
                      <a href="/virtual-tour/view">Waluran</a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row text-black mt-6 ml-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>
                  <div className=" text-black text-[17px] font-medium -mt-1 ml-2">
                    <div>
                      <input
                        type="checkbox"
                        checked={showLayer6}
                        onChange={(event) =>
                          setShowLayer6(event.target.checked)
                        }
                      />{" "}
                      <a href="/virtual-tour/view">Cilacap</a>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-full">
          <Map center={fromLonLat(center)} zoom={zoom}>
            <Layers>
              <TileLayer source={osm()} zIndex={0} />
              {showLayer1 && (
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
              )}
              {showLayer3 && (
                <VectorLayer
                  source={vector({
                    features: new GeoJSON().readFeatures(geojsonObject3, {
                      featureProjection: get("EPSG:3857"),
                    }),
                  })}
                  style={styles.MultiPolygon}
                />
              )}
              {showLayer4 && (
                <VectorLayer
                  source={vector({
                    features: new GeoJSON().readFeatures(geojsonObject4, {
                      featureProjection: get("EPSG:3857"),
                    }),
                  })}
                  style={styles.MultiPolygon}
                />
              )}
              {showLayer5 && (
                <VectorLayer
                  source={vector({
                    features: new GeoJSON().readFeatures(geojsonObject5, {
                      featureProjection: get("EPSG:3857"),
                    }),
                  })}
                  style={styles.MultiPolygon}
                />
              )}
              {showLayer6 && (
                <VectorLayer
                  source={vector({
                    features: new GeoJSON().readFeatures(geojsonObject6, {
                      featureProjection: get("EPSG:3857"),
                    }),
                  })}
                  style={styles.MultiPolygon}
                />
              )}
            </Layers>
            <Controls>
              <FullScreenControl />
            </Controls>
          </Map>
        </div>
      </div>
    </>
  );
};

export default Home;
