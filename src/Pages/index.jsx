import React, { useEffect, useState } from "react";
import PortalTemplate from "../Component/Layout";
import BgHero from "../Assets/img/hero.jpg";
import "../Assets/Css/custom/custom.css";
import { FiArrowRight, FiCamera, FiMapPin, FiUser } from "react-icons/fi";
import Button from "../Component/Button/Button";
import { Card } from "../Component/Card/Card";
import IMAGES from "../Assets/img";
import { Link } from "react-router-dom";
import { getTopWisata } from "../Services/WisataService";
import { getTopPenginapan } from "../Services/PenginapanService";

const Hero = () => {
  return (
    <section className="bg-cover bg-center bg-pattern">
      <div className="flex justify-between p-5 md:p-0 md:pt-8 xl:px-20">
        {/* Hero */}
        <div className="flex flex-col text-primary text-center md:px-14 md:text-left md:flex-row md:flex-wrap md:items-center md:py-14 xl:justify-between">
          {/* Image Hero */}
          <div className="order-1 md:order-2 md:basis-1/2 xl:flex xl:justify-end">
            <img
              src={BgHero}
              alt="Background Home"
              className="rounded-lg mb-5 md:mb-0 md:rounded-xl md:rounded-tl-[70px] xl:w-[500px] xl:h-[350px]"
            />
          </div>

          {/* Caption */}
          <div className="order-2 md:order-1 md:basis-1/2">
            <h1 className="text-3xl font-bold md:text-4xl xl:text-6xl">
              Lupakan Kerja, Mulailah Liburan
            </h1>
            <p className="mt-2 mb-5 text-sm md:mt-5 xl:text-lg">
              Isilah hari-hari libur kamu dengan sesuatu{" "}
              <span className="hidden md:block"></span> yang membuat kamu
              tersenyum, tertawa, dan bersyukur.
            </p>
            {/* Button */}
            <div className="hidden md:block">
              <Button size="small" width="content">
                <Link to="/virtual-tour">
                  <div className="md:flex md:items-center">
                    <span className="mr-3 xl:text-base">Mulai Sekarang</span>
                    <FiArrowRight />
                  </div>
                </Link>
              </Button>
            </div>
          </div>

          {/* Milestones */}
          <div className="order-3 md:order-4 md:mt-10">
            <div className="flex flex-row mb-5 justify-between md:gap-10">
              {/* Item 1 */}
              <div className="flex flex-col items-center basis-1/3">
                <FiMapPin className="w-12 h-12 mb-2"></FiMapPin>
                <div className="flex flex-col text-center">
                  <p className="text-sm">
                    <span className="font-bold">1000+</span>
                  </p>
                  <p className="text-sm">Wisata</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col items-center basis-1/3">
                <FiCamera className="w-12 h-12 mb-2"></FiCamera>
                <div className="flex flex-col text-center">
                  <p className="text-sm">
                    <span className="font-bold">5000+</span>
                  </p>
                  <p className="text-sm">Spot Foto</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col items-center basis-1/3">
                <FiUser className="w-12 h-12 mb-2"></FiUser>
                <div className="flex flex-col text-center">
                  <p className="text-sm">
                    <span className="font-bold">1000+</span>
                  </p>
                  <p className="text-sm">Pengunjung Baru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="order-4 md:hidden">
            <Button size="small" width="full">
              <Link to="/virtual-tour">
                <div className="flex items-center justify-center">
                  <span className="mr-3 flex">Mulai Sekarang</span>
                  <FiArrowRight />
                </div>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TopWisata = () => {
  const [topWisata, setTopWisata] = useState([]);

  useEffect(() => {
    getTopWisata().then((res) => {
      setTopWisata(res.data.data);
    });
  }, []);

  return (
    <section className="bg-cover bg-center bg-pattern mb-5">
      <div className="flex flex-col justify-between p-5 md:p-0 md:pt-8 md:px-14 lg:px-16 xl:px-32">
        {/* Title */}
        <div className="flex flex-col">
          <h2 className="text-base font-extrabold text-gray-600 md:text-xl">
            Top Wisata
          </h2>
          <h1 className="mb-8 text-md font-extrabold text-primary md:text-3xl">
            Paling Diminati Oleh Kebanyakan Orang
          </h1>
        </div>

        {/* Card Wisata */}
        <div className="flex flex-col gap-3 lg:flex-row lg:h-96 lg:justify-between xl:h-[600px]">
          {/* Card Hero, loop only first item */}
          {topWisata.map((item, index) => {
            if (index === 0) {
              return (
                <div
                  key={item._id}
                  className="w-full h-32 bg-white rounded-xl overflow-hidden relative lg:h-full lg:w-96 xl:w-[500px]"
                >
                  <div className="absolute top-0 right-0 bg-yellow-300 z-10 px-6 py-2 rounded-bl-3xl">
                    <p className="text-sm text-primary font-bold">
                      {new Intl.NumberFormat("id-ID", {
                        style: "currency",
                        currency: "IDR",
                        minimumFractionDigits: 0,
                      }).format(item.harga_tiket)}
                    </p>
                  </div>

                  <div className="absolute bottom-3 left-3 text-white z-10">
                    <p className="text-lg lg:text-xl">{item.nama}</p>
                    <p className="text-sm lg:text-lg">{item.kategori}</p>
                  </div>

                  <div className="w-full h-full bg-gray-900 absolute opacity-40" />
                  <img
                    src={
                      process.env.REACT_APP_API_BASE_URL +
                      "/storage/wisata/" +
                      item.thumbnail
                    }
                    alt="top-wisata"
                    className="w-full object-cover lg:h-full"
                  />
                </div>
              );
            }
          })}

          {/* Card 4 */}
          <div className="flex flex-row flex-wrap gap-y-3 justify-between">
            {topWisata.map((item, index) => {
              if (index !== 0) {
                return (
                  <div
                    key={item._id}
                    className="w-[49%] h-52 bg-white rounded-xl overflow-hidden relative object-cover lg:h-[48%]"
                  >
                    <div className="absolute top-0 right-0 bg-yellow-300 z-10 px-6 py-2 rounded-bl-3xl">
                      <p className="text-sm text-primary font-bold">
                        {new Intl.NumberFormat("id-ID", {
                          style: "currency",
                          currency: "IDR",
                          minimumFractionDigits: 0,
                        }).format(item.harga_tiket)}
                      </p>
                    </div>

                    <div className="absolute bottom-3 left-3 text-white z-10">
                      <p className="text-base lg:text-xl">{item.nama}</p>
                      <p className="text-sm lg:text-lg">{item.kategori}</p>
                    </div>

                    <div className="w-full h-full bg-gray-900 absolute opacity-40" />
                    <img
                      src={
                        process.env.REACT_APP_API_BASE_URL +
                        "/storage/wisata/" +
                        item.thumbnail
                      }
                      alt="top-wisata"
                      className="w-full object-cover lg:h-full"
                    />
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Penginapan = () => {
  const [topPenginapan, setTopPenginapan] = useState([]);

  useEffect(() => {
    getTopPenginapan().then((res) => {
      setTopPenginapan(res.data.data);
    });
  }, []);

  return (
    <section>
      <div className=" flex flex-col p-5 bg-primary md:px-14 xl:px-32">
        {/* Head */}
        <div className="flex flex-col">
          <p className="font-extrabold text-gray-400 md:text-xl xl:text-2xl">
            Top Penginapan
          </p>
          <h2 className="text-md font-extrabold mb-8 text-white md:text-2xl xl:text-3xl">
            Pilih Penginapan Unggulan Untuk Kenyamanan Anda
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-wrap gap-5 justify-center xl:justify-between xl:gap-10">
          {topPenginapan.map((item, index) => {
            return (
              <Card
                key={item._id}
                title={item.nama}
                image={
                  process.env.REACT_APP_API_BASE_URL +
                  "/storage/penginapan/" +
                  item.thumbnail
                }
                address={item.lokasi.alamat}
                rating={item.rating}
                price={new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(item.harga)}
                link="#"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Entertainment = () => {
  const iframe_container = {
    left: 0,
    width: "100%",
    height: 500,
    position: "relative",
  };

  const iframe = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    border: 0,
  };
  return (
    <section>
      <div className="flex flex-col p-5 md:px-14 xl:px-32">
        {/* Head */}
        <div className="flex flex-col">
          <p className="font-extrabold text-gray-400 md:text-xl xl:text-2xl">
            Entertainment Baru
          </p>
          <h2 className="text-md font-extrabold mb-4 text-primary md:text-2xl xl:text-3xl">
            Buatlah Memori Bersama Kami Sekarang
          </h2>
        </div>

        {/* Content */}
        <div className="flex flex-row flex-wrap justify-center gap-2 md:flex-nowrap">
          <div className="w-[45%] h-64 rounded-xl overflow-hidden relative md:h-72 lg:h-96 xl:h-[530px]">
            <div className="w-full h-full bg-gray-900 absolute opacity-40"></div>
            
            <iframe
              src="https://www.tiktok.com/embed/7193681471612226842"
              style={iframe}
              allowFullScreen
              allow="encrypted-media;"
            ></iframe>
            
          </div>
          <div className="w-[45%] h-64 rounded-xl overflow-hidden relative md:h-72 lg:h-96 xl:h-[530px]">
            <div className="w-full h-full bg-gray-900 absolute opacity-40"></div>
            <iframe
              src="https://www.tiktok.com/embed/7149067586339179803"
              style={iframe}
              allowFullScreen
              allow="encrypted-media;"
            ></iframe>
          </div>
          <div className="w-[45%] h-64 rounded-xl overflow-hidden relative md:h-72 lg:h-96 xl:h-[530px]">
            <div className="w-full h-full bg-gray-900 absolute opacity-40"></div>
            <iframe
              src="https://www.tiktok.com/embed/7156476227698642202"
              style={iframe}
              allowFullScreen
              allow="encrypted-media;"
            ></iframe>
          </div>
          <div className="w-[45%] h-64 rounded-xl overflow-hidden relative md:h-72 lg:h-96 xl:h-[530px]">
            <div className="w-full h-full bg-gray-900 absolute opacity-40"></div>
            <iframe
              src="https://www.tiktok.com/embed/7140242882434288923"
              style={iframe}
              allowFullScreen
              allow="encrypted-media;"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

const Objek = () => {
  return (
    <section>
      <div className="relative">
        <div className="w-full h-full overflow-hidden relative xl:h-screen">
          <div className="w-full h-full bg-gray-900 absolute opacity-40"></div>
          <img
            src={IMAGES.hero}
            alt="Virtual Tour"
            className="w-full h-96 object-cover xl:h-screen"
          />
        </div>

        <div className="p-5 absolute bottom-0 left-0 flex flex-col justify-center w-full h-full text-white md:px-14 xl:px-32">
          <p className="text-lg font-bold uppercase md:text-2xl xl:text-4xl">
            Menjelajahi Beragam Objek Wisata Di Cikaso
          </p>
          <p className="text-sm mt-2 mb-4 xl:text-lg">
            Cikaso merupakan sebuah objek wisata di Kabupaten Ciletuh yang kaya
            akan berbagai geosite menakjubkan.
          </p>
          <button className="w-40 flex justify-center px-5 py-3 bg-yellow-200 rounded-md">
            <span className="text-sm font-bold text-primary">
              Lihat Virtual Tour
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <PortalTemplate>
      <Hero />
      <TopWisata />
      <Penginapan />
      <Entertainment />
      <Objek />
    </PortalTemplate>
  );
};

export default Home;
