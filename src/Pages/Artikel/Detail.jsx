import React, { useEffect, useState } from "react";
import PortalTemplate from "../../Component/Layout";

// Image
import profile from "../../Assets/img/profile.jpg";

import { Link, useParams } from "react-router-dom";
import { getAllArtikel, getOneArtikel } from "../../Services/ArtikelService";

const handleTimestamp = (timestamp) => {
  const date = new Date(timestamp);
  const year = date.getFullYear();
  // get name month
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();

  return `${day} ${month}, ${year}`;
};

const CardTerkait = ({ artikel }) => {
  const handleJudul = (judul) => {
    // hanya ambil 20 karakter
    const trimText = judul.substring(0, 40);
    return trimText + "...";
  };

  return (
    <Link
      to={"/artikel/detail/" + artikel._id}
      className="flex items-center hover:bg-white p-2"
    >
      <div className="flex flex-wrap w-1/3 h-20">
        <img
          src={
            process.env.REACT_APP_API_BASE_URL +
            `/storage/artikel/` +
            artikel.thumbnail
          }
          alt="articel2"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="w-2/3 ml-2">
        <p className="text-lg font-bold">{handleJudul(artikel.judul)}</p>
        <p className="text-xs">{handleTimestamp(artikel.updated_at)}</p>
      </div>
    </Link>
  );
};

const Detail = () => {
  const items = [
    { label: "Artikel", url: "/artikel" },
    {
      label: "Keragaman Keindahan, Pariwisata Indonesia",
      url: "/artikel/detail",
    },
  ];

  const { id } = useParams();
  const [artikel, setArtikel] = useState({});
  const [artikels, setArtikels] = useState([]);

  useEffect(() => {
    getOneArtikel(id).then((res) => {
      setArtikel(res.data.data);
    });
    getAllArtikel().then((res) => {
      setArtikels(res.data.data);
    });
  }, [id]);

  return (
    <>
      <PortalTemplate items={items}>
        <div className="py-10 px-20 bg-green-100">
          <div id="title" className="mb-10">
            <h1 className="text-green-900 text-3xl font-bold">
              {artikel.judul}
            </h1>
            <div className="flex items-center pt-3">
              <img
                src={profile}
                alt="profile"
                className="w-10 h-10 rounded-full"
              />
              <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
              <p className="text-sm">Admin</p>
              <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
              <p className="text-sm">{artikel.tags ? artikel.tags[0] : ""}</p>
              <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
              <p className="text-sm">{handleTimestamp(artikel.updated_at)}</p>
            </div>
          </div>
          <div className="flex">
            <div className="w-4/6">
              <div id="thumbnail" className="flex flex-wrap">
                <img
                  src={
                    process.env.REACT_APP_API_BASE_URL +
                    `/storage/artikel/` +
                    artikel.thumbnail
                  }
                  alt="thumbnail"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div id="content" className="mt-10">
                <div dangerouslySetInnerHTML={{ __html: artikel.content }} />
              <hr class="h-px my-8 bg-gray-700 border-0 dark:bg-gray-700"></hr>
              </div>
              {/* Komentar */}
                <div className="max-w-1xl mx-auto">
                  <div className="flex justify-between items-center mb-6">
                    <h2  className="text-lg lg:text-2xl font-bold text-green-900">Komentar</h2>
                  </div>
                  <form className="mb-6">
                      <div className="py-2 px-4 mb-6 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                          <textarea id="comment" rows="6"
                              className="w-full text-base text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                              placeholder="Berikan Komentar Anda......." required></textarea>
                      </div>
                      <button type="submit"
                          className="inline-flex items-center py-4 px-8 text-base font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                          Kirim Komentar
                      </button>
                  </form>
                  <article className="p-6 mb-6 text-bas rounded-lg dark:bg-gray-900">
                    <footer className="flex justify-between items-center mb-2">
                      <div className="flex items-center">
                          <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                  class="mr-2 w-6 h-6 rounded-full"
                                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                  alt="Michael Gough"/>Michael Gough</p>
                          <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                  title="February 8th, 2022">Feb. 8, 2022</time></p>
                      </div>
                    </footer>
                      <p className="text-black dark:text-gray-400">Dalam keseluruhan, wisata ke Pantai Pangandaran adalah pengalaman yang tidak boleh dilewatkan. Kita dapat menikmati keindahan alam yang menakjubkan dan belajar tentang budaya lokal, sambil tetap menjaga kelestarian lingkungan dan kebudayaan setempat.</p>
                </article>
                </div>
            </div>
            <div className="w-2/6">
              <div className="pl-5">
                <div
                  id="tag"
                  className="border border-green-800 rounded-lg p-5 h-full"
                >
                  <h1 className="text-xl font-bold text-center mb-2">Tag</h1>
                  <div className="flex flex-wrap justify-center">
                    {artikel.tags &&
                      artikel.tags.map((tag, index) => (
                        <div className="bg-green-800 rounded-lg p-2 mr-2 mb-2">
                          <p className="text-white">{tag}</p>
                        </div>
                      ))}
                  </div>
                </div>
                <div
                  id="related"
                  className="border border-green-800 rounded-lg p-5 h-full mt-5"
                >
                  <h1 className="text-xl font-bold text-center mb-2">
                    Artikel Terkait
                  </h1>
                  {artikels &&
                    artikels.map((artikel, index) => (
                      <CardTerkait key={index} artikel={artikel} />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </PortalTemplate>
    </>
  );
};

export default Detail;
