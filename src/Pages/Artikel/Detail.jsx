import React from "react";
import PortalTemplate from "../../Component/Layout";

// Image
import profile from "../../Assets/img/profile.jpg";
import articel1 from "../../Assets/img/Article-1.jpg";
import articel2 from "../../Assets/img/Article-2.jpg";
import articel3 from "../../Assets/img/Article-3.jpg";
import articel4 from "../../Assets/img/Article-4.jpg";
import articel5 from "../../Assets/img/Article-5.jpg";
import articel6 from "../../Assets/img/Article-6.jpg";

import { Link, useNavigate } from "react-router-dom";

const Detail = () => {
  const items = [
		{ label: 'Artikel', url: '/artikel' },
		{ label: 'Artikel Detail', url: '/artikel/detail' },
	];

  return (
    <>
      <PortalTemplate items={items}>
        <div className="bg-green-100 flex flex-col">
          <div className="flex flex-row tracking-wider ml-20">
            <h1 className="text-green-900 text-4xl font-semibold mt-10">
              Keragaman Keindahan, Pariwisata Indonesia
            </h1>
          </div>
          <div className="flex flex-row mt-3">
            <img className="w-10 h-8 rounded-full ml-20 mt-3" src={profile} />
            <p className="text-sm text-dark font-base ml-3 mt-3">
              Selly Ardiayi
            </p>
            <p className="text-3xl text-yellow-200 font-base ml-2 mt-1">•</p>
            <p className="text-sm text-dark font-base ml-2 mt-3"> Alam </p>
            <p className="text-3xl text-yellow-200 font-base ml-2 mt-1">•</p>
            <p className="text-sm text-dark font-base ml-2 mt-3">
              {" "}
              Juni 20, 2019
            </p>
          </div>
          <div className="flex ml-20">
            <div className="flex flex-col">
              <img
                className="rounded-lg w-[50rem] h-96 mt-5 mb-5"
                src={articel1}
              />
              <p className="text-green-900">
                Taman Nasional Ciletuh-Palabuhanratu, merupakan tempat wisata
                baru di Sukabumi, provinsi Jawa Barat.
              </p>
              <p className="text-green-900 font-semibold text-xl">
                Destinasi yang sering dikunjungi ini adalah Curug Cimarinjung
              </p>
              <p className="text-green-900">
                Taman Nasional Ciletuh-Palabuhanratu, merupakan tempat wisata
                baru di Sukabumi, provinsi Jawa Barat.
              </p>
              <p className="text-green-900">
                Taman Nasional Ciletuh-Palabuhanratu, merupakan tempat wisata
                baru di Sukabumi, provinsi Jawa Barat.
              </p>
              <p className="text-green-900">
                Taman Nasional Ciletuh-Palabuhanratu, merupakan tempat wisata
                baru di Sukabumi, provinsi Jawa Barat.
              </p>
              <div className="mt-5">
                <p className="text-dark mt-3 mb-2 text-xl font-semibold">
                  Kesimpulan
                </p>
                <ul className="list-disc">
                  <li>
                    Perjalanan ke Geopark Ciletuh sangat cantik, terlebih lagi
                    ketika siang hari.
                  </li>
                  <li>Dapat menikmati pemandangannya</li>
                  <li>
                    Perjalanan ke Geopark Ciletuh memang disarankan untuk
                    dilakukan pada siang hari,
                  </li>
                  <li>Memiliki pemandangan eksotis selama perjalanan</li>
                </ul>
              </div>
              <div className="">
                <p className="text-black font-medium mt-5 mb-5">Bagikan Ke :</p>
                <div className="flex mt-4 space-x-6 sm:justify-start sm:mb-5">
                  <a href="#" className=" dark:hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="#" className=" dark:hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Instagram page</span>
                  </a>
                  <a href="#" className=" dark:hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                    <span className="sr-only">Twitter page</span>
                  </a>
                  <a href="#" className=" dark:hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">GitHub account</span>
                  </a>
                  <a href="#" className=" dark:hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="sr-only">Dribbbel account</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-row justify-items-center bg-green-500 rounded-xl w-[50.1rem] h-36">
                  <img
                    className="rounded-full w-[4.5rem] h-[4.3rem] mt-10 ml-5"
                    src={profile}
                  />
                  <div>
                    <p className="text-white mt-10 ml-5">Selly Ardiyati</p>
                    <p className="text-white text-sm ml-5">
                      Halo, saya adalah seorang penulis konten yang tertarik
                      dengan konten alam, wisata, dan gaya hidup. Membantu klien
                      menghadirkan konten yang tepat kepada orang yang tepat.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row mt-10">
                <div className="flex flex-col border border-green-800 rounded-xl w-[24rem] h-36 mb-10 ">
                  <p className="text-green-900 font-medium ml-5 mt-5">
                    Post Sebelumnya
                  </p>
                  <p className="mt-[1rem] text-2xl font-medium ml-5 text-green-800">
                    5 Hotel terbaik di Geopark Ciletuh
                  </p>
                </div>
                <div className="flex flex-col border border-green-800 rounded-xl w-[23rem] h-36 ml-10">
                  <p className="text-green-900 font-medium ml-5 mt-5">
                    Post Sebelumnya
                  </p>
                  <p className="mt-[1rem] text-2xl font-medium ml-5 text-green-800">
                    Rekomendasi tempat makan yang sering dikunjungi
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-green-800 text-4xl font-semibold">
                  Komentar
                </p>
              </div>
              <div className="flex flex-row mt-3">
                <img className="w-10 h-8 rounded-full mt-3" src={profile} />
                <p className="text-base text-dark font-medium ml-3 mt-3">
                  Selly Ardiyati
                </p>
              </div>
              <div className="mt-5">
                <input
                  type="text"
                  class="w-[40rem] h-[10rem]  bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Ketikan Komentar Anda"
                />
              </div>
              <div className="flex flex-row items-end static mt-10">
                <button class="bg-green-800 hover:bg-green-400 text-white text-sm font-semibold py-5 px-7 rounded-lg mb-10">
                  Post Komentar
                </button>
              </div>
            </div>

            {/* Taks border */}
            <div className="flex flex-col ml-20 mr-20">
              <div className="order-last border border-green-800 rounded-lg mt-6 h-42 w-74">
                <div className="flex justify-center mt-5">
                  <p className="text-green-900 text-lg font-semibold">Tags</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-3 ml-20 mr-20">
                  <div className="order-last border border-green-800 rounded-xl ">
                    <div className="flex justify-center">
                      <p className="text-green-800 text-xs font-base ">Alam</p>
                    </div>
                  </div>
                  <div className="order-last border border-green-800 rounded-xl">
                    <div className="flex justify-center">
                      <p className="text-green-800 text-xs font-base">Wisata</p>
                    </div>
                  </div>
                  <div className="order-last border border-green-800 rounded-xl">
                    <div className="flex justify-center">
                      <p className="text-green-800 text-xs font-base">
                        Indonesia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-7 mb-20">
                  <div className="order-last border border-green-800 rounded-xl w-[5rem]">
                    <div className="flex justify-center">
                      <p className="text-green-800 text-xs font-base">
                        Geopark
                      </p>
                    </div>
                  </div>
                  <div className="order-last border border-green-800 rounded-xl ml-5 w-[5rem]">
                    <div className="flex justify-center">
                      <p className="text-green-800 text-xs font-base">Pantai</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-last border border-green-800 rounded-lg mt-6 mb-[40rem] h-[37rem]">
                <div className="flex justify-center mt-5">
                  <p className="text-green-900 font-semibold text-2xl">
                    Artikel Terbaru
                  </p>
                </div>
                <img
                  className="rounded-lg h-20 w-32 mt-5 ml-5"
                  src={articel2}
                />
                <div className="text-green-900 ml-40 ">
                  <p className="-mt-20 font-bold text-lg ">
                    Senyuman Baru dari Geopark Ciletuh
                  </p>
                  <p className="text-sm">Agustus 26, 2022</p>
                </div>
                <img
                  className="rounded-lg h-20 w-32 mt-14 ml-5"
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
                  className="rounded-lg h-20 w-32 mt-14 ml-5"
                  src={articel5}
                />
                <div className="text-green-900 ml-40">
                  <p className="-mt-20 font-bold text-lg">
                    Geopark Ciletuh Spektakuler
                  </p>
                  <p className="text-sm">Desember 31, 2022</p>
                </div>
                <img
                  className="rounded-lg h-20 w-32 mt-14 ml-5"
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
        </div>
      </PortalTemplate>
    </>
  );
};

export default Detail;
