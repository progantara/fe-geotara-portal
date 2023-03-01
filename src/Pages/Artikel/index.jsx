import React from 'react';
import PortalTemplate from '../../Component/Layout';

// image
import profile from '../../Assets/img/profile.jpg'
import articel1 from '../../Assets/img/Article-1.jpg'
import articel2 from '../../Assets/img/Article-2.jpg'
import articel3 from '../../Assets/img/Article-3.jpg'
import articel4 from '../../Assets/img/Article-4.jpg'
import articel5 from '../../Assets/img/Article-5.jpg'
import articel6 from '../../Assets/img/Article-6.jpg'
import articel7 from '../../Assets/img/Article-7.jpg'
import articel8 from '../../Assets/img/Article-8.jpg'
import articel9 from '../../Assets/img/Article-9.jpg'

import { Link, useNavigate } from 'react-router-dom';

const Artikel = () => {
	return (
    <>
      <PortalTemplate>
        <div className="p-2 pt-1 bg-green-600 sm:px-20 text-white">
          <span>Beranda {">"} Artikel</span>
        </div>
        <div className="bg-green-100 flex flex-col">
          <div className="flex ">
            <div className="ml-20 mt-7 mb-10 flex flex-row space-x-20">
              <div className="flex">
                <img
                  className="rounded-lg brightness-75 max-w-4xl bg-fixed"
                  src={articel1}
                />
              </div>
              <div class="absolute mt-96">
                <a
                  href="/Detail"
                  class="font-dmserif text-3xl font-semibold text-white mt-96 -ml-10"
                >
                  Keragaman Keindahan,
                </a>
                <p class="mb-3 text-3xl text-white font-semibold -ml-10">
                  Pariwista Indonesia
                </p>
                <div className="flex flex-row">
                  <p class="text-sm text-white font-base -ml-10">
                    Selly Ardiyati
                  </p>
                  <p class="text-yellow-200 text-2xl ml-2 -mt-2">•</p>
                  <p class="text-sm text-white font-base ml-2">
                    {" "}
                    Juni 27, 2019
                  </p>
                </div>
              </div>
              <div class="block max-w-sm border border-green-800 rounded-lg ml-20">
                <img
                  className="rounded-lg h-20 w-32 mt-10 ml-5"
                  src={articel2}
                />
                <div className="text-green-900 ml-40">
                  <p className="-mt-20 font-bold text-lg">
                    Senyuman Baru dari Geopark Ciletuh
                  </p>
                  <p className="text-sm">Agustus 26, 2022</p>
                </div>
                <img
                  className="rounded-lg h-20 w-32 mt-7 ml-5"
                  src={articel3}
                />
                <div className="text-green-900 ml-40">
                  <p className="-mt-20 font-bold text-lg flex ">
                    Pesona Geopark Ciletuh
                  </p>
                  <p className="text-sm">Febuari 20, 2022</p>
                </div>
                <img
                  className="rounded-lg h-20 w-32 mt-14 ml-5"
                  src={articel4}
                />
                <div className="text-green-900 ml-40">
                  <p className="-mt-20 font-bold text-lg">
                    Berpetualang Menyusuri Geopark
                  </p>
                  <p className="text-sm">November 15, 2022</p>
                </div>
                <img
                  className="rounded-lg h-20 w-32 mt-7 ml-5"
                  src={articel5}
                />
                <div className="text-green-900 ml-40">
                  <p className="-mt-20 font-bold text-lg">
                    Geopark Ciletuh Spektakuler
                  </p>
                  <p className="text-sm">Desember 31, 2022</p>
                </div>
                <img
                  className="rounded-lg h-20 w-32 mt-7 ml-5"
                  src={articel6}
                />
                <div className="text-green-900 ml-40">
                  <p className="-mt-20 font-bold text-lg">
                    Mengenal Geopark Ciletuh
                  </p>
                  <p className="mb-4 text-sm">May 02, 2018</p>
                </div>
              </div>
            </div>
          </div>

          <div className="ml-20 ">
            <p className="text-green-900 text-4xl font-semibold mb-4 mt-3">
              Artikel
            </p>
            <div class="max-w-4xl border border-green-800 rounded-lg flex flex-col mb-10">
              <div className="flex">
                <img
                  className="rounded-lg w-3/4 h-40 mt-7 ml-7 mb-3 object-cover object-right"
                  src={articel7}
                />
                <div class="mt-9 ml-8 ">
                  <div class="tracking-wide text-sm text-dark font-semibold flex flex-row">
                    <img className="w-10 h-8 rounded-full" src={profile} />
                    <p className="text-sm text-dark mt-2 ml-2">NurFauziyah</p>
                    <p class="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
                    <p className="text-sm text-dark mt-2">Wisata</p>
                    <p class="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
                    <p className="text-sm text-dark mt-2">September 21, 2022</p>
                  </div>
                  <a
                    href="#"
                    class="block mt-1 text-xl font-medium text-green-900"
                  >
                    Lagi Viral, yuk Healing ke
                  </a>
                  <a
                    href="#"
                    class="block mt-1 text-xl font-medium text-green-900"
                  >
                    Geopark Ciletuh Sukabumi{" "}
                  </a>
                  <p class="mt-2 text-green-900 text-base">
                    Sukabumi menyimpan berbagai wisata alam yang membuat betah
                    berlama - lama di sini. Dengan dataran tinggi, pegunungan
                    dan pantai indah, menjadikan kawasan ini selalu menjadi
                    favorit untuk liburan
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <span class="h-px  bg-green-600 lg:w-11/12 mb-4 mt-4"></span>
              </div>
              <div className="flex">
                <img
                  className="rounded-lg w-4/6 h-40 mt-7 ml-7 mb-3 object-cover object-bottom"
                  src={articel8}
                />
                <div class="mt-9 ml-8 ">
                  <div class="tracking-wide text-sm text-dark font-semibold flex flex-row">
                    <img className="w-10 h-8 rounded-full" src={profile} />
                    <p className="text-sm text-dark mt-2 ml-2">Tiara</p>
                    <p class="text-yellow-200 text-2xl ml-1 mr-1">•</p>
                    <p className="text-sm text-dark mt-2 ml-2">Wisata</p>
                    <p class="text-yellow-200 text-2xl ml-1 mr-1">•</p>
                    <p className="text-sm text-dark mt-2 ml-2">
                      Oktober 09, 2020
                    </p>
                  </div>
                  <a
                    href="#"
                    class="block mt-1 text-xl font-medium text-green-900"
                  >
                    Lagi Viral, yuk Healing ke
                  </a>
                  <a
                    href="#"
                    class="block mt-1 text-xl font-medium text-green-900"
                  >
                    Geopark Ciletuh Sukabumi{" "}
                  </a>
                  <p class="mt-2 text-green-900 text-base">
                    Wisata ke Geopark Ciletuh adalah satu hal yang harus kamu
                    masukkan ke dalam wishlist. Geopark Ciletuh adalah
                    satu-satunya Global Geopark Network yang ada di Jawa Barat.{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <span class="h-px  bg-green-600 lg:w-11/12 mb-4 mt-4"></span>
              </div>
              <div className="flex">
                <img
                  className="rounded-lg w-2/5 h-40 mt-7 ml-7 mb-3 object-cover object-bottom"
                  src={articel9}
                />
                <div class="mt-9 ml-8 ">
                  <div class="tracking-wide text-sm text-dark font-semibold flex flex-row">
                    <img className="w-10 h-8 rounded-full" src={profile} />
                    <p className="text-sm text-dark mt-2 ml-2">Echi</p>
                    <p class="text-yellow-200 text-2xl ml-1 mr-1">•</p>
                    <p className="text-sm text-dark mt-2 ml-2">Wisata</p>
                    <p class="text-yellow-200 text-2xl ml-1 mr-1">•</p>
                    <p className="text-sm text-dark mt-2 ml-2">
                      Februari 20, 2020
                    </p>
                  </div>
                  <a
                    href="#"
                    class="block mt-1 text-xl font-medium text-green-900"
                  >
                    Lagi Viral, yuk Healing ke
                  </a>
                  <a
                    href="#"
                    class="block mt-1 text-xl font-medium text-green-900"
                  >
                    Geopark Ciletuh Sukabumi{" "}
                  </a>
                  <p class="mt-2 mb-5 text-green-900 text-base">
                    Geopark Ciletuh Palabuhanratu, Sukabumi kini resmi menjadi
                    global geopark pertama di Jawa Barat.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="flex justify-center">
              <div className="border-green-600 bg-green-600 rounded-xl mb-10 w-2/4">
                <h1 className="text-center text-white mt-5">Newsletter</h1>
                <div className="mb-3 mt-4 ml-20 mr-40">
                  <input
                    type="text"
                    placeholder="Alamat Email"
                    class="block w-full p-3 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="mx-7 flex flex-col items-end static -mt-14">
                  <button class="bg-yellow-300 hover:bg-yellow-400 text-dark text-sm font-semibold py-3 px-4 rounded-lg mb-10">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PortalTemplate>
    </>
  );
};

export default Artikel;
