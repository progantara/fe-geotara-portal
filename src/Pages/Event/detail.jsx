import React from "react";
import PortalTemplate from "../../Component/Layout";
import { IoArrowForwardSharp } from "react-icons/io5";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BiMap } from "react-icons/bi";

//Image
import BgEvent1 from "../../Assets/img/event-1.jpeg";
const EventDetail = () => {
  const items = [
    { label: "Event", url: "/Event" },
    { label: "Geopark Ciletuh Spektakuler (GCS)", url: "/Event/detail" },
  ];

  return (
    <PortalTemplate items={items}>
      <div className="py-10 px-20 bg-green-100">
        <h2 className="mb-2 text-1xl font-bold text-primary">Event</h2>
        <h1 className="mb-8 text-5xl font-extrabold text-green-800">
          Geopark Ciletuh Spektakuler (GCS)
        </h1>
        <div className="grid grid-cols-3 ">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={BgEvent1}
              alt="Gambar"
              className=" bg-center object-cover h-[30rem] w-[25rem] filter brightness-75 bg-cover rounded-2xl"
            />
            <div className="absolute flex flex-col items-start justify-end w-full h-full bottom-10 left-4">
              <p className="text-xs text-white">Rp 20.000 - Rp 100.000</p>
              <p className="text-lg font-bold text-white cursor-pointer mt-1">
                Geopark Ciletuh Spektakuler (GCS)
              </p>
              <p className="flex items-center space-x-3 mb-2 text-xs text-white color-white ">
                <IoCalendarClearOutline className="mr-1" />
                Desember 30
                <BiMap className="mr-1" />
                Pantai Palangpang, Geopark Ciletuh
              </p>
              <div>
                <button className="px-3 py-1 font-bold text-xs text-black bg-yellow-200 hover:bg-yellow-300 rounded-lg">
                  <a href="">Pesan Tiket</a>
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-2 border-4 border-white rounded-lg bg-white">
            <div class="m-3 text-xl font-bold flex justify-center">Detail</div>
            <div className="text-dark text-base mx-4 my-2">
              <p>
                GCS dilaksanakan untuk mendongkrak sektor pariwisata disini.
                Untuk meningkatkan perekonomian dan mengembangkan Geopark
                Ciletuh di mata dunia. Acaranya antara lain Ciletuh Berzikir,
                Lomba Tradisional, Festival Band, Pertunjukan Bebeguan, dan
                Festival Lampion Hias.
              </p>
              <div className="pt-5 font-bold grid grid-cols-2">
                Tanggal :<div className="">Lokasi :</div>
              </div>
              <div className="grid grid-cols-2">
                30 Desember 2023
                <div className="">Pantai Palangpang, Geopark Ciletuh</div>
              </div>
              <div className="pt-3 font-bold grid grid-cols-2">
                Waktu :<div className="">Kontak :</div>
              </div>
              <div className="grid grid-cols-2">
                08.30 WIB - 23.59 WIB
                <div className="">(WA) 089512345678</div>
              </div>
              <div className="pt-3 font-bold grid grid-cols-2">
                Organizer :<div className="">Harga Tiket :</div>
              </div>
              <div className="grid grid-cols-2">
                Badan Ciletuh PelabuhanRatu
                <div className="">Rp 15.000</div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="m-4 text-white h-[3rem] w-[44rem] font-semibold bg-green-700 hover:bg-green-800 rounded-lg">
                Pesan Sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </PortalTemplate>
  );
};

export default EventDetail;
