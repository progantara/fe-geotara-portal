import React, { useEffect, useState } from "react";
import PortalTemplate from "../../Component/Layout";

// image
import articel1 from "../../Assets/img/Article-1.jpg";
import { getAllArtikel } from "../../Services/ArtikelService";
import ArtikelCard from "../../Component/Card/ArtikelCard";
import { Link } from "react-router-dom";
import BgHero from "../../Assets/img/hero.jpg";
import { BiChevronRight } from "react-icons/bi";

const BannerFirstArtikel = () => {
  return (
    <Link to="/artike/detail" className="relative">
      <div className="h-96 w-full overflow-hidden relative lg:basis-2/3">
        <div className="w-full h-full bg-gray-900 absolute opacity-40 rounded-lg"/>
        <div className="absolute text-white bottom-28 left-10 lg:bottom-16">
          <h1 className="text-xl font-bold lg:text-3xl"><a href="/artike/detail">Keragaman Keindahan, Pariwisata Indonesia</a></h1>
          <div className="flex gap-2 items-center text-xs lg:text-base">
            <p className="">Selly Ardiyaiti</p>
            <div class="w-1 h-1 rounded-full bg-yellow-300 text-2xl"></div>
            <p className="">Juni 27, 2019</p>
          </div>
        </div>
        <img src={articel1} alt="" className="rounded-lg object-cover w-full h-full"/>
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
    <div className="felx flex-wrap">
      <div className="h-20 w-32">
        <img 
        className="object-cover h-full w-full rounded-lg"
        scr={
          ProcessingInstruction.env.REACT_APP_API_BASE_URL +
          '/store/artikel' +
          artikel.thumbnail
        }
        alt="post-2"
        />
      </div>
    </div>
    </Link>
  )
}

const Artikel = () => {
  const items = [{ label: "Artikel", url: "/artikel" }];

  const [artikels, setArtikels] = useState([]);

  useEffect(() => {
    getAllArtikel().then((res) => {
      setArtikels(res.data.data);
    });
  }, []);

  return (
    <PortalTemplate items={items}>
      <section className="p-5 lg:px-32">
        <div className="flex flex-col gap-5 lg:flex-row">
          <div>
            <BannerFirstArtikel />
          </div>
          <div className="w-full border-primary border-2 flex flex-col p-5 rounded-lg lg:basis-1/3">
              <h1 className="text-xl text-primary font-bold text-center mb-2">
                ARTIKEL POPULER
              </h1>
            <div className="flex gap-3 items-center">
              <div className="w-32 h-24 rounded-lg overflow-hidden">  
                <div className="text-primary">
                  {artikels.map((artikel, index)=>{
                    return <ListPopularArtikel key={index} artikel ={artikel}/>;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 lg:px-32">
        <h2 className="text-2xl font-bold text-primary mb-4">Artikel Terbaru</h2>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="w-full border-primary border-2 rounded-lg p-5 lg:basis-2/3">
            <div className="flex flex-col gap-2 lg:flex-row">
              {artikels.map((artikel)=>{
                return <ArtikelCard key={artikel.id} artikel={artikel} />;
              })}
            </div>
          </div>
          <div className="w-full border-primary border-2 rounded-lg p-5 lg:basis-1/3">
            <div className="flex flex-col justify-center gap-5">
              <div className="text-xl font-bold text-primary text-center">
                <h3>Kategori</h3>
              </div>
              <div className="flex justify-between text-primary">
                <div className="flex items-center gap-2 font-bold">
                  <div>
                    <BiChevronRight></BiChevronRight>
                  </div>
                  <div>
                    <p>Penginapan</p>
                  </div>
                </div>
                <div>
                  <p>(2)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-5 lg:px-32">
        <div className="bg-primary pt-5 pb-10 flex flex-col rounded-xl justify-center items-center gap-5 lg:w-1/2 lg:mx-auto">
          <h3 className="text-lg text-white">Newsletter</h3>
          <div className="flex flex-row gap-2 justify-center">
            <input
              type="text"
              placeholder="Alamat Email"
              className="block w-56 h-14 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 lg:w-96"
            />
            <button className="bg-yellow-300 hover:bg-yellow-400 text-dark text-sm font-semibold py-3 px-4 rounded-lg text-green-900">
              Subscribe
            </button>
          </div>
        </div>
      </section>

    </PortalTemplate>
  );
};

export default Artikel;