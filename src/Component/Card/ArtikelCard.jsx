import profile from "../../Assets/img/profile.jpg";

const ArtikelCard = ({ artikel }) => {
  return (
    <div className="flex hover:bg-white items-center space-y-10">
      <div className="w-2/5 h-[12rem]">
        <img
          className="rounded-lg w-full h-full object-cover object-right"
          src={
            process.env.REACT_APP_API_BASE_URL +
            `/storage/artikel/` +
            artikel.thumbnail
          }
          alt="post-7"
        />
      </div>
      <div className="w-3/5 pl-5">
        <div className="tracking-wide text-sm text-dark font-semibold flex flex-row">
          <img className="w-10 h-8 rounded-full" src={profile} alt={profile} />
          <p className="text-sm text-dark mt-2 ml-2">NurFauziyah</p>
          <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
          <p className="text-sm text-dark mt-2">Wisata</p>
          <p className="text-yellow-200 text-2xl ml-1 mr-1 ">•</p>
          <p className="text-sm text-dark mt-2">September 21, 2022</p>
        </div>
        <a
          href="/Detail"
          className="block mt-1 text-xl font-semibold text-green-900"
        >
          {artikel.judul}
        </a>
        <p className="mt-2 text-green-900 text-base mr-10">
          Sukabumi menyimpan berbagai wisata alam yang membuat betah berlama -
          lama di sini. Dengan dataran tinggi, pegunungan dan pantai indah,
          menjadikan kawasan ini selalu menjadi favorit untuk liburan
        </p>
      </div>
    </div>
  );
};

export default ArtikelCard;
