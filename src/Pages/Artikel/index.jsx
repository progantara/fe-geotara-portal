import React, { useEffect, useState } from "react";
import PortalTemplate from "../../Component/Layout";
import { getAllArtikel } from "../../Services/ArtikelService";

// image
import profile from "../../Assets/img/profile.jpg";
import articel1 from "../../Assets/img/Article-1.jpg";
import articel2 from "../../Assets/img/Article-2.jpg";
import articel3 from "../../Assets/img/Article-3.jpg";
import articel4 from "../../Assets/img/Article-4.jpg";
import articel5 from "../../Assets/img/Article-5.jpg";
import articel6 from "../../Assets/img/Article-6.jpg";
import articel7 from "../../Assets/img/Article-7.jpg";
import articel8 from "../../Assets/img/Article-8.jpg";
import articel9 from "../../Assets/img/Article-9.jpg";
import { all } from "axios";

const Artikel = () => {
  const items = [{ label: "Artikel", url: "/artikel" }];
  let data = [1, 2, 3, 4, 5, 6];
  const [allArtikel, setAllArtikel] = useState([]);
  useEffect(() => {
    getAllArtikel().then((res) => {
      setAllArtikel(res.data.data);
    });
  }, []);
  return (
    <>
      <PortalTemplate items={items}>
        <div className="bg-green-100 flex flex-col">
          {/* OneArtikel */}
          <div className="flex">
            <div className="ml-20 mt-7 mb-10 flex flex-row space-x-20">
              {allArtikel.map((item, index) => {
                  if (index === 0){
                    return (
                      <>
                        <div className="flex">
                          <img
                            className="rounded-lg brightness-75 max-w-4xl bg-fixed"
                            src={"http://127.0.0.1:8000/storage/artikel/" + item.thumbnail}
                            alt="post-1"
                          />
                        </div>
                        <div className="absolute mt-96">
                          <a
                            href={"/detail/"+ item._id}
                            className="font-dmserif text-3xl font-semibold text-white mt-96 -ml-10"
                          >
                            {item.judul}
                          </a>
                          <div className="flex flex-row">
                            <p className="text-sm text-white font-base -ml-10">
                              Selly Ardiyati
                            </p>
                            <p className="text-yellow-200 text-2xl ml-2 -mt-2">•</p>
                            <p className="text-sm text-white font-base ml-2">
                              Juni 27, 2019
                            </p>
                          </div>
                        </div>
                      </>
                    )
                  }
                })}

              {/* Top5Artikel */}
              <div className="block max-w-sm border border-green-800 rounded-lg ml-20">
              {allArtikel.map((item, index)=>{
                if (index ===0){
                  return(
                <img
                  className="rounded-lg h-20 w-32 mt-10 ml-5"
                  src={"http://127.0.0.1:8000/storage/artikel/" + item.thumbnail}
                  alt="post-2"
                />
                  )
                }
              })}
                <div className="text-green-900 ml-40 -mt-20">
                {allArtikel.map((item, index)=>{
                  if (index ===0){
                    return(
                  <a href={"/Detail/"+ item._id} className="font-bold text-lg lg:text-xl">
                    {item.judul}
                  </a>
                    )
                  }
                })}
                  <p className="text-sm">Agustus 26, 2022</p>
                </div>
              </div>
            </div>
          </div>
          {/* AllArtikel */}
          <div className="ml-20 ">
            <p className="text-green-900 text-4xl font-semibold mb-4 mt-3">
              Artikel
            </p>
            <div className="flex flex-row">
              <div className="max-w-4xl border border-green-800 rounded-lg flex flex-col mb-10">
                {  
                  allArtikel.map((item, index) => {
                    if (index === 0){
                      return (
                        <div className="flex">
                          <img
                            className="rounded-lg w-[45rem] h-[12rem] mt-7 ml-7 mb-3 object-cover object-right"
                            src={"http://127.0.0.1:8000/storage/artikel/" + item.thumbnail}
                            alt="post-1"
                          />
                          <div className="mt-9 ml-8 ">
                            <div className="tracking-wide text-sm text-dark font-semibold flex flex-row">
                              <img
                                className="w-10 h-8 rounded-full"
                                src={profile}
                                alt={profile}
                              />
                              <p className="text-sm text-dark mt-2 ml-2">NurFauziyah</p>
                              <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
                              <p className="text-sm text-dark mt-2">{item.tags[0]}</p>
                              <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
                              <p className="text-sm text-dark mt-2">September 21, 2022</p>
                            </div>
                            <a
                              href={"/Detail/"+ item._id}
                              className="block mt-1 text-xl font-semibold text-green-900"
                            >
                              {item.judul}
                            </a>
                            <a
                              href={"/Detail/"+ item._id}
                              className="block mt-1 text-xl font-semibold text-green-900"
                            >
                              Geopark Ciletuh Sukabumi
                            </a>
                            <p className="mt-2 text-green-900 text-base mr-10">
                              {item.content}
                            </p>
                              <span className="flex h-[1px]  bg-green-600 lg:w-11/12 mb-4 mt-9"></span>
                          </div>
                        </div>
                      )
                    }
                  })
                }
              </div>
              <div>
                <div className="max-w-4xl border border-green-800 rounded-lg flex flex-col mb-10 ml-20 p-5 w-[380px]">
                  <p className="font-semibold text-3xl text-green-900 text-center">Kategori</p>
                  {allArtikel.map((item, index)=>{
                    return  (
                  <div className="flex justify-between mt-3">
                    <div className="flex">
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16" id="IconChangeColor"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" id="mainIconPathAttribute"></path> </svg>
                      <p className="font-semibold text-lg text-green-900 text-left ">{item.tags[1]}</p>
                    </div>
                    <p className="font-semibold">{"(2)"}</p>
                  </div>
                    )
                  })}
                </div>
              </div>
            </div>
            {/* Newsletter */}
            <div className="w-fit pt-10 pb-14 px-40 bg-green-600 flex-col justify-center items-center text-white rounded-xl mx-auto mb-10">
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