import React, { useEffect, useState } from "react";
import PortalTemplate from "../../Component/Layout";

// image
import articel1 from "../../Assets/img/Article-1.jpg";
import { getAllArtikel } from "../../Services/ArtikelService";
import ArtikelCard from "../../Component/Card/ArtikelCard";
import { Link } from "react-router-dom";

const BannerFirstArtikel = () => {
  return (
    <Link to="/artikel/detail" className="relative">
    <div className="md:flex">
      <div className="md:shrink-0">
      <img
        className="rounded-lg brightness-75 h-[20rem] w-[40rem] md:h-[35rem] md:w-[20rem]"
        src={articel1}
        alt="post-1"
      />
      </div>
    </div>
      <div className="absolute bottom-[10%] left-[3rem] xl:left-[10%]">
        <div className="font-dmserif text-lg xl:text-3xl font-semibold text-white mt-96 -ml-10">
          Keragaman Keindahan Pariwista Indonesia
        </div>
        <div className="flex flex-row">
          <p className="text-sm text-white font-base -ml-10">Selly Ardiyati</p>
          <p className="text-yellow-200 text-2xl ml-2 -mt-2">•</p>
          <p className="text-sm text-white font-base ml-2"> Juni 27, 2019</p>
        </div>
      </div>
    </Link>
  );
};

const ListPopularArtikel = ({ artikel }) => {
  const handleJudul = (judul) => {
    // hanya ambil 20 karakter
    const trimText = judul.substring(0, 40);
    return trimText + "...";
  };

  const handleTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    // get name month
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();

    return `${day} ${month}, ${year}`;
  };

  return (
    <Link
      to={"/artikel/detail/" + artikel._id}
      className="flex items-center p-2 hover:bg-white mb-2"
    >
      <div className="flex flex-wrap">
        <div className="h-20 w-32">
          <img
            className="object-cover h-full w-full rounded-lg"
            src={
              process.env.REACT_APP_API_BASE_URL +
              `/storage/artikel/` +
              artikel.thumbnail
            }
            alt="post-2"
          />
        </div>
      </div>
      <div className="ml-3 text-green-900">
        <p className="font-bold text-md">{handleJudul(artikel.judul)}</p>
        <div className="flex flex-row items-center">
          <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
          <p className="text-sm">{handleTimestamp(artikel.updated_at)}</p>
        </div>
      </div>
    </Link>
  );
};

const Artikel = () => {
  const items = [{ label: "Artikel", url: "/artikel" }];

  const [artikels, setArtikels] = useState([]);

  useEffect(() => {
    getAllArtikel().then((res) => {
      setArtikels(res.data.data);
    });
  }, []);

  return (
    <>
      <PortalTemplate items={items}>
        <div className="py-10 px-10 xl:px-20 bg-green-100">
          <div className="flex mb-10">
            <div className="block">
              <BannerFirstArtikel />
            </div>
            <div className="block border border-green-800 rounded-lg ml-10 xl:ml-20 p-5 h-full">
              <h1 className="text-xl font-bold text-center mb-2">
                Artikel Populer
              </h1>
              {artikels.map((artikel, index) => {
                return <ListPopularArtikel key={index} artikel={artikel} />;
              })}
            </div>
          </div>
          <div className="">
            <p className="text-green-900 text-4xl font-semibold mb-4 mt-3">
              Artikel Terbaru
            </p>
            <div className="max-w-4xl border border-green-800 rounded-lg flex flex-col mb-10 p-5">
              {artikels.map((artikel) => {
                return <ArtikelCard key={artikel.id} artikel={artikel} />;
              })}
            </div>

            <div className="pt-10 pb-14 px-40 bg-green-600 flex-col justify-center items-center text-white rounded-xl mx-auto mb-10">
              <p className="mb-2 text-center">Newsletter</p>
              <div className="flex flex-row gap-2 justify-center">
                <input
                  type="text"
                  placeholder="Alamat Email"
                  className="block w-96 h-14 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
                <button className="bg-yellow-300 hover:bg-yellow-400 text-dark text-sm font-semibold py-3 px-4 rounded-lg text-green-900">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </PortalTemplate>
    </>
  );
};

export default Artikel;
