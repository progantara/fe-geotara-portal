import React, { useEffect, useState } from "react";
import PortalTemplate from "../../Component/Layout";

// image
import articel1 from "../../Assets/img/Article-1.jpg";
import { getAllArtikel } from "../../Services/ArtikelService";
import ArtikelCard from "../../Component/Card/ArtikelCard";
import { Link } from "react-router-dom";
import BgHero from "../../Assets/img/hero.jpg";
import { BiChevronRight } from "react-icons/bi";

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
          <div className="h-96 w-full overflow-hidden relative lg:basis-2/3">
            <div className="w-full h-full bg-gray-900 absolute opacity-40 rounded-lg"/>
            <div className="absolute text-white bottom-28 left-10 lg:bottom-16">
              <h1 className="text-xl font-bold lg:text-3xl"><a href="/">Keragaman Keindahan, Pariwisata Indonesia</a></h1>
              <div className="flex gap-2 items-center text-xs lg:text-base">
                <p className="">Selly Ardiyaiti</p>
                <div class="w-1 h-1 rounded-full bg-yellow-300"></div>
                <p className="">Juni 27, 2019</p>
              </div>
            </div>
            <img src={BgHero} alt="" className="rounded-lg object-cover w-full h-full"/>
          </div>
          <div className="w-full border-primary border-2 flex flex-col p-5 rounded-lg lg:basis-1/3">
            <div className="flex gap-3 items-center">
              <div className="w-32 h-24 rounded-lg overflow-hidden">
                <img src={BgHero} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="text-primary">
                <h3 className="text-md font-bold lg:text-xl"><a href="/">Keragaman Keindahan, Pariwisata Indonesia</a></h3>
                <p className="text-xs lg:text-sm">August 26, 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-5 lg:px-32">
        <h2 className="text-2xl font-bold text-primary mb-4">Article</h2>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="w-full border-primary border-2 rounded-lg p-5 lg:basis-2/3">
            <div className="flex flex-col gap-2 lg:flex-row">
              <div className="w-full h-32 rounded-lg overflow-hidden lg:h-full">
                <img src={BgHero} alt="" className="w-full h-full object-cover"/>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img src={BgHero} alt="" className="h-full w-full object-cover"/>
                  </div>
                  <p className="text-xs">Nurfauziah</p>
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <p className="text-xs">Wisata</p>
                  <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
                  <p className="text-xs">September 21, 2022</p>
                </div>
                <div>
                  <h3 className="text-primary text-xl font-bold"><a href="">Lagi Viral, Yuk Healing Ke Geopark Ciletuh Sukabumi</a></h3>
                </div>
                <div>
                  <p className="text-primary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti voluptates maiores aperiam ut voluptas. Impedit delectus praesentium ad itaque?</p>
                </div>
              </div>
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

// export default Artikel;

// import React, { useEffect, useState } from "react";
// import PortalTemplate from "../../Component/Layout";

// // image
// import articel1 from "../../Assets/img/Article-1.jpg";
// import { getAllArtikel } from "../../Services/ArtikelService";
// import ArtikelCard from "../../Component/Card/ArtikelCard";
// import { Link } from "react-router-dom";

// const BannerFirstArtikel = () => {
//   return (
//     <Link to="/artikel/detail" className="relative">
//     <div className="md:flex">
//       <div className="md:shrink-0">
//       <img
//         className="rounded-lg brightness-75 pl-10 h-[40rem] w-[40rem] md:h-[35rem] md:w-[52rem]"
//         src={articel1}
//         alt="post-1"
//       />
//       </div>
//     </div>
//       <div className="absolute bottom-[10%] left-[3rem] xl:left-[10%]">
//         <div className="font-dmserif text-lg xl:text-3xl font-semibold text-white mt-96 ml-2">
//           Keragaman Keindahan Pariwista Indonesia
//         </div>
//         <div className="flex flex-row">
//           <p className="text-sm text-white font-base ml-2">Selly Ardiyati</p>
//           <p className="text-yellow-200 text-2xl ml-2 -mt-2">•</p>
//           <p className="text-sm text-white font-base ml-2"> Juni 27, 2019</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// const ListPopularArtikel = ({ artikel }) => {
//   const handleJudul = (judul) => {
//     // hanya ambil 20 karakter
//     const trimText = judul.substring(0, 40);
//     return trimText + "...";
//   };

//   const handleTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     const year = date.getFullYear();
//     // get name month
//     const month = date.toLocaleString("default", { month: "long" });
//     const day = date.getDate();

//     return `${day} ${month}, ${year}`;
//   };

//   return (
//     <Link
//       to={"/artikel/detail/" + artikel._id}
//       className="flex items-center p-2 hover:bg-white mb-2"
//     >
//       <div className="flex flex-wrap">
//         <div className="h-20 w-32">
//           <img
//             className="object-cover h-full w-full rounded-lg"
//             src={
//               process.env.REACT_APP_API_BASE_URL +
//               `/storage/artikel/` +
//               artikel.thumbnail
//             }
//             alt="post-2"
//           />
//         </div>
//       </div>
//       <div className="ml-3 text-green-900">
//         <p className="font-bold text-md">{handleJudul(artikel.judul)}</p>
//         <div className="flex flex-row items-center">
//           <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
//           <p className="text-sm">{handleTimestamp(artikel.updated_at)}</p>
//         </div>
//       </div>
//     </Link>
//   );
// };

// const Artikel = () => {
//   const items = [{ label: "Artikel", url: "/artikel" }];

//   const [artikels, setArtikels] = useState([]);

//   useEffect(() => {
//     getAllArtikel().then((res) => {
//       setArtikels(res.data.data);
//     });
//   }, []);

//   return (
//     <>
//       <PortalTemplate items={items}>
//         <div className="py-10 px-10 xl:px-20 bg-green-100">
//           <div className="flex mb-10">
//             <div className="block">
//               <BannerFirstArtikel />
//             </div>
//             <div className="block border border-green-800 rounded-lg ml-14 xl:ml-20 p-5 ">
//               <h1 className="text-xl font-bold text-center mb-2">
//                 Artikel Populer
//               </h1>
//               {artikels.map((artikel, index) => {
//                 return <ListPopularArtikel key={index} artikel={artikel} />;
//               })}
//             </div>
//           </div>
//           <div className="">
//             <p className="text-green-900 text-4xl sm:text-left font-semibold mb-4 mt-3">
//               Artikel Terbaru
//             </p>
//             <div className="max-w-4xl border border-green-800 rounded-lg flex flex-col mb-10 p-5">
//               {artikels.map((artikel) => {
//                 return <ArtikelCard key={artikel.id} artikel={artikel} />;
//               })}
//             </div>

//             <div className="pt-10 pb-14 px-40 bg-green-600 flex-col justify-center items-center text-white rounded-xl mx-auto mb-10">
//               <p className="mb-2 text-center">Newsletter</p>
//               <div className="flex flex-row gap-2 justify-center">
//                 <input
//                   type="text"
//                   placeholder="Alamat Email"
//                   className="block w-96 h-14 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 />
//                 <button className="bg-yellow-300 hover:bg-yellow-400 text-dark text-sm font-semibold py-3 px-4 rounded-lg text-green-900">
//                   Subscribe
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </PortalTemplate>
//     </>
//   );
// };

// export default Artikel;
